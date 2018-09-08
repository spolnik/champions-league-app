import * as React from "react";
import {BrowserRouter} from "react-router-dom";

import Routes from "./Routes";
import Menu from "./Menu";

// @ts-ignore
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Container, Jumbotron} from "reactstrap";

const App = () => (
    <BrowserRouter>
        <Container>
            <Menu />
            <Jumbotron>
                <h1><FontAwesomeIcon icon={"futbol"}/> UEFA Champions League</h1>

                <p>Scores & Schedule 2018/2019</p>
            </Jumbotron>
            <Routes/>
        </Container>
    </BrowserRouter>
);

export default App;