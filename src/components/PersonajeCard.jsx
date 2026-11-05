
const PersonajeCard = ({ personaje, esFavorito, onToggleFavorito }) => {

    const estadoClase = personaje.status.toLowerCase();

    return (
        <div className={`card ${esFavorito ? "fav" : ""}`}>

            <img
                src={personaje.image}
                alt={personaje.name}
            />

            <h4>{personaje.name}</h4>

            <p className={`estado estado-${estadoClase}`}>
                {personaje.status} - {personaje.species}
            </p>

            <button onClick={() => onToggleFavorito(personaje)}>
                {esFavorito ? "Quitar favorito" : "Agregar favorito"}
            </button>

        </div>
    );
};

export default PersonajeCard;
