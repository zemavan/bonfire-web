from fastapi import APIRouter

route = APIRouter()

@route.get("/one")
def greetings():
    return "hello"