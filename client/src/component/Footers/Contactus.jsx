import "../../css/Main.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactUs(props) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const VITE_SERVER_PORT =
    import.meta.env.VITE_SERVER_PORT || "https://bitbox-uxbo.onrender.com";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return; // Prevent multiple submissions
    setIsSubmitting(true); // Disable the button

    // Validate name
    if (!name.trim()) {
      toast.error("Please enter a valid name");
      setIsSubmitting(false);
      return;
    }

    // Basic email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    // Validate message
    if (!message.trim()) {
      toast.error("Please enter a valid message");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch(
        `${VITE_SERVER_PORT}/api/contact/submitContactForm`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        }
      );

      const result = await response.json();
      // Check if the request was successful
      if (response.ok) {
        toast.success("Message Sent Successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        toast.error(result.message || "Error in submission!");
      }
    } catch (error) {
      // Handle network or other fetch-related errors
      toast.error("Something went wrong. Please try again.");
    } finally {
      // Reset the submitting state regardless of the outcome
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container contactus-container">
      <h2 className="text-center Heading-Page">Contact Us</h2>
      <form
        className="mt-4 contactus-main-box"
        name="submit-to-google-sheet"
        onSubmit={handleSubmit}
        noValidate
      >
        <div className="mb-3">
          <label htmlFor="Name" className="form-label">
            Your Name:
          </label>
          <input
            type="text"
            id="Name"
            name="Name"
            className="form-control"
            placeholder="Enter your Name"
            required="true"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Email" className="form-label">
            Your Email:
          </label>
          <input
            type="email"
            id="Email"
            name="Email"
            className="form-control"
            placeholder="Enter your Email"
            required="true"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state
          />
        </div>
        <div className="mb-3">
          <label htmlFor="Message" className="form-label">
            Message:
          </label>
          <textarea
            id="Message"
            name="Message"
            className="form-control"
            rows="5"
            placeholder="Write your message..."
            required="true"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button
          className="btn btn-light "
          type="submit"
          style={{
            background: props.mode === "dark" ? "black" : "white",
            color: props.mode === "dark" ? "white" : "black",
            outline:
              props.mode === "dark" ? "2px solid white" : "2px solid black",
          }}
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

ContactUs.propTypes = {
  showAlert: PropTypes.func,
  mode: PropTypes.string,
};

export default ContactUs;
