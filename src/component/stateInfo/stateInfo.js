import { Link as RouterLink } from 'react-router-dom'
import '../stateInfo/stateInfo.css'
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function StateInfo( {} ){
    const [returnedState, setStates] = useState([]);

    useEffect(() => {
        const loadStates = async () => {
            try {
                const apiResponse = await axios.get('http://localhost:8000/api/v1/states')
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
        // <div className="card" style={{width: 18 + 'rem'}}>
        //     <img className="card-img-top" src=".../100px180/" alt="Card image cap" />
        //     <div className="card-body">
        //         <h5 className="card-title">Card title</h5>
        //         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        //         <a href="#" className="btn btn-primary">Go somewhere</a>
        //     </div>
        // </div>
        <div className="row">
        {returnedState.map(state => (
            <div key={state._id} className="col-sm-6 col-md-4 col-lg-3 mb-3">
            <div className="card">
                <img src={state.image} className="card-img-top" alt={state.name} />
                <div className="card-body">
                    <h5 className="card-title">{state.name}</h5>
                    <p className="card-text">{state.nickname}</p>
                    <a href="#" className="btn btn-primary">Learn More</a>
                </div>
            </div>
            </div>
        ))}
        </div>

    )
}

export default StateInfo;