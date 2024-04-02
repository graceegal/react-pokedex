import Pokedex from "./Pokedex";

function App() {
    return (
        <div>
            <h3 className="text-center">Pokedex</h3>
            <div className = "container d-flex flex-wrap column-gap-4 row-gap-4 mt-5">
                <Pokedex/>
            </div>
        </div>
    );
}

export default App;