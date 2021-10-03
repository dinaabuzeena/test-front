import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';

export class Footer extends React.Component {
    render() {
        return (
            <>
             <Navbar bg="dark" variant="dark"></Navbar>
                <Navbar.Brand >&copy; FAV FRUIT APP</Navbar.Brand>

                
            </>
        )
    }
}

export default Footer


