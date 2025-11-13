import './App.css'
import './index.css'
import SearchBar from './widgets/SerachBar'

function App() {
  return (
    <div className='wrapper'>
      <img 
        src='/1.png' 
        alt='logo'
        className='logo'
      />
      <SearchBar/>
    </div>
  )
}

export default App
