import React, { useState } from "react";
import "./Llm.css"; // Import CSS file
import Email from "./Email"; // Import the Email component

const Llm = () => {
    const [url, setUrl] = useState(""); // URL entered by user
    const [email, setEmail] = useState(""); // Generated email
    const [loading, setLoading] = useState(false); // Loading state
    const [error, setError] = useState(""); // Error state

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(""); // Clear previous errors
        setEmail(""); // Clear previous email

        try {
            const response = await fetch('http://127.0.0.1:5000/generate_email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            if (result && result.emails && result.emails.length > 0) {
                setEmail(result.emails[0]);
            } else {
                setError("No email found in the response.");
            }
        } catch (err) {
            setError(`Error fetching email: ${err.message}`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="email-generator-container">
            <Email
                url={url}
                setUrl={setUrl}
                email={email}
                loading={loading}
                error={error}
                handleSubmit={handleSubmit}
            />
        </div>
    );
};

export default Llm;
