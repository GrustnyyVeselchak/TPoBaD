const repoCard = () => {
    return(
        <>
            {repos && (
                repos.map((repo) => (
                    <ul key={repo.id} >
                        <li>{repo.name}</li>
                        <li>{repo.description}</li>
                        <li>{repo.url}</li>
                        <li>{repo.stargazers_count}</li>
                        <li>{repo.updated_at}</li>
                    </ul>
            )))}
        </>
    )
}

export default repoCard;