import { useSelector } from 'react-redux'

const RepoCard = () => {
    const { repos } = useSelector(state => state.repos)
    return(
        <>
            {repos && (
                repos.map((repo) => (
                    <ul key={repo.id} >
                        <li>{repo.name}</li>
                        <li>{repo.description}</li>
                        <li>
                            <a 
                                href={repo.html_url}
                                target='_blank'
                            >
                                Подробнее
                            </a>
                        </li>
                        <li>{repo.stargazers_count}</li>
                        <li>Последнее обновление: {new Date(repo.updated_at).toLocaleDateString('ru-RU')}</li>
                    </ul>
            )))}
        </>
    )
}

export default RepoCard;