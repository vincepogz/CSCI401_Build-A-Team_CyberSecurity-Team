import React from "react";
import {render} from 'react-dom';
import CompanyDetails from "./components/companyDetails/index";

render(
  <div>
    <h2>Hello World from React!!</h2>
    <CompanyDetails/>
  </div>,

  document.getElementById('root')
);