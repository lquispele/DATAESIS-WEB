from sqlalchemy import Column, Integer, String, DateTime
from datetime import datetime
from database import Base

class Noticia(Base):
    __tablename__ = "noticias"

    id = Column(Integer, primary_key=True, index=True)
    titulo = Column(String, index=True)
    descripcion = Column(String)
    slug = Column(String, unique=True, index=True)
    imagen_url = Column(String)
    fecha = Column(DateTime, default=datetime.utcnow)
