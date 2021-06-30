import React from 'react';

const Repo = ({ repo }) => {
    return (
        <div className="card mb-1 $gray-400">
            <div className="card-body">
                <h5 className="card-title">{repo.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Количество звезд: {repo.stargazers_count}</h6>
                <p className="card-text">Последний коммит: {repo.updated_at}</p>
                <a href={repo.html_url} className="card-link">Ссылка на репозиторий: {repo.html_url}</a>
            </div>
        </div>
    );
};





export default Repo;