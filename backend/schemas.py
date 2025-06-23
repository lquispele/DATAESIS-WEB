from pydantic import BaseModel
from datetime import datetime
from typing import Optional
class NoticiaBase(BaseModel):
    titulo: str
    descripcion: str
    slug: str
    imagenUrl: Optional[str] = None

class NoticiaCreate(NoticiaBase):
    pass

class NoticiaOut(NoticiaBase):
    id: int
    fecha: datetime

    class Config:
        from_attributes = True
