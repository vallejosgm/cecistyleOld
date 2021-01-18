import React, {Component} from 'react';

export default class LayoutTemplateBanner extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        let misPhotos = [];
        for (let i = 1; i < 27; i++) {
            misPhotos.push({"number": i})
        }
        return (
            <div className="banner haslayout" style={{backgroundColor: "#f7f7f7"}}>
                <div className="slider-caption">
                    <div className="box">
                        <div className="holder">
                            <div className="frame">
                                <div className="border-center">
                                    <span className="title">Ceci'Style</span>
                                </div>
                                <div className="border-center">
                                    <h1>Alterations <span>& Design</span></h1>
                                </div>
                                <div className="description">
                                    <p style={{
                                        fontWeight: "600",
                                        fontSize: "25px",
                                        lineHeight: "1.5",
                                        letterSpacing: "1px"
                                    }}>"Beauty begins the moment you decide to be yourself"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="home-slider" className="home-slider">
                    {misPhotos.map((index) => {
                        return (<div key={index.number} className="item">
                            <img src={"../images/banner/cecistyle" + index.number + ".jpg"} alt="slider"/>
                        </div>)
                    })}
                </div>
            </div>
        )
    }
}