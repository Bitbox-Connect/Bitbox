import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import profileContext from '../context/profileContext';
import './css/EditProfile.css'

const EditProfile = ({ showAlert, onUpdateProfile }) => {
    const userProfileContext = useContext(profileContext);
    const { createUserProfile } = userProfileContext;

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
        createUserProfile(profile.name, profile.college, profile.phone, profile.address);
        setProfile({ name: "", college: "", phone: "", address: "" });
        showAlert("Profile Updated Successfully", "success");
        onUpdateProfile(); // Notify parent component about the profile update
    };

    return (
        <div>
            <div className='editprofile-main-container'>
                <div className="row">
                    <div className="col-md-3 editprofile-avatar-container">
                        <h2>Edit Details</h2>
                        <div className="text-center">
                            <img src="https://png.pngitem.com/pimgs/s/150-1503945_transparent-user-png-default-user-image-png-png.png" className="avatar img-circle" alt="avatar" />
                            <h6>Upload a different photo...</h6>
                            <input type="file" className="form-control" />
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
