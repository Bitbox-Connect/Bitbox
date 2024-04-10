import { useState } from 'react';
import '../css/Feedback.css'; // Import CSS file for styling

function FeedbackForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(1); // Initialize rating state to 1
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Rating:', rating);
    console.log('Feedback:', feedback);
    setName('');
    setEmail('');
    setRating(1); // Reset rating to 1 after submission
    setFeedback('');
  };

  const handleHoverRating = (value) => {
    setRating(value);
  };

  return (
    <div className='feedback-main-box'>
      <h2 className="text-center Heading-Page">Feedback</h2>
      <form onSubmit={handleSubmit} className="feedback-container container mt-4">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rating" className="form-label">Rating:</label>
          <div className="rating-container">
            {[1, 2, 3, 4, 5].map((value) => (
              <button
                key={value}
                type="button"
                className={`star ${value <= rating ? 'active' : ''}`}
                onMouseEnter={() => handleHoverRating(value)}
                onMouseLeave={() => handleHoverRating(0)}
                onClick={() => setRating(value)}
              >
                &#9733;
              </button>
            ))}
          </div>
          <input type="hidden" name="rating" value={rating} />
        </div>
        <div className="mb-3">
          <label htmlFor="feedback" className="form-label">Feedback:</label>
          <textarea
            id="feedback"
            className="form-control"
            rows="5"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default FeedbackForm;
