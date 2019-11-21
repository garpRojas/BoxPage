import React from 'react'
import './HeaderBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'


const headerBar= () => {
    return(
        <div className="headerBar">
            <div className="container-fluid collapse" id="collapseBar">
                <div className="row">
                    <ul className="col-lg-9 col-md-12 col-sm-12">
                        <li className="listItem">
        <FontAwesomeIcon icon={faMapMarker} />
                            <span className="icone fa fa-map-marker"></span>
                            <a className="bartext" href="#">
                                267 Park Avenue New York, NY 90210
                            </a>
                        </li>
                        <li className="listItem">
        <FontAwesomeIcon icon={faClock} />
                            <span className="icone fa fa-map-marker"></span>
                            <a className="bartext" href="#">
                                Mon – Sat: 9:00am–18:00pm. Sunday CLOSED
                            </a>
                        </li>
                        <li className="listItem">
        <FontAwesomeIcon icon={faPhone} />
                            <span className="icone fa fa-map-marker"></span>
                            <a className="bartext" href="#">
                                +1 (409) 987–5874
                            </a>
                        </li>
                    </ul>
                    <ul className="col-lg-3 col-md-12 col-sm-12">
                        <li className="list-item-icon">
                            <a className="bartext social-icon" href="#">
                                      <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                        </li>
                        <li className="list-item-icon">
                            <a className="bartext social-icon" href="#">
                                      <FontAwesomeIcon icon={faInstagram} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <a className="dots hidden-lg" data-toggle="collapse" href="#collapseBar" role="button" aria-expanded="false" aria-controls="collapseExample">
            </a>
        </div>
        
    
    )
}

export default headerBar;