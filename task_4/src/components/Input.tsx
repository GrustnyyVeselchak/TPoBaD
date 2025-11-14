import '../index.css'
import type { InputProps } from '../difinition'

const Input = ({url, setUrl}:InputProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(e.target.value)
    }
    return(
        <input
            className="input-box"
            placeholder='URL'
            value={url}
            onChange={handleChange}
        />
    )
}

export default Input;