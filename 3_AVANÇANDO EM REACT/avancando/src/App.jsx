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

function App() {

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
    </div>
  )
}

export default App
