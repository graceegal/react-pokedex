function Pokecard({ id, name, type, base_experience }) {
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

    return (
        <div className="Pokecard">
            <span className="Pokecard-name">{name}</span><br />
            <span className="Pokecard-img"><img src={imgUrl} alt="Pokemon image"></img></span><br />
            <span className="Pokecard-type">Type: {type}</span><br />
            <span className="Pokecard-experience">EXP: {base_experience}</span><br />
        </div>
    );
}

export default Pokecard;