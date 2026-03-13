import './App.css'

// 2 - imagem em assets
import night from './assets/night.jpg'

// 3 - useState
import Data from './components/Data'

// 4 - ListRender
import ListRender from './components/ListRender'

// 7 - render condicional
import ConditionalRender from './components/ConditionalRender'

// 8 - props
import ShowUserName from './components/ShowUserName'

// 9 - desestruturando props
import CarDetails from './components/CarDetails'

// 11 - renderização de listas com componente
const cars = [
  { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
  { id: 2, brand: "KIA", color: "Branco", km: 200000 },
  { id: 3, brand: "Renault", color: "Prata", km: 32000 },
];

// 12 - Fragments
import Fragment from './components/Fragment'

// 13 - Children
import Container from './components/Container'

// 14 - Função em prop
import ExecuteFunction from './components/ExecuteFunction'


// 15 - State Lift
import Message from './components/Message'
import { useState } from 'react'
import ChanceMessage from './components/ChanceMessage'

function App() {

  // 14 - Função em prop
  function showMessage() {
    console.log("Evento do componente pai.")
  }

  // 15 - state lift
  const [message, setMessage] = useState("")

  const handledMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <div className='App' style={{ paddingBottom: '500px'}}>
      <h1>Avançando em React</h1>
      {/* 1 - Imagem em public */}
      <img src="/street.jpg" alt="Imagem de Rua" />
      {/* 2 - Imagem em assets */}
      <img src={night} alt="Imagem da noite" />
      {/* 3 -  useState */}
      <Data />
      {/* 4 - ListRender */}
      <ListRender />
      {/* 7 - render condicional */}
      <ConditionalRender />
      {/* 8 - props */}
      <ShowUserName name="Marina" />
      {/* 9 - desestruturando props */}
      <CarDetails brand="VW" km={999} color="Vermelho" />
      {/* 10 - reaproveitamento de componentes */}
      <CarDetails brand="Mitsubishi" km={14500} color="Branco" />
      <CarDetails color="Preto" brand="Audi" km={4324} />
      {/* 11 - renderização de listas com componente */}
      {cars.map((car) => (
        <CarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
        />
      ))}
      {/* 12 - Fragments */}
      <Fragment />
      {/* 13 - Children */}
      <Container>
        <p>Oi</p>
      </Container> 
      <Container>
        <div>
          <h2>Teste</h2>
          <p>Meu Container</p>
        </div>
      </Container> 
      {/* 14 - função em prop */}
      <ExecuteFunction myFunction={showMessage} />
      {/* 15 - state lift */}
      <Message msg={message} />
      <ChanceMessage handleMessage={handledMessage} />
    </div>
  )
}

export default App
