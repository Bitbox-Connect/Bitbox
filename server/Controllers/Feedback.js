const FeedbackForm = require('../Models/feedback');
const { sendMailToAdmin } = require('../sendFeedbackToAdmin');

const submitFeedback = async (req, res) => {
    // Extract data from the request body
    const {
        Name,
        Email,
        Subject,
        Date,        // Correctly match the field from frontend
        Device,      // Correctly match the field from frontend
        Priority,    // Correctly match the field from frontend
        Suggestions,
        Feedback,
        Rating
    } = req.body;


    const feedbackData = {
        name: Name,
        email: Email,
        subject: Subject,
        dateOfVisit: Date,          // Match the frontend field
        deviceUsed: Device,         // Match the frontend field
        priorityLevel: Priority,    // Match the frontend field
        suggestions: Suggestions,
        feedback: Feedback,
        rating: Rating,
    };

    sendMailToAdmin(feedbackData)


    try {
        const feed = new FeedbackForm(feedbackData);
        await feed.save();
        res.status(200).json({ status: 200, message: 'feedback form submitted successfully.' });
    } catch (error) {
        console.error("Error in submitting feedback form:", error);
        res.status(500).json({ error: "Feedback form not submitted successfully." });
    }
};

module.exports = {
    submitFeedback,
};
