import React, {Component} from 'react';
import VideoPlayer from 'react-simple-video-player';
import LayoutTemplateTestimonial from './LayoutTemplateTestimonial.jsx';

export default class LayoutTemplateIntroduce extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {

        return (
            <div className="container customers-lover" style={{}}>
                <div className="row">
                    <div className="col-xs-12 ">

                        <div className="section-heading alteration-fancy-heading" style={{margin: "0"}}>
                            <div className="heading">
                                <h2>WE LOVE OUR CUSTOMERS</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="section-introduce" className="row">
                    <div className="video-introduce">
                        <div className="col-sm-3"/>
                        <div className="col-sm-6" style={{display: "inline-table"}}>
                            <VideoPlayer url="../videos/videocristina.mp4" poster="../images/services/poster.png"
                                         width={720} height={540}/>
                        </div>
                        <div className="col-sm-3"/>
                    </div>
                    <div className="testimonial-introduce">
                        <LayoutTemplateTestimonial primaryColor={"rgb(147,0,80)"}/>
                    </div>
                </div>

            </div>
        )
    }
}