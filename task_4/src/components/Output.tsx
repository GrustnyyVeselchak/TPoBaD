import '../index.css'
import type { OutputProps } from '../difinition'

const Output = ({data}:OutputProps) => {
    if(!data) {
        return null;
    }

    return(
        <div className='output-box'>
            <pre>{data}</pre>
        </div>  
    )
}

export default Output;