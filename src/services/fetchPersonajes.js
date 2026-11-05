
const API_URL = "https://rickandmortyapi.com/api/character";

export const fetchPersonajes = async () => {
    try {
        const respuesta = await fetch(API_URL);

        if (!respuesta.ok) {
            throw new Error("Error al conectar con la API");
        }

        const datos = await respuesta.json();

        return datos.results;

    } catch (error) {
        throw new Error("No se pudieron cargar los personajes");
    }
};
