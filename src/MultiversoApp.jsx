
import { useState } from "react"

import { usePersonajes } from "./hooks/usePersonajes";
import PersonajeList from "./components/PersonajeList";
import FavoritesPanel from "./components/FavoritesPanel";

const MultiversoApp = () => {

    const { personajes, cargando, error } = usePersonajes();

    const [favoritos, setFavoritos] = useState([]);

    // Agregar o quitar favoritos
    const toggleFavorito = (personaje) => {

        setFavoritos((anteriores) => {

            const existe = anteriores.some(
                (fav) => fav.id === personaje.id
            );

            if (existe) {
                return anteriores.filter(
                    (fav) => fav.id !== personaje.id
                );
            }

            return [...anteriores, personaje];
        });
    };

    // Quitar favorito desde el panel
    const quitarFavorito = (id) => {

        setFavoritos((anteriores) =>
            anteriores.filter((personaje) => personaje.id !== id)
        );
    };

    if (cargando) {
        return <p className="mensaje">Cargando...</p>;
    }

    if (error) {
        return <p className="mensaje error">{error}</p>;
    }

    return (
        <div>

            <h1>Multiverso Rick and Morty</h1>

            <div className="layout">

                <PersonajeList
                    personajes={personajes}
                    favoritos={favoritos}
                    onToggleFavorito={toggleFavorito}
                />

                <FavoritesPanel
                    favoritos={favoritos}
                    onQuitarFavorito={quitarFavorito}
                />

            </div>

        </div>
    );
};

export default MultiversoApp;
