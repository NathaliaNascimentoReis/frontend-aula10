import ListaTarefas from "./components/ListaTarefa.jsx";
import ModoEscuro from "./components/ModoEscuro.jsx";
import NomeUsuario from "./components/NomeUsuario.jsx";

function App() {
  return (
    <main>
      <ModoEscuro></ModoEscuro>
      <NomeUsuario></NomeUsuario>
      <ListaTarefas></ListaTarefas>
    </main>
  );
}

export default App;
