import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { gettingRepos, errorRepos, successRepos } from "../store/reposSlice"

const SearchBar = () => {
    const [ username, setUsername ] = useState('')
    const [ currentPage, setCurrentPage ] = useState(1) 
    const [ fetching, setFetching ] = useState(false)

    const dispatch = useDispatch()
    const { repos } = useSelector(state => state.repos)

    const handleChange = (e) => {setUsername(e.target.value)}
    
    const scrollHandler = (e) => {
        if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
            setFetching(true)   
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function() {
            document.removeEventListener('scroll', scrollHandler)
        }
    })

    useEffect(() => {
        if( username.trim() === "" ) {
            dispatch(successRepos([]))
            setCurrentPage(1)
            return
        }

        const timer = setTimeout(() => {
            dispatch(gettingRepos())
            fetchRepos(username, currentPage)
        }, 1000)

        return () => clearTimeout(timer)

    }, [username])  

    useEffect(() => {
        if (fetching) {
            fetchRepos(username, currentPage)
        }
    }, [fetching])

    const fetchRepos = (username, currentPage) => { 
        axios
            .get(`https://api.github.com/users/${username}/repos?_limit=10&page=${currentPage}`)
            .then(respone => {
                dispatch(successRepos([...repos, ...respone.data]))
                setCurrentPage( prevState => prevState + 1)
            })
            .catch(error => {
                console.log(error)
                dispatch(errorRepos('Пользователь не найден'))
            })
    }
    
    return(
        <>
            <input
                type="text"
                value={username}
                onChange={handleChange}
                placeholder="Введите пользователя"
                className="border-b-4 border-indigo-500"
            />            
        </>
        
    )
}

export default SearchBar