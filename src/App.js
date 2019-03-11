import React, { Component } from 'react';
import Cards from './components/Cards';

class App extends Component {      
    state = {
        schedules: [],
    }
    componentDidMount() {
        // create a temporary array to build out before we set the final value to the state at startup
        let temp = [];
         // fetch all the schedules from the API
         fetch('https://api.inquicker.com/v2/schedules?api_key=b099b982537e880a747b472fe36ffe62148410eb')
         .then(resp => {
             return resp.json();
         })
         .then(results => {
             // use map to apply logic to each of the nested arrays from the api
             results.data.map(obj => {
                 let availTimes = [];
                 let registrationUrl;
                 // go through the available times array and add each value to a local array to build an object
                 obj.availableTimes[0].times.map(x => {
                         availTimes.push(x.time);
                 });
 
                 registrationUrl = obj.registrationUrl;
                 // Create a 
                 let schedule = {
                     name: obj.location.name,
                     facility: obj.facility.name,
                     service: obj.service.name,
                     availabletimes: availTimes,
                     regisUrl: registrationUrl
                 }
                 
                 temp.push(schedule);
                 
             });
             this.setState({
                 schedules: temp
             });

         })
         .catch(error => console.log('error',error));
    }

    getStyle = () => {
        return {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridColumnGap: '0.5em',
            gridRowGap: '1em',
            marginTop: '25px',
            marginLeft: '50px'
        }
    }
    
    render() {
        return(
            <div>
                <div className="card" style={this.getStyle()}>
                    <Cards data={this.state.schedules} />
                </div>
            </div>
        );
    };
}

export default App;