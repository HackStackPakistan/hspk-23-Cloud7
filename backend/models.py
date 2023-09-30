from pydantic import BaseModel


class Content(BaseModel):
    user_id: int
    name: str
    add: str
    age: int
    desig: str