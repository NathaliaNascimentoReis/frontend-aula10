import { useState } from 'react';

function ListaTarefas() {
    const [tarefas, setTarefas] = useState(['Estudar React']);
    const [novaTarefa, setNovaTarefa] = useState('');
    const adicionarTarefa = () => {
        if (novaTarefa.trim() === '') return;
        setTarefas([...tarefas, novaTarefa]);
        setNovaTarefa('');
    };
    return (
        <div>
            <h2>Lista de Tarefas</h2>
                <input
                    type="text"
                    value={novaTarefa}
                    onChange={(e) => setNovaTarefa(e.target.value)}
                    placeholder="Digite uma nova tarefa"
                />
            <ul>
                {tarefas.map((tarefa, index) => (
                    <li key={index}>{tarefa}</li>
                ))}
            </ul>
            <button onClick={adicionarTarefa}>Adicionar Tarefa</button>
        </div>
    );
}

export default ListaTarefas;