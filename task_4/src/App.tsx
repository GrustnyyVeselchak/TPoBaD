import './App.css'
import './index.css'
import Button from './components/Button'
import Input from './components/Input'
import Output from './components/Output'

function App() {
  return (
    <div className='wrapper'>
      <img 
        src='/1.png' 
        alt='logo'
        className='logo'
      />
      <section>
        <Input/>
        <Button/>
        <Output/>
      </section>
    </div>
  )
}

export default App
