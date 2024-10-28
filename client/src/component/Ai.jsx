import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const Ai = () => {
  const [apiKey, setApiKey] = useState("");
  const [codeInput, setCodeInput] = useState("");
  const [projectType, setProjectType] = useState("");
  const [reviewResult, setReviewResult] = useState("");
  const [ideaResult, setIdeaResult] = useState("");
  const [error, setError] = useState("");

  const handleInput = async (type) => {
    if (!apiKey) {
      setError("API Key is required");
      return;
    }

    setError("");
    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      if (type === "review") {
        const prompt =
          "Review the following code and provide feedback. \n\n" + codeInput;

        const result = await model.generateContent(prompt);
        setReviewResult(result.response.text());
      } else if (type === "ideas") {
        const prompt =
          "Generate project ideas for a " + projectType + " project.";
        const result = await model.generateContent(prompt);
        setIdeaResult(result.response.text());
      }
    } catch (err) {
      setError("An error occurred while processing your request.");
    }
  };

  return (
    <div className="p-6 min-h-screen text-black overflow-auto main-content">
      {/* API Key Input */}
      <div className="mb-4">
        <input
          type="text"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          placeholder="Enter your Gemini API Key"
          className="w-full p-2 border border-gray-300 rounded text-black"
        />
      </div>

      {/* Code Review Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">AI Code Review</h3>
        <textarea
          value={codeInput}
          onChange={(e) => setCodeInput(e.target.value)}
          placeholder="Paste your code here..."
          className="w-full p-2 border rounded mb-2 text-black"
        />
        <button
          onClick={() => handleInput("review")}
          className="px-4 py-2 rounded bg-blue-400 hover:bg-blue-600"
        >
          Review Code
        </button>
        {reviewResult && <pre className="mt-4 p-2 rounded">{reviewResult}</pre>}
      </div>

      {/* Project Ideas Section */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">AI Project Ideas</h3>
        <input
          type="text"
          value={projectType}
          onChange={(e) => setProjectType(e.target.value)}
          placeholder="Enter project type (e.g., web app, mobile app)"
          className="w-full p-2 border rounded mb-2 text-black"
        />
        <button
          onClick={() => handleInput("ideas")}
          className="px-4 py-2 bg-green-500 rounded hover:bg-green-600"
        >
          Generate Ideas
        </button>
        {ideaResult && (
          <pre className="mt-4 p-2 border rounded">{ideaResult}</pre>
        )}
      </div>

      {/* Error Message */}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Ai;
