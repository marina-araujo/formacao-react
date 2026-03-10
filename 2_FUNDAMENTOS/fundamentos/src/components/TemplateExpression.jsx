// 4 - template expression:

function TemplateExpression() {
    const name = "Marina";
    const data = {
        age: 38,
        job: "Programador"
    };
    const number1 = 20;
    const number2 = 30;
  return (
      <div>
          <p>A soma é {number1 + number2}</p>
          <h3>Bem vindo(a) {name}.</h3>
          <p>Você tem {data.age} anos e você é um(a) {data.job}(a).</p>
    </div>
  )
}

export default TemplateExpression