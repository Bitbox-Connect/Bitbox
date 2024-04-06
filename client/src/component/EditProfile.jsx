import React from 'react'
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
export default function EditProfile() {
    const [closebtn ,setClosebtn] = useState(false);
    const handleClose = () =>{
        setClosebtn(true);
    }
  return (
    <div>
      <div className="row">
                <div className="col-md-3">
                    <div className="text-center">
                        <img src="https://png.pngitem.com/pimgs/s/150-1503945_transparent-user-png-default-user-image-png-png.png" className="avatar img-circle" alt="avatar" />
                        <h6>Upload a different photo...</h6>
                        <input type="file" className="form-control" />
                    </div>
                </div>

                <div className="col-md-9 personal-info">
                    <div className="alert alert-info alert-dismissable">
                        <button type="button" className="close" data-dismiss="alert">×</button>
                        <i className="fa fa-coffee"></i>
                        This is an <strong>.alert</strong>. Use this to show important messages to the user.
                    </div>
                    <h3>Personal info</h3>
                    <div className="col-lg-8 pb-5">
                        <Form>
                            <Form.Group className="mb-3" controlId="formFullName">
                                <Form.Label>Full Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your full name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formEmail">
                                <Form.Label>Email Address</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email address" disabled />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formCollege">
                                <Form.Label>College</Form.Label>
                                <Form.Control type="text" placeholder="Enter your college name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formPhoneNumber">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control type="text" placeholder="Enter your phone number" />
                            </Form.Group>
                            <Button variant="primary" type="button">Update Profile</Button>
                        </Form>
                    </div>
                    <hr />

                    <h3>Social Links</h3>
                    <div className="col-lg-8 pb-5">
                        <Form>
                            <Form.Group className="mb-3" controlId="formGithub">
                                <Form.Label>Github</Form.Label>
                                <Form.Control type="text" placeholder="Enter your Github profile link" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formLinkedIn">
                                <Form.Label>LinkedIn</Form.Label>
                                <Form.Control type="text" placeholder="Enter your LinkedIn profile link" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formTwitter">
                                <Form.Label>Twitter</Form.Label>
                                <Form.Control type="text" placeholder="Enter your Twitter profile link" />
                            </Form.Group>
                            <Button variant="primary" type="button">Update Profile</Button>
                        </Form>
                    </div>
                    <hr />

                    <h3>Technical Skills</h3>
                    <div className="col-lg-8 pb-5">
                        <Form>
                            <Form.Group className="mb-3" controlId="formSkills">
                                <Form.Label>Skills</Form.Label>
                                <Form.Control type="text" placeholder="Enter your technical skills" />
                            </Form.Group>
                            <Button variant="primary" type="button">Update Profile</Button>
                        </Form>
                    </div>
                    <hr />

                    <h3>Change Password</h3>
                    <div className="col-lg-8 pb-5">
                        <Form>
                            <Form.Group className="mb-3" controlId="formNewPassword">
                                <Form.Label>New Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter your new password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formConfirmPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control type="password" placeholder="Confirm your new password" />
                            </Form.Group>
                            <Button variant="primary" type="button">Update Password</Button>
                            <button onClick={handleClose}>Close</button> {/* Close button */}
                        </Form>
                    </div>
                    <hr />
                </div>
            </div>
    </div>
  )
}
