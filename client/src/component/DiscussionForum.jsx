import { useState, useEffect } from 'react';

const DiscussionForum = (props) => {
    const [questions, setQuestions] = useState([]);

    // Fetch questions from localStorage
    useEffect(() => {
        const storedQuestions = localStorage.getItem('questions');
        if (storedQuestions) {
            setQuestions(JSON.parse(storedQuestions));
        }
    }, []);

    // Save questions to localStorage
    const saveQuestions = (updatedQuestions) => {
        setQuestions(updatedQuestions);
        localStorage.setItem('questions', JSON.stringify(updatedQuestions));
    };

    // Helper function to save a new question
    const addQuestion = (content) => {
        const newQuestion = {
            id: Date.now().toString(),
            content,
            answered: false,
            answer: '',
        };

        const updatedQuestions = [...questions, newQuestion];
        saveQuestions(updatedQuestions);
    };

    // Helper function to add an answer to a question
    const addAnswer = (questionId, answerContent) => {
        const updatedQuestions = questions.map((question) =>
            question.id === questionId
                ? { ...question, answered: true, answer: answerContent }
                : question
        );
        saveQuestions(updatedQuestions);
    };

    // Function to render the Question Card
    const renderQuestionCard = (question) => {
        return (
            <div
                className={`${props.mode === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'
                    } p-6 rounded-lg shadow-lg mb-6 w-full md:w-[48%] lg:w-[30%] transition-transform transform hover:scale-105`}
                key={question.id}
            >
                <p className="text-xl font-semibold">{question.content}</p>
                {question.answered ? (
                    <div className={`mt-4 ${props.mode === 'dark' ? 'bg-gray-700' : 'bg-white'} p-4 rounded-md shadow-md`}>
                        <h3 className="text-lg font-semibold">Answer:</h3>
                        <p>{question.answer}</p>
                    </div>
                ) : (
                    <AnswerForm questionId={question.id} />
                )}
            </div>
        );
    };

    // Function to render the Answer Form
    const AnswerForm = ({ questionId }) => {
        const [answer, setAnswer] = useState('');

        const handleSubmit = (e) => {
            e.preventDefault();
            if (answer.trim()) {
                addAnswer(questionId, answer);
                setAnswer('');
            }
        };

        return (
            <form onSubmit={handleSubmit} className={`${props.mode === 'dark' ? 'bg-gray-700' : 'bg-white'} p-4 rounded-md shadow-md mt-4`}>
                <textarea
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    placeholder="Write your answer..."
                    className={`w-full p-4 border rounded-md ${props.mode === 'dark' ? 'bg-gray-600 text-gray-200' : 'bg-gray-100 text-gray-800'
                        } focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all`}
                />
                <button
                    type="submit"
                    className="mt-4 bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
                >
                    Submit Answer
                </button>
            </form>
        );
    };

    // Function to render the Question Form
    const QuestionForm = () => {
        const [newQuestion, setNewQuestion] = useState('');

        const handleSubmit = (e) => {
            e.preventDefault();
            if (newQuestion.trim()) {
                addQuestion(newQuestion);
                setNewQuestion('');
            }
        };

        return (
            <div className={`p-6 rounded-lg shadow-lg mb-8 ${props.mode === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'}`}>
                <textarea
                    value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)}
                    placeholder="Ask your question..."
                    className={`w-full p-4 border rounded-md ${props.mode === 'dark' ? 'bg-gray-600 text-gray-200' : 'bg-gray-100 text-gray-800'
                        } focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all`}
                />
                <button
                    onClick={handleSubmit}
                    className="mt-4 bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 transition-colors"
                >
                    Ask Question
                </button>
            </div>
        );
    };

    return (
        <div className="container mx-auto px-6 py-8 mt-20">
            <h1 className="text-4xl font-bold text-center mb-8">
                BITBOX Discussion Forum
            </h1>

            <QuestionForm />

            <div>
                <h2 className="text-2xl font-semibold mb-6">Unanswered Questions</h2>
                <div className="flex flex-wrap gap-6">
                    {questions
                        .filter((question) => !question.answered)
                        .map((question) => renderQuestionCard(question))}
                </div>
            </div>
            <div class="p-[1px] bg-blue-500 text-white rounded-md shadow">
            </div>
            <div>
                <h2 className="text-2xl font-semibold mb-6 mt-8">Answered Questions</h2>
                <div className="flex flex-wrap gap-6">
                    {questions
                        .filter((question) => question.answered)
                        .map((question) => renderQuestionCard(question))}
                </div>
            </div>
        </div>
    );
};

export default DiscussionForum;
