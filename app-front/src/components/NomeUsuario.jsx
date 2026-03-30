import { useState } from "react";

function NomeUsuario() {
  const [nome, setNome] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Digite seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      ></input>
      <p>Olá, {nome}!</p>
    </div>
  );
}

export default NomeUsuario;
