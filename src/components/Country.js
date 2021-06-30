import React, { useState, useEffect } from 'react';
import axios from 'axios'

const Country = () => {
    const [country, setCountry] = useState([])
    const [loaded, setLoaded] = useState(false)
    const perPage = 10;
    const [currentPage, setCurrentPage] = useState(1)
    const [inputValue, setInputValue] = useState('')
    const allPage = Math.ceil(country.length / perPage)
    const leftBroad = (currentPage - 1) * perPage
    const rightBroad = currentPage * perPage

    const filterCountry = country.filter(item => { return item.name.toLowerCase().includes(inputValue.toLowerCase()) })
    const btns = []
    for (let i = 0; i < allPage; i++) {
        btns.push(i + 1)
    }
    useEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(res => setCountry(res.data))
            .finally(res => setLoaded(true))
    }, [currentPage])


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
            {loaded === true
                ?
                filterCountry.slice(leftBroad, rightBroad).map((item, index) => {
                    return (
                        <div className="card mb-1 $gray-400" key={index}>
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Столица :{item.capital}</h6>
                                <img src={item.flag} className="card-img-top wh" alt="..." />
                            </div>
                        </div>
                    )
                })
                :
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Загрузка...</span>
                    </div>
                </div>

            }
            {btns.map((item, index) => {
                return (
                    <button
                        type="button"
                        className="btn btn-primary active mr-3"
                        key={index}
                        onClick={() => { setCurrentPage(item) }}
                    >
                        {item}
                    </button>
                )
            })}
        </div>
    );
};

export default Country;