import * as React from "react";
import * as ReactDOM from "react-dom";
// hot reload for development
import { AppContainer } from "react-hot-loader";

import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";

// @ts-ignore
import { library } from "@fortawesome/fontawesome-svg-core";
// @ts-ignore
import { faFutbol } from "@fortawesome/free-solid-svg-icons";

import "datejs";
import "page-scroll-to-id";

library.add(faFutbol);

import * as $ from "jquery";
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

// @ts-ignore
$("a[href*='#']").mPageScroll2id({
    highlightClass: "active",
    layout: "vertical",
    scrollEasing: "swing",
    scrollSpeed: 500,
    targetClass: "active",
});
