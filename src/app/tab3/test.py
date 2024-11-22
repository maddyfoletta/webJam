import os
import google.generativeai as genai
from dotenv import load_dotenv
import typing_extensions as typing
import json


load_dotenv(dotenv_path='src/app/tab3/keys.env')

api_key = os.getenv('API_KEY')
print(api_key)


genai.configure(api_key=api_key)
model = genai.GenerativeModel("gemini-1.5-flash")

import typing_extensions as typing

class Workout(typing.TypedDict):
    client_goals: str
    day_workouts_with_description: list[list[str]]
    tips: str

def generate_workout():
    prompt = f"You are a personal trainer. Given the following goals, generate a workout plan for your client."
    response = model.generate_content([prompt, 'full body'],
    generation_config=genai.GenerationConfig(response_mime_type="application/json", response_schema=list[Workout]))

    workouts = json.loads(response.text)
    print(type(workouts))
    return workouts


if __name__ == "__main__":
    print(generate_workout())
