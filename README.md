# 📚 API de Trailers de peliculas y series

Una API RESTful desarrollada con **Node.js**, **Express**, **Sequelize** y **MySQL**, que permite obtener peliculas o series con sus actores, categorias, reparto, etc.

---

## 🚀 Tecnologías utilizadas

- [Node.js](https://nodejs.org/) – entorno de ejecución JavaScript
- [Express](https://expressjs.com/) – framework web para Node
- [Sequelize](https://sequelize.org/) – ORM para bases de datos SQL
- [MySQL](https://www.mysql.com/) – sistema de gestión de bases de datos
- [MySQL Workbench](https://www.mysql.com/products/workbench/) – herramienta gráfica para crear y administrar la base
- [dotenv](https://www.npmjs.com/package/dotenv) – manejo de variables de entorno

---

## 📁 Estructura del proyecto

```
proyecto backend/
├── src/
│   ├── models/
    |   ├── Actores.js          # Modelo Sequelize
    |   ├── Categorias.js
    |   ├── Generos.js
    |   ├── index.js
    |   ├── Reparto.js
    |   ├── Trailers.js
│   ├── routes/
│   │   ├── trailerflix/
|   |   |    ├── getAll.js      # Rutas get separadas por acción
|   |   |    ├── getByContent.js
|   |   |    ├── getByGenre.js
|   |   |    ├── getBySeason.js
│   │   └── index.js        # Enrutador principal
│   ├── database.js         # Conexión a MySQL con Sequelize
│   └── app.js              # Servidor Express
├── .env                    # Variables de entorno (no subir a GitHub)
├── package.json            # Dependencias del proyecto
└── README.md               # Documentación
```

---

## 🔌 Configuración inicial

1. Cloná este repositorio
2. Asegurate de tener **MySQL corriendo** y haber creado la base `trailerflix` con las tablas `Actores` `Categorias` `Generos` `Reparto` `Trailers`
3. Crear un archivo `.env` en la raíz del proyecto con tus datos de conexión:

```env
DB_NAME=trailerflix
DB_USER=root
DB_PASS=tu_contraseña
DB_HOST=localhost
DB_DIALECT=mysql
PORT=3006
```

4. Instalá las dependencias:

```bash
npm install
```

5. Iniciá el servidor:

```bash
node src/app.js
```

---

## 📖 Endpoints disponibles

| Método | Ruta                                      | Descripción                                                     |
| ------ | ----------------------------------------- | --------------------------------------------------------------- |
| GET    | `/trailers`                               | Obtiene todos los trailers disponibles                          |
| GET    | `/trailers/genre/:genre`                  | Filtra trailers por género (ej: "drama", "comedia", "acción")   |
| GET    | `/trailers/content/:content`              | Filtra trailers por tipo de contenido (ej: "serie", "película") |
| GET    | `/trailers/series/mas-de-tres-temporadas` | Obtiene series con más de 3 temporadas                          |

---

## 🧪 Ejemplo de `http://localhost:3000/api/trailers`

```json
{
  "id": 1,
  "poster": "./posters/3.jpg",
  "titulo": "The Mandalorian",
  "resumen": "Ambientada tras la caída del Imperio y antes de la aparición de la Primera Orden, la Serie sigue los pasos de un pistolero solitario en las aventuras que protagoniza en los confines de la galaxia, donde no alcanza la autoridad de la Nueva República.",
  "temporadas": "2",
  "duracion": "N/A",
  "trailer": "https://www.youtube.com/embed/aOC8E8z_ifw",
  "categoria_id": 2,
  "genero_id": 1,
  "categoria": {
    "id": 2,
    "nombre": "Serie"
  },
  "genero": {
    "id": 1,
    "nombre": "Ciencia Ficción"
  },
  "actores": [
    {
      "id": 1,
      "nombreCompleto": "Pedro Pascal",
      "Reparto": {
        "trailerId": 1,
        "actorId": 1
      }
    },
    {
      "id": 2,
      "nombreCompleto": "Carl Weathers",
      "Reparto": {
        "trailerId": 1,
        "actorId": 2
      }
    },
    {
      "id": 3,
      "nombreCompleto": "Chris Bartlett",
      "Reparto": {
        "trailerId": 1,
        "actorId": 3
      }
    },
    {
      "id": 4,
      "nombreCompleto": "Rio Hackford",
      "Reparto": {
        "trailerId": 1,
        "actorId": 4
      }
    },
    {
      "id": 5,
      "nombreCompleto": "Giancarlo Esposito",
      "Reparto": {
        "trailerId": 1,
        "actorId": 5
      }
    },
    {
      "id": 25,
      "nombreCompleto": "Misty Rosas",
      "Reparto": {
        "trailerId": 1,
        "actorId": 25
      }
    }
  ]
}
```

---
