import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

const searchBar = () => {
    const [ username, setUsername ] = useState('')
    const [ repos, setRepos ] = useState([])
    const [ error, setError ] = useState(null)
    const [ loading, setLoading ] = useState(false)
    const handleChange = (event) => {setUsername(event.target.value)}

    useEffect(() => {
        if( username.trim() === "" ) {
            setRepos([])
            setError(null)
            setLoading(false)
            return
        }

        const timer = setTimeout(() => {
            setLoading(true)
            axios
                .get(`https://api.github.com/users/${username}/repos`)
                .then(respone => {
                    setRepos(respone.data)
                    setLoading(false)
                })
                .catch(error => {
                    console.log(error)
                    setError('Пользователь не найден')
                    setLoading(false)
                })
        }, 1000)

        return () => clearTimeout(timer)

    }, [username])
    return(
        <>
            <input
                type="text"
                value={username}
                onChange={handleChange}
                placeholder="Введите никнейм пользователя"
            />
            
            {error && <p> ошибка:{error}</p>}
            {loading && (<p>Идет поиск... </p>)}
        </>
        
    )
}

export default searchBar