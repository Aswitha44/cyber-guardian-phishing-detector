# Cyber Guardian 🔐

A full-stack machine learning solution for real-time phishing detection, using logistic regression on engineered URL features. Integrated with FastAPI backend and React frontend.

## 🔍 Features
- Logistic Regression model trained with 96.7% accuracy
- Feature engineering from URL components (domain age, special characters, etc.)
- FastAPI backend with CORS support
- React frontend for real-time prediction
- Deployed full-stack with smooth UI feedback

## ⚙️ Tech Stack
- Python, scikit-learn, FastAPI
- React.js
- CountVectorizer, Tokenization & Stemming

## 🚀 How to Run
1. Clone the repo
2. Navigate to backend and run:
   ```bash
   pip install -r requirements.txt
   uvicorn main:app --reload
3. In another terminal, run frontend:
   ```npm install
   npm start
