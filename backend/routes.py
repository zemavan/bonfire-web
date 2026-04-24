from fastapi import APIRouter

route = APIRouter()

@route.get("/two")
def greetings():
    return "two"

@route.get("/")
def greetings():
    return "one"   