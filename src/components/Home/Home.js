import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Countries from '../Countries/Countries';

const Home = () => {
    const [countries, setCountries] = useState([])
    const [Search, setSearch] = useState('')
    const [filterCountries, setFilterCountries] = useState([]);

    useEffect(() =>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])

    useEffect(() =>{
      setFilterCountries(
        countries.filter(country => {
                return country.name.toLowerCase().includes(Search.toLowerCase())
             })
      )
    }, [Search, countries])

    // const filterCountries = countries.filter(country => {
    //     return country.name.toLowerCase().includes(Search.toLowerCase())
    // })
    return (
        <>
        <Container>
            <Row>
            <input type="text" placeholder="Search here" onChange={e => setSearch(e.target.value)}/>
            <button>asia</button> <button>europe </button> <button>africa</button>
            </Row>
            
            <Row className="justify-content-center ">
                {
                    filterCountries.map(country => <Countries country={country} key={country.alpha3Code}/>)
                }
            </Row>
        </Container>
    </>
    );
};

export default Home;