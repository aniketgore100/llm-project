import React from "react";
import "./Llm.css"; // Import CSS file

const Email = ({ url, setUrl, email, loading, error, handleSubmit }) => {
    return (
        <div className="email-generator">
            <h1>Email Generator</h1>
            
            {/* Form to input URL */}
            <form onSubmit={handleSubmit} className="email-generator-form">
                <label htmlFor="url" className="email-generator-label">
                    Enter URL:
                </label>
                <input
                    type="text"
                    id="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)} // Update URL state
                    placeholder="Enter job posting URL"
                    className="email-generator-input"
                />
                <button
                    type="submit"
                    className="email-generator-button"
                    disabled={loading} // Disable button while loading
                >
                    {loading ? "Generating..." : "Generate Email"}
                </button>
            </form>

            {/* Display error if there's any */}
            {error && (
                <div className="email-generator-error">
                    <strong>Error:</strong> {error}
                </div>
            )}

            {/* Display generated email */}
            {email && (
                <div className="email-generator-output">
                    <h2>Generated Email:</h2>
                    <textarea
                        value={email}
                        readOnly
                        rows="10"
                        cols="50"
                        className="email-generator-textarea"
                    />
                </div>
            )}
        </div>
    );
};

export default Email;
