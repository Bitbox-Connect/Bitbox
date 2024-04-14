import { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import axios from 'axios'
import profileContext from '../context/profileContext';
// CSS
import './css/EditProfile.css'

const EditProfile = ({ showAlert }) => {
    const host = 'http://localhost:5000'
    const userProfileContext = useContext(profileContext);
    const { updateUserProfile } = userProfileContext;

    const [profile, setProfile] = useState({ name: '', college: '', phone: '', address: '' });

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleClick();
        }
    }

    const onChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handleClick = async () => {
        try {
            updateUserProfile(profile.name, profile.college, profile.phone, profile.address);
            setProfile({ name: "", college: "", phone: "", address: "" });
            const reader = new FileReader();
            reader.onloadend = () => {
                const imageData = reader.result;
                axios.post(`${host}/uploadAvatarImage`, { image: imageData })
                    .then(res => {
                        console.log(res)
                        // After successful upload, fetch the updated image
                        axios.get(`${host}/getAvatarImage`)
                            .then(res => setImage(res.data[res.data.length - 1].image)) // Fetch the last uploaded image
                            .catch(err => console.log(err))
                    })
                    .catch(err => console.log(err))
            }
            reader.readAsDataURL(file);
            showAlert("Profile Updated Successfully", "success");
        } catch (error) {
            showAlert("Profile Updated Failed", "danger");
        }
    };

    // For Avatar Uploading 
    const [file, setFile] = useState()
    const [image, setImage] = useState()

    useEffect(() => {
        // Fetch initial image when component mounts
        axios.get(`{host}/getAvatarImage`)
            .then(res => setImage(res.data[res.data.length - 1].image)) // Fetch the last uploaded image
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <div className='editprofile-main-container'>
                <div className="row">
                    <div className="col-md-3 editprofile-avatar-container">
                        <h2>Edit Details</h2>
                        <div className="text-center">
                            {image ? (
                                <img src={image} style={{ width: "22vw", height : "38vh" }}
                                    className="avatar img-circle"
                                    alt="avatar"
                                />
                            ) : (
                                <img
                                    src="https://png.pngitem.com/pimgs/s/150-1503945_transparent-user-png-default-user-image-png-png.png"
                                    className="avatar img-circle"
                                    alt="avatar"
                                />
                            )}
                            <input type="file" className="form-control mt-2" onChange={e => setFile(e.target.files[0])} />
                        </div>
                    </div>
                    <div className="col-md-9 editprofile-info-container">
                        <h2 className='Heading-Page'>Personal info</h2>
                        <div className="col-lg-8 pb-5">
                            <div>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Full Name</label>
                                    <input autoFocus type="text" className="form-control" placeholder="Enter your full name" id="name" name='name' value={profile.name} onChange={onChange} required onKeyDown={handleKeyDown} />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input autoFocus type="text" className="form-control" placeholder="Enter your address" id="address" name='address' value={profile.address} onChange={onChange} required onKeyDown={handleKeyDown} />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="college" className="form-label">College</label>
                                    <input autoFocus type="text" className="form-control" placeholder="Enter your college name" id="college" name='college' value={profile.college} onChange={onChange} required onKeyDown={handleKeyDown} />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="phone" className="form-label">Phone Number</label>
                                    <input autoFocus type="text" className="form-control" placeholder="Enter your phone number" id="phone" name='phone' value={profile.phone} onChange={onChange} required onKeyDown={handleKeyDown} />
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <Button variant="primary" style={{ width: "100%" }} onClick={handleClick}>Update Profile</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

EditProfile.propTypes = {
    showAlert: PropTypes.func,
    onUpdateProfile: PropTypes.func, // Function to notify parent about profile update
};

export default EditProfile;
