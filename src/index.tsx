import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import "./index.css";

//  React TS Context Provider
import { MaterialUIControllerProvider } from "context";
import DataProvider from "context/DataContext";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <DataProvider>
        <App />
      </DataProvider>
    </MaterialUIControllerProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
