import React from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardFooter,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRadio,
  MDBRow,
  MDBTextArea,
} from "mdb-react-ui-kit";
// import "./feedback.css"; // Import the CSS file

export default function Feedback() {
  return (
    <MDBContainer className="container">
      <MDBRow>
        <MDBCol size="12" md="6" className="feedback-form">
          <MDBCard>
            <MDBCardBody>
              <div className="text-center">
                <MDBIcon far icon="file-alt" className="mb-3 text-primary" size="4x" />
                <p>
                  <strong>Your opinion matters</strong>
                </p>
                <p>
                  Have some ideas on how to improve our product?
                  <strong> Give us your feedback.</strong>
                </p>
              </div>

              <hr />

              <form className="px-4">
                <p className="text-center">
                  <strong>Your rating:</strong>
                </p>
                <MDBRadio
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  label="Very good"
                  className="mb-2"
                  defaultChecked
                />
                <MDBRadio
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  label="Good"
                  className="mb-2"
                />
                <MDBRadio
                  name="flexRadioDefault"
                  id="flexRadioDefault3"
                  label="Mediocre"
                  className="mb-2"
                />
                <MDBRadio
                  name="flexRadioDefault"
                  id="flexRadioDefault4"
                  label="Bad"
                  className="mb-2"
                />
                <MDBRadio
                  name="flexRadioDefault"
                  id="flexRadioDefault5"
                  label="Very bad"
                  className="mb-2"
                />
                <p className="text-center">
                  <strong>What could we improve?</strong>
                </p>
                <MDBTextArea className="mb-4" id="textAreaExample" label="Message" rows={4} />
              </form>
            </MDBCardBody>
            <MDBCardFooter>
              <div className="text-end">
                <MDBBtn>Submit</MDBBtn>
              </div>
            </MDBCardFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
