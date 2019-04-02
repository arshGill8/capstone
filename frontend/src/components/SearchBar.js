import React, { Component } from 'react';
import '../assets/styles/searchbar.scss';

class SearchBar extends Component {

state = {
    lat:'',
    lng:''              
}

    componentDidMount(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(this.displayLocationInfo, this.handleLocationError)
        }
    }
    displayLocationInfo = (position) => {
        this.setState({
            lat: position.coords.latitude,
            lng: position.coords.longitude 
        })
    }


    render() { 
        return (
            <>
            <iframe className="search__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2887.1253364403765!2d-79.39540940000002!3d43.64556059999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34dbd8a4aa59%3A0xb831fbd47fda61d5!2s460+King+St+W%2C+Toronto%2C+ON+M5V+1L7!5e0!3m2!1sen!2sca!4v1553621409658"></iframe>
            <form className='search' onSubmit= {this.props.submitLoc}>
                <div className='search__top'>
                    <h2 className='search__title'>LAT</h2>
                    <input name="lat" className='search__input' type='text' placeholder='Latitude..' value={this.state.lat} onChange={(e)=>{ this.setState({lat:e.target.value})}}></input>
                </div>
                <div className='search__top'>
                    <h2 className='search__title'>LNG</h2>
                    <input name="lng" className='search__input--bottom' type='text' placeholder='Longitude..' value={this.state.lng} onChange={(e)=>{
                        this.setState({lng:e.target.value})}}></input>
                </div>
                <button className='search__button'>Find Parking</button>
            </form>
            </>
          );
    }
}
 
export default SearchBar;