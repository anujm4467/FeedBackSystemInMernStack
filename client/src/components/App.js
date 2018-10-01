import React from 'react'
import {Route, BrowserRouter} from 'react-router-dom';
import Header from "./Header";

const Landing = ()=><h1>On Landing...</h1>
const DashBoard  = () => <h1>on DeshBoard ...</h1>
const SurveyNew = () => <h1>On Survey...</h1>


const App = ()=>{
    return(
       <div> 
        <BrowserRouter>
        <div>
         < Header />  
         <Route exact={true} path="/" component={Landing} />
         <Route exact={true} path="/survey" component={DashBoard} />
         <Route path="/survey/new" component={SurveyNew} />
        </div>
        </BrowserRouter>
       </div>      
    );
}

export default App;