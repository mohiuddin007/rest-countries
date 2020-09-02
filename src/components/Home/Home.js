import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Countries from '../Countries/Countries';

const Home = () => {
    const [countries, setCountries] = useState([])
    useEffect(() =>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <>
        <Container>
            <Row className="justify-content-center">
                {
                    countries.map(country => <Countries country={country} key={country.alpha3Code}/>)
                }
            </Row>
        </Container>
    </>
    );
};

export default Home;