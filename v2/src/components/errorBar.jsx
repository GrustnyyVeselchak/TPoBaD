import { useSelector } from 'react-redux'

const ErrorBar = () => {
    const { error } = useSelector(state => state.repos)
    return(
        <>
            {error && <p className='text-red-500'> ошибка:{error}</p>}
        </>
    )
}

export default ErrorBar;