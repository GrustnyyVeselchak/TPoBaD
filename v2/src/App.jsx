import './App.css'
import ErrorBar from './components/errorBar'
import LoadingBar from './components/loadingBar'
import RepoCard from './components/repoCard'
import SerachBar from './components/serachBar'


function App() {
  return (
    <div className='flex flex-col justify-center items-center w-96'>
      <SerachBar/>
      <RepoCard/>
      <ErrorBar/>
      <LoadingBar/>
    </div>
  )
}

export default App
