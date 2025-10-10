import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'

function App() {
  const [query, setQuery] = useState('')

  const searchUsers = async (searchQuery: string, signal?: AbortSignal): Promise<string[]> => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?name_like=${searchQuery}`,
        { signal }
      )
      if (!response.ok) {
        throw new Error('Ошибка поиска: проблемы с подключением')
      }
      const users = await response.json()
      return users.map((user: any) => user.name)
    } catch (error) {
      console.error('Ошибка поиска:', error)
      throw error
    }
  }

  return (
    <>
      <SearchBar
        query={query}
        setQuery={setQuery}
        onSearch={searchUsers}
      />
    </>
  )
}

export default App