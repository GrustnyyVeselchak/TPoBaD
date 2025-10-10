import { useState, useEffect, useRef } from 'react'
import type { Props } from "../definition"

const SearchBar = ({ query, setQuery, onSearch }: Props) => {
    const [results, setResults] = useState<string[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const abortControllerRef = useRef<AbortController | null>(null)

    useEffect(() => {
        if (!query.trim()) {
            setResults([])
            setError(null)
            return
        }

        if (abortControllerRef.current) {
            abortControllerRef.current.abort()
        }

        abortControllerRef.current = new AbortController()

        const timeoutId = setTimeout(async () => {
            try {
                setLoading(true)
                setError(null)
                const searchResults = await onSearch(query, abortControllerRef.current?.signal)
                setResults(searchResults)
            } catch (err) {
                if (err instanceof Error && err.name === 'AbortError') {
                    setError('Failed to search')
                    setResults([])
                }
            } finally {
                setLoading(false)
            }
        }, 300)

        return () => {
            clearTimeout(timeoutId)
            if (abortControllerRef.current) {
                abortControllerRef.current.abort()
            }
        }
    }, [query, onSearch])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        setQuery(newValue)
    }
    
    return (
        <div>
            <input
                value={query}
                onChange={handleChange}
                placeholder="Введите имя пользователя..."
            />
            
            {loading && <div>Loading...</div>}
            {error && <div style={{color: 'red'}}>Error: {error}</div>}
            
            {results.length > 0 && (
                <ul>
                    {results.map((result, index) => (
                        <li key={index}>{result}</li>
                    ))}
                </ul>
            )}
            
            {!loading && !error && query && results.length === 0 && (
                <div>Таких нет</div>
            )}
        </div>
    )
}

export default SearchBar