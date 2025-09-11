import { useSelector } from 'react-redux'

const ErrorBar = () => {
    const { error } = useSelector(state => state.repos)
    return(
        <>
            {error && <p> ошибка:{error}</p>}
        </>
    )
}

export default ErrorBar;