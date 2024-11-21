import os
import google.generativeai as genai
from dotenv import load_dotenv


load_dotenv(dotenv_path='src/app/tab3/keys.env')

api_key = os.getenv('API_KEY')
print(api_key)


genai.configure(api_key=api_key)
model = genai.GenerativeModel("gemini-1.5-flash")


def generate_workout():
    prompt = f"You are a personal trainer. Given the following goals, generate a workout plan for your client."
    response = model.generate_content([prompt, 'full body'])

    return response.text


if __name__ == "__main__":
    print(generate_workout())
