from fastapi import FastAPI, Request
from models import Content
from typing import Dict
import httpx
import google.generativeai as palm
import cred

palm.configure(api_key=cred.PALM_API)

app = FastAPI()

limits = httpx.Limits(max_keepalive_connections=5, max_connections=10)
timeout = httpx.Timeout(timeout=5.0, read=15.0)
client = httpx.AsyncClient(limits=limits, timeout=timeout)


def get_prompt(content):
    prompt = f"""
You are an expert content writer who can write SEO optimized creative to post on social media for product marketing.

Write the 3 most amazing creative content for the following product/service and respond with in json format:

{str(content)}
"""
    return prompt

@app.on_event("shutdown")
async def shutdown_event():
    print("shutting down...")
    await client.aclose()


@app.get("/")
async def index():
    return "Hello World"

@app.post("/Gen")
async def get_user(content: Dict):
    data = content
    if not "user_id" in data:
        return {"error": True, "message": "user_id is required", "data": ""}
        # user exists in firebase?
    else:
        # remove user_id from data
        del data["user_id"]
    
    prompt = get_prompt(content)
    
    try:
        completion = palm.generate_text(
            model="models/text-bison-001",
            prompt=prompt,
            temperature=0.7,
            # The maximum length of the response
            max_output_tokens=800,
        )
        response = completion.result
    except Exception as e:
        return {"error": True, "message": str(e), "data": ""}
    
    # save this response in firebase
    
    return {"error": False, "message": "", "data": response}

