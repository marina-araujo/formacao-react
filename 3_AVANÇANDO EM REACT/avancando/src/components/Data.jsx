import { useState } from "react";

function Data() {
    let someData = 10;
    const [anotherNumber, setAnotherNumber] = useState(15);
    const [idadeHoje, setIdade2020] = useState(38);
  return (
      <div>
          <div>
              <p>Valor: {someData} </p>
              {/* Fica com erro pq a variável não vai conseguir mudar, mas sem hook, seria assim:
              <button onClick={() => (someData = 15)}>Mudar variável</button>
              */}
          </div>
          <div>
              <p>Valor: {anotherNumber} </p>
              <button onClick={() => setAnotherNumber(20)}>Mudar state</button>
          </div>
          <div>
              <p>Idade hoje: {idadeHoje}</p>
              <button onClick={() => setIdade2020(idadeHoje - 6)}>Ver idade em 2020</button>
          </div>
    </div>
  )
}

export default Data