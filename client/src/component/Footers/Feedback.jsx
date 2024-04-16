import '../css/Feedback.css'; // Import CSS file for styling
import PropTypes from 'prop-types';
import { useState } from 'react';

function Feedback(props) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSubmitting) return; // If already submitting, do nothing
    setIsSubmitting(true); // Set isSubmitting to true to disable the button

    const scriptURL = 'https://script.google.com/macros/s/AKfycbxJzYGZE0R6W2ZLGbJZlUoxNwWShpAYhcJY4zBM9LOycb7iiM4vncS1fbSpVnIXwKIU/exec';
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
    <div className='feedback-main-box'>
      <h2 className="text-center Heading-Page">Feedback</h2>
      <form className="feedback-container container mt-4" name="submit-to-google-sheet" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="Name" className="form-label">Name:</label>
          <input type="text" id="Name" name='Name' className="form-control" placeholder='Enter your name here *' required='true' />
        </div>
        <div className="mb-3">
          <label htmlFor="Email" className="form-label">Email:</label>
          <input type="email" id="Email" name='Email' className="form-control" placeholder='Enter your email here' required='true' />
        </div>
        <div className="mb-3">
          <label htmlFor="Rating" className="form-label">Rating &nbsp;(1-10):</label>
          <input type="number" id="Rating" name='Rating' className="form-control" placeholder='Enter your rating here' min={0} max={10}/>
        </div>
        <div className="mb-3">
          <label htmlFor="Feedback" className="form-label">Feedback:</label>
          <textarea
            id="Feedback" className="form-control" name='Feedback' rows="5" placeholder='Enter your feedback here' required='true' ></textarea>
        </div>
        <button className="btn btn-primary" type="submit" disabled={isSubmitting} style={{ background: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'dark' ? 'white' : 'black', outline: props.mode=== 'dark' ? '2px solid white': '2px solid black'}}>Submit</button>
      </form>
    </div>
  );
}

Feedback.propTypes = {
  showAlert: PropTypes.func,
  mode: PropTypes.string,
};

export default Feedback;
