import "./Root.scss";

import * as React from "react";

const Root = () => 
    <div>
        <h1>Hello World from React!</h1>
        We are using Node.js {process.versions.node},
        Chromium {process.versions.chrome},
        and Electron {process.versions.electron}.
    </div>
;

export default Root;