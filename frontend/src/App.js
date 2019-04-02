import { withRouter, Route, Switch, Redirect} from 'react-router-dom';
import SearchBar from './components/SearchBar';
import ParkCards from './components/ParkCards';
import React, { Component } from 'react';
import Navbar from './components/NavBar';
import axios from 'axios';
import './App.css';
const url = 'http://localhost:8080';

class App extends Component {
  
  state = {
    lots: ""
  }

  submitLoc = (e) => {
    e.preventDefault();
    let lat = e.target.lat.value;
    let lng = e.target.lng.value;

    axios.post(`${url}/location`,
    {
        lat: lat,
        lng: lng
    })
    .then(resp=>{
         this.setState({
          lots: resp.data
        }, ()=> {this.props.history.push('/location')});

    })
    .catch(err=>{
        console.log(err);
    });
}

  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route path='/' exact render={(props)=> <SearchBar {...props}  submitLoc={this.submitLoc}/>} />
          <Route path='/location' render={(props)=> <ParkCards {...props} lots={this.state.lots} />} ></Route>
          <Redirect to='/'></Redirect>
        </Switch> 
      </>
    );
  }
}

export default withRouter(App);
