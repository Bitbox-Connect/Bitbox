import '../css/Main.css';
import PropTypes from 'prop-types';
import { useState } from 'react';

function ContactUs(props) {

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return; // If already submitting, do nothing
    setIsSubmitting(true); // Set isSubmitting to true to disable the button

    const scriptURL = 'https://script.google.com/macros/s/AKfycby9s-kpS5yJrvU-igVgY4-B2m0YDoSVyhXHtpjmMAYjBQ2ECPBT7uZzy5qya9IyYq4/exec';
    const form = document.forms['submit-to-google-sheet'];

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        form.reset();
        setIsSubmitting(false); // Re-enable the button
        props.showAlert("Form Submitted Successfully", "success");
        console.log('Success!', response);
      })
      .catch(error => {
        setIsSubmitting(false); // Re-enable the button
        props.showAlert("Form Submission Failed", "danger");
        console.error('Error!', error.message);
      });
  };

  return (
    <div className="container contactus-container">
      <h2 className='text-center Heading-Page'>Contact Us</h2>
      <form className='mt-4 contactus-main-box' name="submit-to-google-sheet" onSubmit={handleSubmit}>
        <div className="mb-3" >
          <label htmlFor="Name" className="form-label">Your Name:</label>
          <input type="text" id="Name" name="Name" className="form-control" placeholder='Enter your Name'required='true'/>
        </div>
        <div className="mb-3">
          <label htmlFor="Email" className="form-label">Your Email:</label>
          <input type="email" id="Email" name="Email" className="form-control" placeholder='Enter your Email' required='true' />
        </div>
        <div className="mb-3">
          <label htmlFor="Message" className="form-label">Message:</label>
          <textarea id="Message" name="Message" className="form-control" rows="5" placeholder='Write your message...' required='true'></textarea>
        </div>
        <button className="btn btn-light" type="submit" style={{ background: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black', outline: props.mode=== 'dark' ? '2px solid white': '2px solid black'}}>Submit</button>
      </form>
    </div>
  );
}

ContactUs.propTypes = {
  showAlert: PropTypes.func,
  mode: PropTypes.string,
};

export default ContactUs;
