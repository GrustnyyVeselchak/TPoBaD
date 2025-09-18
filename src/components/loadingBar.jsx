import { useSelector } from "react-redux"

const LoadingBar = () => {
    const {loading} = useSelector(state => state.repos)
    return(
        <>
            {loading && (<p>Идет поиск... </p>)}
        </>
    )
}

export default LoadingBar