import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import MultiversoApp from "./MultiversoApp"
import "./styles.css";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <MultiversoApp />
    </StrictMode>
);
