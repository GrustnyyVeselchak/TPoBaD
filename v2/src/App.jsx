import './App.css'
import ErrorBar from './components/errorBar'
import LoadingBar from './components/loadingBar'
import RepoCard from './components/repoCard'
import SerachBar from './components/serachBar'


function App() {
  return (
    <>
      <SerachBar/>
      <RepoCard/>
      <ErrorBar/>
      <LoadingBar/>
    </>
  )
}

export default App
