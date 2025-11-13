import { useState } from 'react';
import '../index.css'
import type { ButtonProps } from '../difinition';

const Button = ({url, setData}: ButtonProps) => {
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)

    const fetchData = async() => {
        if (!url) {
            return
        }
        
        setLoading(true)
        setError(null)
        setData(null)
        
        try {
            const res = await fetch(url)
            if (!res.ok) {
                throw new Error(`Ошибка HTTP: ${res.status}`)
            }

            const data = await res.json()
            setData(data)
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message)
            } else {
                setError('Произошла неизвестная ошибка')
            }
        } finally {
            setLoading(false)
        }
    }
    return(
        <button
            onClick={fetchData}
        >
            {loading ? 'Loading...' : error ? error: 'GET'}
        </button>
    )
}

export default Button;