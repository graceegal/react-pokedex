import Pokecard from "./Pokecard";

function Pokedex({props}) {
    return props.map(p => Pokecard(p));
}

export default Pokedex;