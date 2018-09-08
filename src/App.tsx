import * as React from "react";
import {BrowserRouter, Link} from "react-router-dom";

import Routes from "./Routes";

// @ts-ignore
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Container, Jumbotron} from "reactstrap";

const App = () => (
    <BrowserRouter>
        <Container>
            <ul className="left">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
            <Jumbotron>
                <h1><FontAwesomeIcon icon={"futbol"}/> UEFA Champions League</h1>

                <p>Scores & Schedule 2018/2019</p>
            </Jumbotron>
            <Routes/>
        </Container>
    </BrowserRouter>
);

export default App;