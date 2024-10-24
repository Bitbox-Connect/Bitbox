import PropTypes from 'prop-types';
import { useState } from 'react';
import ProfileContext from './profileContext';

const ProfileState = (props) => {
    const SERVER_PORT = import.meta.env.SERVER_PORT || 'http://localhost:5000';
    const profileInitial = [];

    const [userProfile, setUserProfile] = useState(profileInitial);

    const createUserProfile = async (name, college, phone, address) => {
        try {
            const response = await fetch(`${SERVER_PORT}/api/profile/createprofile`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token'),
                },
                body: JSON.stringify({ name, college, phone, address }),
            });
            const profile = await response.json();
            setUserProfile([profile, ...userProfile]);
        } catch (error) {
            console.error('Error creating profile:', error);
        }
    };

    const getUserProfile = async () => {
        try {
            const response = await fetch(`${SERVER_PORT}/api/profile/fetchprofile`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token'),
                },
            });
            const json = await response.json();
            setUserProfile(json);
        } catch (error) {
            console.error('Error fetching profile:', error);
        }
    };

    const updateUserProfile = async (name, college, phone, address) => {
        try {
            const response = await fetch(`${SERVER_PORT}/api/profile/updateprofile`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('token'),
                },
                body: JSON.stringify({ name, college, phone, address }),
            });
            const profile = await response.json();
            setUserProfile([profile, ...userProfile]);
        } catch (error) {
            console.error('Error creating profile:', error);
        }
    };

    return (
        <ProfileContext.Provider value={{ userProfile, createUserProfile, getUserProfile, updateUserProfile }}>
            {props.children}
        </ProfileContext.Provider>
    );
};

ProfileState.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ProfileState;
