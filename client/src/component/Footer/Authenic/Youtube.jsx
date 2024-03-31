import React from 'react'

export default function Youtube() {
  return (
    <div>

      <h2>User Profile Dashboard</h2>
      <div className="user-profile-dashboard">
        <div className="user-details">
          <div className="detail-left">
            <div className="left">
              <div className="profile-picture">
                <img src={avatar} alt="Profile" />
              </div>
              <div className="bio">

              </div>
              <button onClick={togglePrivacy}>
              </button>
              <div className="links">

              </div>
              <div className="skills">
                <h3>Skills</h3>

              </div>
              <div className="experience">

              </div>
            </div>
          </div>
          <div className="detail-right">
            <div className="right">
              <h2>About</h2>
              <div>

              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}
