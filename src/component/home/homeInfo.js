import { Link as RouterLink } from 'react-router-dom'
import '../home/homeInfo.css'

function HomeInfo( {} ){
    return(
        <div className="jumbotron jumbotron-fluid jumbotronBox">
            <div className="container">
                <h1 className="display-4">States In the USA</h1>
                <p className="lead">
                    The United States is the third largest country in the world by land area, 
                    covering approximately 9.8 million square kilometers (3.8 million square miles).
                    <br></br>
                    There are 50 states in the United States, each with its own unique history, culture, and geography.
                </p>
            </div>
        </div>
    )
}

export default HomeInfo;