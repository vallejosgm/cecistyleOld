import React, {Component} from 'react';


export default class LayoutTemplateFooter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            srcVenmo: "./images/footer/venmo.png"
        }
        this.hoverVenmo = this.hoverVenmo.bind(this);
        this.outVenmo = this.outVenmo.bind(this);
    }

    hoverVenmo() {
        this.setState({srcVenmo: "./images/footer/venmoHover.png"})
    }

    outVenmo() {
        this.setState({srcVenmo: "./images/footer/venmo.png"})
    }


    render() {
        let {srcVenmo} = this.state;
        return (
            <footer id="footer" className="footer haslayout">
                <div className="footer-description haslayout small-padding-section" style={{padding: "19px 0 19px 0"}}>
                    <div className="container">
                        <div className="col-md-6 col-md-offset-3">
                            <div className="row">
                                <span className="copyright">&copy; 2005 All Right Reserved <a
                                    href="https://www.cecistyle.org">CeciStyle Corp</a></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="payment haslayout small-padding-section">
                    <div className="container">
                        <ul>
                            <li><i className="fa fa-cc-paypal"/></li>
                            <li><i className="fa fa-cc-visa"/></li>
                            <li><img src={srcVenmo} alt="Venmo" onMouseOver={this.hoverVenmo} onMouseOut={this.outVenmo}
                                     className="fa-cc-venmo"/></li>
                        </ul>
                    </div>
                </div>
            </footer>
        )
    }
}