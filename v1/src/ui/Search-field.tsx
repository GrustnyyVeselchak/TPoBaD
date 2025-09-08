import { useState, useEffect } from "react"
import axios from "axios"
import "./index.css"

interface Repository {
    id: number
    name: string
    description: string | null
    html_url: string
    stargazers_count: number
    updated_at: string  
}

const SearchField = () => {
    const [query, setQuery] = useState("")
    const [repos, setRepos] = useState<Repository[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value)
    }

    useEffect(() => {
        if (query.trim() === "") {
            setRepos([])
            setError(null)
            return
        }

        const timer = setTimeout(() => {
            setLoading(true)
            setError(null)
            
            axios
                .get<Repository[]>(`https://api.github.com/users/${query}/repos`)
                .then((response) => {
                    setRepos(response.data)
                    setLoading(false)
                })
                .catch((err) => {
                    console.error(err)
                    setError("Пользователь не найден или произошла ошибка")
                    setLoading(false)
                    setRepos([])
                })
        }, 500)

        return () => clearTimeout(timer)
    }, [query])

    return(
        <div>
            <input
                type='text'
                value={query}
                onChange={handleChange}
                placeholder="Введите имя пользователя GitHub"
            />
            
            {loading && <div>Загрузка...</div>}
            {error && <div style={{color: 'red'}}>{error}</div>}
            
            {repos.length > 0 && (
                <section className="repos-section">
                    <h2>Репозитории ({repos.length}):</h2>
                    <div className="repos-grid">
                        {repos.map((repo) => (
                            <article key={repo.id} className="repo-card">
                                <div className="header">
                                    <h3>{repo.name}</h3>
                                </div>
                                {repo.description && (
                                    <p className="repo-description">{repo.description}</p>
                                )}
                                <div className="repo-stats">
                                    <span className="stars">stars:{repo.stargazers_count}</span>
                                </div>
                                <div className="repo-footer">
                                    <a 
                                        href={repo.html_url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="repo-link"
                                    >
                                        Открыть на GitHub
                                    </a>
                                    <time className="update-date">
                                        Обновлен: {new Date(repo.updated_at).toLocaleDateString('ru-RU')}
                                    </time>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            )}
        </div>
    )
}

export default SearchField