import React, {Component} from 'react'
import LayoutTemplateBanner from './components/LayoutTemplateBanner.jsx'
import LayoutTemplateIntroduce from './components/LayoutTemplateIntroduce.jsx'
import LayoutTemplateServices from './components/LayoutTemplateServices.jsx'
import './App.css';


export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div>
                <LayoutTemplateBanner/>
                <main id="main" className="site-main haslayout">
                    <div className="fw-page-builder-content">
                        <section className="tg-main-section haslayout" style={{
                            backgroundColor: "#f7f7f7",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "0% 100%",
                            backgroundSize: "cover",
                            display: "flex"
                        }}>
                            <div className="container" style={{
                                paddingRight: "5px",
                                paddingLeft: "5px",
                                marginRight: "0",
                                marginLeft: "0",
                                display: "flex",
                                width: "100%"
                            }}>
                                <LayoutTemplateIntroduce/>
                            </div>
                        </section>
                        <section className="tg-main-section haslayout" style={{
                            backgroundColor: "#f7f7f7",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "0% 100%",
                            backgroundSize: "cover",
                            padding: "0 0 100px 0"
                        }}>
                            <LayoutTemplateServices/>
                        </section>
                    </div>
                </main>
            </div>
        );
    }
}