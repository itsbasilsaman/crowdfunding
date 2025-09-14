import React, { useState } from 'react';

const Feedback: React.FC = () => {
  const [projectId] = useState(1);
  const [feedbackText, setFeedbackText] = useState('');
  const [sentiment, setSentiment] = useState('Positive');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackText || !sentiment) return;
    setSubmitted(true);
    alert(`Feedback submitted: ${feedbackText} (${sentiment})`);
  };

  return (
    <section className="section pt-24 min-h-screen bg-gradient-to-br from-white to-gray-100 flex items-center justify-center">
      <div className="content-block max-w-lg w-full shadow-xl rounded-2xl bg-white p-8 border border-gray-200">
        <h2 className="text-3xl font-extrabold text-[#333333] mb-2 text-center tracking-tight">Submit Feedback</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="feedback-project-id" className="form-label block mb-1 font-medium text-gray-700">Project ID</label>
            <input type="number" id="feedback-project-id" className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50" value={projectId} readOnly />
          </div>
          <div>
            <label htmlFor="feedback-text" className="form-label block mb-1 font-medium text-gray-700">Your Feedback</label>
            <textarea id="feedback-text" className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:outline-none transition" value={feedbackText} onChange={e => setFeedbackText(e.target.value)} required />
          </div>
          <div>
            <label htmlFor="feedback-sentiment" className="form-label block mb-1 font-medium text-gray-700">Sentiment</label>
            <select id="feedback-sentiment" className="form-input w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:outline-none transition" value={sentiment} onChange={e => setSentiment(e.target.value)} required>
              <option value="Positive">Positive</option>
              <option value="Negative">Negative</option>
              <option value="Neutral">Neutral</option>
            </select>
          </div>
          <button type="submit" className="custom-button w-full py-2 text-lg" disabled={submitted}>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Feedback;
