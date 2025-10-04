import { useSelector } from 'react-redux'

const RepoCard = () => {
    const { repos } = useSelector(state => state.repos)
    return(
        <div className='grid grid-cols-1 gap-4'>
            {repos && (
                repos.map((repo) => (
                    <ul key={repo.id} className='border rounded-xl p-1 flex flex-col justify-around  bg-white/30 backdrop-blur-sm'>
                        <li className='text-xl border-b'>{repo.name}</li>
                        <li className='text-sm'>{repo.description}</li>
                        <li>{repo.stargazers_count}</li>
                        <li>Последнее обновление: {new Date(repo.updated_at).toLocaleDateString('ru-RU')}</li>
                         <li className='border rounded-xl flex flex-col justify-center items-center'>
                            <a 
                                href={repo.html_url}
                                target='_blank'
                            >
                                Подробнее
                            </a>
                        </li>
                    </ul>
            )))}
        </div>
    )
}

export default RepoCard;