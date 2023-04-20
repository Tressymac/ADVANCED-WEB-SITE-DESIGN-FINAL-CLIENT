import { Link as RouterLink } from 'react-router-dom'
import '../footer/footer.css'

function Footer( {logo} ){
    return(
        <div className="card">
            <div className="card-header">
                Thank you for view my webpage
            </div>
            <div className="card-body">
                <h5 className="card-title">This Page was created by Tressica Mac @ 2023</h5>
                <p className="card-text">Click below to learn more about US States</p>
                <a href="https://en.wikipedia.org/wiki/U.S._state" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default Footer;