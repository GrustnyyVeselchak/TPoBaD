import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useDispatch } from 'react-redux'
import { gettingRepos, errorRepos, successRepos } from "../store/reposSlice"

const SearchBar = () => {
    const [ username, setUsername ] = useState('')
    const dispatch = useDispatch()

    const handleChange = (event) => {setUsername(event.target.value)}
    
    useEffect(() => {
        if( username.trim() === "" ) {
            dispatch(successRepos([]))
            return
        }

        const timer = setTimeout(() => {
            dispatch(gettingRepos())
            axios
                .get(`https://api.github.com/users/${username}/repos`)
                .then(respone => {
                    dispatch(successRepos(respone.data))
                })
                .catch(error => {
                    console.log(error)
                    dispatch(errorRepos('Пользователь не найден'))
                })
        }, 1000)

        return () => clearTimeout(timer)

    }, [username, dispatch])  
    
    return(
        <>
            <input
                type="text"
                value={username}
                onChange={handleChange}
                placeholder="Введите никнейм пользователя"
            />            
        </>
        
    )
}

export default SearchBar