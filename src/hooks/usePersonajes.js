
import { useState, useEffect } from "react"
import { fetchPersonajes } from "../services/fetchPersonajes"

export const usePersonajes = () => {
    const [personajes, setPersonajes] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const cargarPersonajes = async () => {
            try {
                const datos = await fetchPersonajes();
                setPersonajes(datos);
            } catch (error) {
                setError(error.message);
            } finally {
                setCargando(false);
            }
        };

        cargarPersonajes();
    }, []);

    return {
        personajes,
        cargando,
        error
    };
};
