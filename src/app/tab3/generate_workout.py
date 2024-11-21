import os
from flask_cors import CORS
from flask import Flask, request, jsonify
import google.generativeai as genai

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

api_key = os.getenv('API_KEY')

genai.configure(api_key=api_key)
model = genai.GenerativeModel("gemini-1.5-flash")

@app.route('/', methods=['POST'])
def generate_workout():
    data = request.json
    keywords = data.get("keywords", "")
    
    if not keywords:
        return jsonify({"error": "Keywords are required"}), 400
    
    # Example AI prompt and response generation
    prompt = f"You are a personal trainer. Given the following goals, generate a workout plan for your client."
    response = model.generate_content([prompt, keywords])

    return jsonify({"workout_plan": response.text})


if __name__ == "__main__":
    app.run(debug=True)
