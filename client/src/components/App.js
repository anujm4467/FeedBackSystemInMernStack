import React, {Component} from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from "./Header";
import Landing from './Landing';
import * as actions from '../actions';


const DashBoard  = () => <h1>on DeshBoard ...</h1>
const SurveyNew = () => <h1>On Survey...</h1>


class App extends Component {

   componentDidMount(){
         this.props.fetchUser();
   }

   render(){ 
    return(
       <div className= "container"> 
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
}

export default connect(null, actions) (App);