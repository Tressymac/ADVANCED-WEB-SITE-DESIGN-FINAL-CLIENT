import { Link as RouterLink } from 'react-router-dom'
import '../stateInfo/stateInfo.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function StateInfo( {} ){
    const [returnedState, setStates] = useState([]);

    useEffect(() => {
        const loadStates = async () => {
            try {
                const apiResponse = await axios.get('https://adv-web-us-state-final-500.uc.r.appspot.com/api/v1/states')
                // const test = apiResponse.data[0].states.map(element => element.name);
                // console.log(test);
                setStates(apiResponse.data[0].states);            
            }
            catch (error) {
                console.log("Error :(");
            }
        };

        loadStates();
    }, []);
    // console.log(returnedState.map(element => (element.name)));
 
    return(
        <div className="row stateContainer">
        {returnedState.map(state => (
            <div key={state._id} className="col-sm-6 col-md-4 col-lg-3 mb-3 boxStates">
            <div className="card cardItem">
                <img src={state.image} className="card-img-top" alt={state.name} />
                <div className="card-body">
                    <h5 className="card-title">{state.name}</h5>
                    <p className="card-text"><em>{state.nickname}</em></p>
                    <a href={`states/${state.name}`} className="btn btn-primary stateButton">Learn More</a>
                </div>
            </div>
            </div>
        ))}
        </div>
    )
}

export default StateInfo;