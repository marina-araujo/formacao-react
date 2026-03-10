import './App.css';

// 2 - importando componente:
import FirstComponent from './components/FirstComponent';

// 4 - template expression:
import TemplateExpression from './components/TemplateExpression';

// 5 - hierarquia de componentes:
import MyComponent from './components/MyComponent';

// 6 - eventos
import  Events from './components/Events';

function App() { // comentário
  return (
      <div>
        <h1>Fundamentos do React</h1> {/* Comentário dentro do jsx */}
      <FirstComponent />
      <TemplateExpression />
      <MyComponent />
      <Events />
      </div>      
  )
}

export default App