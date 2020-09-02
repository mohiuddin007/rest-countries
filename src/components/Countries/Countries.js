import React from 'react';
import { Col, Image, Button } from 'react-bootstrap';
import './Countries.css';
import { Link, useHistory } from 'react-router-dom';


const Countries = (props) => {
    const {name, flag, alpha3Code} = props.country;
    const history = useHistory()

    const handleClick = (id) => {
        const path = `/about/${id}`; 
       history.push(path);
    };
    return (
        <>
          <Col md={3} className=" m-2" id="border">
              <Image src={flag} fluid rounded id="image"/>
             <h2>Name: {name}</h2>   
             <Link to={`/about/${alpha3Code}`}>Country Details of {alpha3Code}</Link> <br/>  
             <Button onClick={() => handleClick(alpha3Code)}>Click here</Button>
          </Col>     
        </>
    );
};

export default Countries;