import { useState } from "react";

function ListaTarefas() {
  const [tarefas, setTarefas] = useState(["Estudar React"]);
  const [novaTarefa, setNovaTarefa] = useState("");

  const adicionarTarefa = () => {
    if (novaTarefa.trim() === "") return;

    setTarefas([...tarefas, novaTarefa]);
    setNovaTarefa("");
  };

  return (
    <div>
      <h2>🧾 Minhas Tarefas</h2>
      <input
        type="text"
        placeholder="Digite a Tarefa"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
      ></input>

      <button onClick={adicionarTarefa}>Adicionar</button>
    </div>
  );
}

export default ListaTarefas;
