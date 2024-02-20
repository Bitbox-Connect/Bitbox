export default function About() {
  return (
    <div>
      <h2 className='text-center mb-4 mt-2'>About Us</h2>
      <div className='container'>
        <div className="accordion" id="accordionExample">
          {/* First Accordion Item */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Project Overview
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Open Source is a community-driven platform aimed at helping individuals who are stuck in their projects. Our community members offer assistance and receive help in various technologies. The purpose of Open Source is to build a collaborative environment where knowledge sharing and mutual support thrive.
                <br />
                Open Source is a platform where individuals can seek help and offer assistance in their projects. It fosters a supportive community for collaboration and knowledge sharing.
              </div>
            </div>
          </div>
          {/* Second Accordion Item */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Community Features
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Open Source offers secure login and signup functionality to its users. Users can upload new projects, and they have the ability to delete, edit, and view their projects separately. Additionally, there is a community section where all user projects are visible, promoting collaboration and sharing of knowledge.
              </div>
            </div>
          </div>
          {/* Third Accordion Item */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Technology and Compatibility
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Open Source is compatible with all modern web browsers, including Chrome, Firefox, Internet Explorer, Safari, Opera, and Microsoft Edge. It provides a seamless experience for users across different platforms and devices.
              </div>
            </div>
          </div>
          {/* Fourth Accordion Item */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                Secure Authentication
              </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Open Source implements secure authentication mechanisms for user accounts. This ensures that user data and interactions within the platform are protected from unauthorized access.
              </div>
            </div>
          </div>
          {/* Fifth Accordion Item */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                Project Management
              </button>
            </h2>
            <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Open Source enables users to efficiently manage their projects. Users can create, update, delete, and view their projects within the platform, facilitating effective project organization and collaboration.
              </div>
            </div>
          </div>
          {/* Sixth Accordion Item */}
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                UI Friendliness
              </button>
            </h2>
            <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Open Source prioritizes user interface (UI) friendliness to ensure an intuitive and enjoyable user experience. The interface is designed with simplicity and ease of navigation in mind, allowing users to seamlessly interact with the platform and access its features.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
