import * as React from "react";
import * as ReactDOM from "react-dom";

import Root from "./components/Root";

const getOrCreateRootEl = (doc: Document, id: string) => {
    let el = doc.getElementById(id);
    if (!el) {
        el = doc.createElement("div");  
        el.id = id;
        doc.body.appendChild(el);
    }
    return el;
};

ReactDOM.render(<Root />, getOrCreateRootEl(document, "root-element"));

if (module.hot) {
    module.hot.accept();
}