from flask import Flask, request, jsonify
from langchain_community.document_loaders import WebBaseLoader
from chains import Chain
from portfolio import Portfolio
from utils import clean_text

# Initialize Flask app
app = Flask(__name__)

# Initialize Chain and Portfolio
chain = Chain()
portfolio = Portfolio()

@app.route('/generate_email', methods=['POST'])
def generate_email_api():
    try:
        # Get URL from the incoming JSON request
        data = request.get_json()
        url_input = data.get('url', '')

        if not url_input:
            return jsonify({"error": "URL is required!"}), 400

        # Clean and process the URL
        loader = WebBaseLoader([url_input])
        cleaned_data = clean_text(loader.load().pop().page_content)

        # Load the portfolio
        portfolio.load_portfolio()

        # Extract jobs
        jobs = chain.extract_jobs(cleaned_data)

        if not jobs:
            return jsonify({"error": "No jobs found in the extracted data."}), 404

        # Generate emails for each job
        emails = []
        for job in jobs:
            skills = job.get('skills', [])
            links = portfolio.query_links(skills)
            email = chain.write_mail(job, links)
            emails.append(email)

        # Return the generated email(s)
        return jsonify({"emails": emails})

    except Exception as e:
        return jsonify({"error": f"An error occurred: {e}"}), 500


if __name__ == "__main__":
    app.run(debug=True)
