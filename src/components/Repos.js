import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getRepos, actionPage} from '../reducers/reposReducers';
import Repo from './Repo'


const Repos = () => {
    const repos = useSelector(state => state.reposReducer.repos)
    const isLoaded = useSelector(state => state.reposReducer.isLoaded)
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState('')
    let currentPage = useSelector(state => state.reposReducer.currentPage)
    const perPage = useSelector(state => state.reposReducer.perPage)

    const allPage = Math.ceil(repos.length / perPage)
    const leftBroad = (currentPage - 1) * perPage;
    const rightBroad = currentPage * perPage;
    const btnsPage = []


    const filterRepos = repos.filter(item => { return item.name.toLowerCase().includes(inputValue.toLowerCase()) })

    for (let i = 0; i < allPage; i++) {
        btnsPage.push(i+1)
    }

    useEffect(() => {
        dispatch(getRepos())
    }, [currentPage])

    const searchHandler = () => {
        dispatch(getRepos(inputValue))
    }
    return (
        <div>
            <input
                className="form-control mb-1"
                type="text"
                placeholder="Введите название репозитория"
                aria-label="default input example"
                value={inputValue}
                onChange={(e) => { setInputValue(e.target.value) }}
            />

            {isLoaded === true
                ?
                <div className="container">
                    {filterRepos.slice(leftBroad,rightBroad).map((item, index) => <Repo
                        repo={item}
                        key={index}
                    />)}
                </div>
                :
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Загрузка...</span>
                    </div>
                </div>
            }
            {filterRepos.length === 0
                ?
                <div>
                    <button
                        className="btn btn-outline-primary"
                        onClick={searchHandler}
                    >Поиск репозитория на GitHub
                    </button>
                    <h1>Попробуйте глобальный поиск</h1>
                </div>
                :
                false
            }
            {btnsPage.map((item, index) => {
                return (
                    <button
                        type="button"
                        className="btn btn-primary active mr-3"
                        key={index}
                        onClick={()=> {dispatch(actionPage(item))}}
                    >
                        {item}</button>

                )
            })}
        </div>
    )
}


export default Repos;