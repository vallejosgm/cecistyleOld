import React, {Component} from 'react';


export default class LayoutTemplateServices extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.onFacebook = this.onFacebook.bind(this);
    }

    componentWillMount() {
        window.addEventListener('onload', this.onFacebook);
    }

    componentWillUnmount() {
        window.removeEventListener('onload', this.onFacebook);
    }

    onFacebook() {
        let isIpad = navigator.userAgent.match(/iPad/i) != null,
            isIphone = !isIpad && ((navigator.userAgent.match(/iPhone/i) != null) || (navigator.userAgent.match(/iPod/i) != null)),
            isIOS = isIpad || isIphone,
            // eslint-disable-next-line no-undef
            isSafari = isIOS && !!navigator.userAgent.match(/WebKit/i) && !navigator.userAgent.match(/CriOS/i);

        if (!isSafari) {
            document.location = 'fb://profile/1444139859182900';
            setTimeout(function () {
                if (!document.webkitHidden) {
                    window.open("https://www.facebook.com/cecistyleutah/", "_blank");
                }
            }, 25);
        } else {
            window.location = 'fb://profile/1444139859182900';
            setTimeout(function () {
                if (!document.webkitHidden) {
                    window.location = "https://www.facebook.com/cecistyleutah/";
                }
            }, 25);
        }
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-md-4  col-sm-12">
                        <div className="company-info haslayout">
                            <div className="col service">
                                <div className="border-left">
                                    <h3>OUR SERVICES</h3>
                                </div>
                                <figure className="img-service"><img src="../images/services/services.jpg"
                                                                     alt="Choosing the Right Alterations"/></figure>
                                <div className="description">
                                    <p>We are specialists in wedding dresses, dresses, men's suits, etc. We are here to
                                        be complicit in those special moments in your life.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-4  col-sm-6">
                        <div className="col formation">
                            <div className="border-left">
                                <h3>INFORMATION</h3>
                            </div>
                            <div className="description">
                                <p>Here is some information about Ceci'Style</p>
                            </div>
                            <ul>
                                <li>Due to the Covid-19 we ask you to wear a face mask and respect the social distance
                                    of 6 feet.
                                </li>
                                <li>We have parking to our customers.</li>
                                <li>To make an appointment, please contact us by phone at +1 (385) 226 2473 or send an
                                    email to info@cecistyle.org.
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-4  col-sm-6">
                        <div className="company-info">
                            <div className="address col address-info-wrap">
                                <div className="border-left">
                                    <h3>CECI'STYLE ADDRESS</h3>
                                </div>
                                <div className="description">
                                    <p>We are at</p>
                                </div>
                                <ul className="address-info ">
                                    <li>
                                        <a href="https://goo.gl/maps/9kVjUsFKFMBaMLvt6" target="_blank"
                                           rel="noopener noreferrer">
                                            <i className="fa fa-map-marker"
                                               style={{fontSize: "19px", color: "#F692BC"}}/>
                                            <address>1347 East 4065 South Millcreeck, Salt Lake City Utah 84124
                                            </address>
                                        </a>
                                    </li>
                                    <li>
                                        <i className="fa fa-tablet" style={{fontSize: "19px", color: "#F692BC"}}/>
                                        <address>+1 (385) 226 2473</address>
                                    </li>
                                    <li>
                                        <i className="fa fa-paper-plane" style={{fontSize: "19px", color: "#F692BC"}}/>
                                        <address><a href="mailto:info@cecistyle.org">info@cecistyle.org</a></address>
                                    </li>
                                </ul>
                                <div className="social-area">
                                    <ul className="social-icon">
                                        <li>
                                            <a title="Facebook" target="_blank" rel="noopener noreferrer"
                                               onClick={this.onFacebook}>
                                                <i className="fa fa-facebook"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a title="Twitter" href="https://twitter.com/style_ceci" target="_blank"
                                               rel="noopener noreferrer">
                                                <i className="fa fa-twitter"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a title="Linked in" href="https://www.linkedin.com/in/cecistyle/"
                                               target="_blank" rel="noopener noreferrer">
                                                <i className="fa fa-linkedin"/>
                                            </a>
                                        </li>
                                        <li>
                                            <a title="Instagram" href="https://www.instagram.com/cecistyleutah/"
                                               target="_blank" rel="noopener noreferrer">
                                                <i className="fa fa fa-instagram"/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}