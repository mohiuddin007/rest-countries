import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Image } from 'react-bootstrap';
import "./CountryDetail.css"

const CountryDetail = () => {
    const {alpha3Code} = useParams();

    const [country, setCountry] = useState([])
    const {flag, name, region, capital, area, population, subregion, callingCodes} = country;

    useEffect(() =>{
      const url = `https://restcountries.eu/rest/v2/name/${alpha3Code}`;
      fetch(url)
      .then(res => res.json())
      .then(data => setCountry(data[0]))
    },[])

    return (
        <Container fluid className="text-center">
            <h6>Country Detail of {alpha3Code}</h6>
            <Row>
                <Col></Col>
                <Col md={8} id="style">
                    <Image src={flag} fluid></Image>
                    <h1> {name}</h1>
                    <h2>Region: {region}</h2>
                    <h3>Capital: {capital}</h3>
                    <h4>Area: {area}</h4>
                    <h5>Population: {population}</h5>
                    <h6>Subregion: {subregion}</h6>
                    <p>callingCodes: {callingCodes}</p>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    );
};

export default CountryDetail;