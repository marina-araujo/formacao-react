import React from 'react'

function Events() {
    const handleClick = (e) => {
        console.log(e);
        console.log("Executou (agora com função)");
    };

    // 8 - função de renderização
    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando isso!</h1>;
        } else {
            return <h1>Renderizando outra coisa.</h1>;
        }
    }

  return (
      <div>
          <div>
              <button onClick={() => console.log("Testando um evento.")}>Clique aqui</button>
          </div>
          <div>
              {/* 7 - evento com função */}
              <div>
                  <button onClick={handleClick}>Clique Aqui 2</button>
              </div>
              {renderSomething(true)}
              {renderSomething(false)}
          </div>
    </div>
  )
}

export default Events