import os
from flask_cors import CORS
from flask import Flask, request, jsonify
from dotenv import load_dotenv
import google.generativeai as genai
import typing_extensions as typing
import json


app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

load_dotenv(dotenv_path='src/app/tab3/keys.env')

api_key = os.getenv('API_KEY')
print(api_key)

genai.configure(api_key=api_key)
model = genai.GenerativeModel("gemini-1.5-flash")

@app.route('/', methods=['POST'])
def generate_workout():
    data = request.json
    keywords = data.get("keywords", "")
    
    class Workout(typing.TypedDict):
        goals: str
        day_workouts_with_description: list[list[str]]
        important_considerations: str

    if not keywords:
        return jsonify({"error": "Keywords are required"}), 400
    
    # Example AI prompt and response generation
    prompt = f"You are a personal trainer. Given the following goals, generate a workout plan for your client."
    response = model.generate_content([prompt, 'full body'],
    generation_config=genai.GenerationConfig(response_mime_type="application/json", response_schema=list[Workout]))

    workouts = json.loads(response.text)
    return jsonify({"workout_plan": response.text})
    


if __name__ == "__main__":
    app.run(debug=True)
