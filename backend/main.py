from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import date
import json
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # En producción, cambia esto a ["http://localhost:3000"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Modelo de Noticia
class Noticia(BaseModel):
    id: Optional[int] = None
    titulo: str
    descripcion: str
    slug: str
    imagenUrl: Optional[str] = None
    fecha: date = Field(default_factory=date.today)

# Ruta del archivo que guarda las noticias
DB_PATH = "noticias.json"

# Modelo de Impacto
class Impacto(BaseModel):
    id: Optional[int] = None
    titulo: str
    categoria: Optional[str] = None
    slug: str
    imagenUrl: Optional[str] = None
    fecha: date = Field(default_factory=date.today)

IMPACTOS_DB_PATH = "impactos.json"

def cargar_impactos():
    if os.path.exists(IMPACTOS_DB_PATH):
        with open(IMPACTOS_DB_PATH, "r") as f:
            data = json.load(f)
            return [Impacto(**i) for i in data]
    return []

def guardar_impactos(impactos: List[Impacto]):
    with open(IMPACTOS_DB_PATH, "w") as f:
        json.dump([i.dict() for i in impactos], f, indent=2, default=str)

# Cargar noticias desde archivo
def cargar_noticias():
    if os.path.exists(DB_PATH):
        with open(DB_PATH, "r") as f:
            data = json.load(f)
            return [Noticia(**n) for n in data]
    return []

# Guardar noticias en archivo
def guardar_noticias(noticias: List[Noticia]):
    with open(DB_PATH, "w") as f:
        json.dump([n.dict() for n in noticias], f, indent=2, default=str)

# Noticias almacenadas en memoria, inicializadas desde el archivo
noticias_db: List[Noticia] = cargar_noticias()

@app.get("/api/noticias")
def get_noticias():
    return noticias_db

@app.post("/api/noticias")
def crear_noticia(noticia: Noticia):
    noticia.id = len(noticias_db) + 1
    noticias_db.insert(0, noticia)  # Añadir al inicio
    guardar_noticias(noticias_db)
    return {"mensaje": "Noticia creada", "noticia": noticia}

impactos_db: List[Impacto] = cargar_impactos()

@app.get("/api/impactos")
def get_impactos():
    return impactos_db

@app.post("/api/impactos")
def crear_impacto(impacto: Impacto):
    impacto.id = len(impactos_db) + 1
    impactos_db.insert(0, impacto)  # Insertar al inicio (orden inverso)
    guardar_impactos(impactos_db)
    return {"mensaje": "Impacto creado", "impacto": impacto}
