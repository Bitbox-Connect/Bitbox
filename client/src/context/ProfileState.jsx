import profileContext from './profileContext'
const profileState = (props) => {
  const host = 'http://localhost:5000';
  const profileInitial = [];

  const [userProfile, setUserProfile] = useState(profileInitial);

  // Edit Profile
  const editProfile = async () => {
    // API CALL - Edit Profile
    let response = await fetch(`${host}/api/profile/editprofile`, {
      method: "POST",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(allInputValue)
    })
    console.log(res)
  }
  return (
    <profileContext.Provider value={{ userProjects, globalProjects, getUserProjects, getGlobalProjects, addProject, deleteProject, editProject }}>
      {/* <SearchProjects onSearch={handleSearch} /> */}
      {props.children}
    </profileContext.Provider>
  )
}

export default profileState
