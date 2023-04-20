import { Link as RouterLink, useParams } from 'react-router-dom'
import '../stateInfo/stateInfo.css'
import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import '../stateInfo/StateContainer.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function MyVerticallyCenteredModal(props) {
    const { data } = props;
    // console.log(data)

    return (
      <Modal {...props} size="md" aria-labelledby="Fun Fact About The Selected State" centered>
        <Modal.Header closeButton>
          <Modal.Title id="Fun Fact"> Fun Fact For {data.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            {data.funfact}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
}

function StateDits( {} ){
    const [returnedState, setStates] = useState([]);
    let { name } = useParams();
    const inputRef = useRef(null);
    const [modalShow, setModalShow] = React.useState(false);

    useEffect(() => {
        const loadStates = async () => {
            try {
                const apiResponse = await axios.get(`http://localhost:8000/api/v1/states/${name}`)
                // const test = apiResponse.data;
                // console.log(test.name);
                setStates(apiResponse.data); 
            }
            catch (error) {
                console.log("Error :(");
            }
        };

        loadStates();
    }, []);
    // console.log(returnedState.name)
    return(
        <div className="state-container">
            <div className="state-header">
                <img className="state-image" src={returnedState.image} alt={returnedState.name} />
                <h2 className="state-name">{returnedState.name}</h2>
                <p className="state-nickname">{returnedState.nickname}</p>
            </div>
            <div className="state-info">
                <h2 className="state-name stateInfoTitle">More Info</h2>
                <p><span className="label">Capital:</span> {returnedState.capital}</p>
                <p><span className="label">Date of Statehood:</span> {returnedState.date_of_statehood}</p>
                <p><span className="label">Population:</span> {returnedState.population} Million People</p>
                <p><span className="label">Motto:</span> "{returnedState.motto}"</p>
                <p><span className="label">Land Mass:</span> {returnedState.landmass}</p>
                <p><span className="label">Major Industry:</span> {returnedState.majorindustry}</p>
                <p><span className="label">Tourist Attractions:</span> {returnedState.touristattractions}</p>
                <div className="state-symbols">
                <h3 className='stateInfoTitle'>Symbols:</h3>
                {returnedState.symbols && returnedState.symbols.map((symbol, index) => (
                    <p key={index}><span className="symbol-label">{symbol.name}:</span> {symbol.value}</p>
                ))}
                </div>
            </div>

            <Button variant="primary" onClick={() => setModalShow(true)}>Learn A Fun Fact</Button>
            <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} data={returnedState} />
        </div>
    )
}

export default StateDits;