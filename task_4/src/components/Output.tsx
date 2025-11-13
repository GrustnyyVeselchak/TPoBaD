import '../index.css'
import type { OutputProps } from '../difinition'

const Output = ({data}:OutputProps) => {
    if(!data) {
        return null;
    }

    if (Array.isArray(data)) {
        return(
            <div className='output-box'>
                <ul>
                    {data.map((item, index) => (
                        <li key={index}>{JSON.stringify(item)}</li>
                    ))}
                </ul>
            </div>  
        )
    }

    // Если data - объект
    return(
        <div className='output-box'>
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>  
    )
}

export default Output;