# Email Generation using Gen AI 

This tool is designed to generate personalized emails based on a given URL and user-inputted prompt. It simplifies the process of extracting relevant data from web pages and generating tailored email content with the help of cutting-edge technologies.

---

## How It Works

### 1. **Input**
The user provides:
- A URL (e.g., a career page).
- A custom prompt for generating the email.

### 2. **Scraping**
- **LangChain** is used to scrape text content from the provided URL.
- The scraping process is guided by a predefined, hardcoded prompt in the backend to ensure relevant and focused data extraction.

### 3. **Processing with LLM**
- The extracted text, combined with the user-inputted prompt, is passed to a large language model (LLM).
- The LLM processes this information and generates a personalized email based on the context.

---

## Features
- **Automated Data Extraction**: Scrapes content from web pages efficiently.
- **Custom Email Generation**: Tailors email content to user-provided prompts.
- **User-Friendly Interface**: Built with React for a seamless user experience.

---

## Tech Stack

### **Frontend**

#### **React**
- Framework for building the dynamic user interface.
- Handles user inputs (URL and prompt) and displays the generated email.

#### **CSS (or TailwindCSS/Material-UI)**
- Used for styling the components to give a modern and clean look.

### **Backend**

#### **Flask**
- Lightweight web framework for handling API endpoints.
- Processes requests from the frontend and coordinates scraping, LLM processing, and email generation.

#### **LangChain**
- Manages the pipeline for web scraping, LLM interactions, and text processing.

#### **Llama-3.1-70b-versatile**
- Core large language model (LLM) used for processing the scraped data and generating email content.

#### **ChromaDB**
- Vector database for storing and retrieving embeddings efficiently.
- Helps manage context when dealing with large scraped data and prompt history.

#### **ChatGroq**
- Additional LLM tool used for fine-tuning responses or performing specific tasks.

#### **BeautifulSoup/Scrapy (through LangChain)**
- Used for web scraping to extract content from the provided URL.

---

## Supporting Tools

### **GitHub**
- Version control platform for managing and sharing the source code.

### **Postman**
- Tool for testing and debugging API endpoints during development.


## Workflow

1. The **frontend (React)** collects the URL and user prompt.
2. The **backend (Flask)** scrapes the URL using **LangChain** with predefined logic.
3. Extracted data is stored in **ChromaDB**, while **Llama-3.1-70b** and **ChatGroq** generate the email using the prompt and context.
4. The result is sent back to the frontend and displayed in a styled interface.

---



