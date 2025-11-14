import { useState } from 'react';
import '../index.css'
import type { ButtonProps } from '../difinition';
import { cheker } from '../lib/headersCheker';

const Button = ({url, setData}: ButtonProps) => {
    const [loading, setLoading] = useState<boolean>(false)

    const fetchData = async() => {
        if (!url) {
            return
        }
        
        setLoading(true)
        setData(null)
        
        try {
            const res = await fetch(url)
            
            if (!res.ok) {
                throw new Error(`Ошибка HTTP: ${res.status}`)
            }

            const headers = res.headers
            const result = cheker(headers)
            setData(result)

        } catch (err) {
            if (err instanceof Error) {
                setData(err.message)
            } else {
                setData('Произошла неизвестная ошибка')
            }
        } finally {
            setLoading(false)
        }
    }
    return(
        <button
            onClick={fetchData}
        >
            {loading ? 'Loading...' : 'GET'}
        </button>
    )
}

export default Button;