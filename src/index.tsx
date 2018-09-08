import * as React from "react";
import * as ReactDOM from "react-dom";
// hot reload for development
import { AppContainer } from "react-hot-loader";

import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";

// @ts-ignore
import { library } from '@fortawesome/fontawesome-svg-core';
// @ts-ignore
import { faFutbol } from '@fortawesome/free-solid-svg-icons';
library.add(faFutbol);

import "./style.css";

const root = document.getElementById("root") as HTMLElement;

const render = (Component: React.SFC) => {
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        root,
    );
};

render(App);

if (module.hot) {
    module.hot.accept("./App", () => {
        render(App);
    });
}
