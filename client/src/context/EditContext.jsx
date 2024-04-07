// import React, { createContext, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import axios from 'axios';

// // Create context
// export const EditContext = createContext();

// export const EditProvider = ({ children }) => {
//     // State for storing profiles
//     const [profiles, setProfiles] = useState([]);

//     // Function to fetch profiles from the server
//     const fetchProfiles = async () => {
//         try {
//             const response = await axios.get('http://localhost:5173/edituser'); // Adjust the endpoint URL accordingly
//             setProfiles(response.data); // Assuming the response data is an array of profiles
//         } catch (error) {
//             console.error('Error fetching profiles:', error);
//         }
//     };

//     // Function to add a new profile
//     const addProfile = async (newProfile) => {
//         try {
//             const response = await axios.post('/api/edituser', newProfile); // Adjust the endpoint URL accordingly
//             setProfiles([...profiles, response.data]); // Assuming the response data is the newly added profile
//         } catch (error) {
//             console.error('Error adding profile:', error);
//         }
//     };

//     // Function to update an existing profile
//     const updateProfile = async (updatedProfile) => {
//         try {
//             const response = await axios.put(`/api/edituser/${updatedProfile.id}`, updatedProfile); // Adjust the endpoint URL accordingly
//             const updatedProfiles = profiles.map((profile) =>
//                 profile.id === updatedProfile.id ? response.data : profile
//             );
//             setProfiles(updatedProfiles);
//         } catch (error) {
//             console.error('Error updating profile:', error);
//         }
//     };

//     // Function to delete a profile
//     const deleteProfile = async (profileId) => {
//         try {
//             await axios.delete(`/api/edituser/${profileId}`); // Adjust the endpoint URL accordingly
//             setProfiles(profiles.filter((profile) => profile.id !== profileId));
//         } catch (error) {
//             console.error('Error deleting profile:', error);
//         }
//     };

//     // Fetch profiles when the component mounts
//     useEffect(() => {
//         fetchProfiles();
//     }, []);

//     return (
//         <EditContext.Provider value={{ profiles, addProfile, updateProfile, deleteProfile }}>
//             {children}
//         </EditContext.Provider>
//     );
// };
