import React, {Component} from 'react';
import '../../styles/Main.css';

export default class Footer extends Component {
    render(){
        return (
            <div >
                <br/>
                <div className="footer">
                    <a className="footer-link" href="https://github.com/MrBoutte101"><i className="footer-link fa fa-github fa-2x"></i> MrBoutte101</a>
                </div>
            </div>
        )
    }
}