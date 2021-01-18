import React, {Component} from 'react';

export default class LayoutTemplateHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <div style={{float: "left"}}>
                    <div className="logo">
                        <a href="/">
                            <img src="../images/logo/LogoCard.bmp" alt="Ceci'Style Logo"/>
                        </a>
                    </div>
                </div>
                <div className="top-bar haslayout">
                    <div id="id-container-top-header" className="container" style={{fontSize: "19px"}}>
                        <div className="col-md-6 col-sm-3 col-xs-6 pull-left">
                            <span className="phone">
                                <i className="glyphicon glyphicon-phone"/>
                                <em> 1 (385) 226 2473 </em>
                            </span>
                            <span className="email">
                                <i className="glyphicon glyphicon-send"/>
                                <em><a href="mailto:info@cecistyle.org">info@cecistyle.org</a></em>
                            </span>
                        </div>
                        <div className="col-md-6 col-sm-3 col-xs-6 pull-right">
                            <div className="row">
                                <ul className="social-icon">
                                    <li>
                                        <a title="Facebook" href="https://www.facebook.com/cecistyleutah/"
                                           target="_blank" rel="noopener noreferrer">
                                            <i id="header-social-icon" className="fa fa fa-facebook-f"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a title="twitter" href="https://twitter.com/style_ceci" target="_blank"
                                           rel="noopener noreferrer">
                                            <i id="header-social-icon" className="fa fa fa-twitter"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a title="linkedin" href="https://www.linkedin.com/in/cecistyle/"
                                           target="_blank" rel="noopener noreferrer">
                                            <i id="header-social-icon" className="fa fa fa-linkedin"/>
                                        </a>
                                    </li>
                                    <li>
                                        <a title="Instagram" href="https://www.instagram.com/cecistyleutah/"
                                           target="_blank" rel="noopener noreferrer">
                                            <i id="header-social-icon" className="fa fa fa-instagram"/>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}