import React, {Component} from 'react';
import {assign} from 'lodash';

export default class LayoutTemplateTestimonial extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentCarousel: 2,
            customers: [
                {
                    id: "0", name: 'Linda Ketchum Ontiveros',
                    experience: 'We used Cecilia to take in my son\'s suit and hem a cuff in a few of my husbands pants. Her quality was just awesome! \n' +
                        '                    If you need alterations, do not hesitaet to use her!.',
                    image: "images/testimonial/image0.png",
                    styleContainer: '', styleImage: '', styleText: ''
                },

                {
                    id: "1", name: 'Hailey Bateman Wolfenbarger',
                    experience: 'My friend recently moved to the US from Peru where she owned a clothing design and alterations shop and is now starting a business here. \n' +
                        '                    Ceci does beautiful work - if you need any type of clothing altered please go see her!!',
                    image: "images/testimonial/image1.png",
                    styleContainer: '', styleImage: '', styleText: ''
                },

                {
                    id: "2", name: 'Lidia Tecco',
                    experience: 'I am so happy for the wedding dress Cecilia made for me.\n' +
                        '                     And make me the most happy and beautiful bride in my wedding. Thank you Ceci\'Style for been part and be in every moment of my wedding. Thank you for your wonderful work',
                    image: "images/testimonial/image2.png",
                    styleContainer: '', styleImage: '', styleText: ''
                },

                {
                    id: "3", name: 'Shirley Figueroa',
                    experience: 'I dreamed of a princess dress for my wedding in Peru and that could come true.\n' +
                        '                    Thanks to the wonderful and professional design of Ceci. She understood every detail. I wanted and exceeded all my expectations, I love my wedding dress!!.\n' +
                        'When I knew that Ceci\'Style would go to Utah. I was so sad and nostalgie, I tought. Who\'s gonna make my dresses now??!.\n' +
                        'Utah you don\'t know the super talent you\'ve taken!',
                    image: "images/testimonial/image3.png",
                    styleContainer: '', styleImage: '', styleText: ''
                },

                {
                    id: "4", name: 'Mary Ann Russell',
                    experience: 'So my friend Ceci Castillo from Peru moved to Salt Lake City about a year ago and brought her dress designing business with her. She\'s great for weddings, special occasions, \n' +
                        '                    and missions! Ceci made me two of my favorite dresses while I was on my mission. She offers alterations, too! Hit her up on FB and give this awesome woman some business! Or if you\'d like I can give you her phone number.',
                    image: "images/testimonial/image4.png",
                    styleContainer: '', styleImage: '', styleText: ''
                },

                {
                    id: "5", name: 'JD Wood',
                    experience: 'Absolutely amazing work. She is quick and very fair in price! More than anything you will love the work she does!',
                    image: "images/testimonial/image5.png",
                    styleContainer: '', styleImage: '', styleText: ''
                },

                {
                    id: "6", name: 'Chelsea Thornton',
                    experience: 'Very pleased. She was fast and did a great job!',
                    image: "images/testimonial/image6.png",
                    styleContainer: '', styleImage: '', styleText: ''
                },

                {
                    id: "7", name: 'Amanda Nicholson',
                    experience: 'Hi, we just wanted to give a shut it to Ceci Castillo with Ceci\'style, she did an amazing job altering my wedding dress and Josh\'s suit for our big day, she was super easy to work with. \n' +
                        'Full bunch she did and amazing job, exactly what I wanted, so we recommend her to anyone.',
                    image: "images/testimonial/image7.png",
                    styleContainer: '', styleImage: '', styleText: ''
                },

                {
                    id: "8", name: 'Diana Becerra Delgado',
                    experience: 'I love each detail and dedication that she puts to her designs. I was totally enchanted with my wedding dress, loved every detail of my dress, the work and dedication was reflected in it.  \n' +
                        'I recommend the beautiful work done by the designer Cecilia. She not only made and designed my dress, she also made the beautiful dresses of my bridesmaids and each of them was enchanted. 100% recommended!',
                    image: "images/testimonial/image8.png",
                    styleContainer: '', styleImage: '', styleText: ''
                }

            ],
            listStyles: [
                {
                    styleContainer: 'carousel-content-0',
                    styleImage: 'carousel-content-image-0',
                    styleText: 'carousel-content-text-0'
                },
                {
                    styleContainer: 'carousel-content-1',
                    styleImage: 'carousel-content-image-1',
                    styleText: 'carousel-content-text-1'
                },
                {
                    styleContainer: 'carousel-content-2',
                    styleImage: 'carousel-content-image-2',
                    styleText: 'carousel-content-text-2'
                },
                {
                    styleContainer: 'carousel-content-3',
                    styleImage: 'carousel-content-image-3',
                    styleText: 'carousel-content-text-3'
                },
                {
                    styleContainer: 'carousel-content-4',
                    styleImage: 'carousel-content-image-4',
                    styleText: 'carousel-content-text-4'
                },
                {
                    styleContainer: 'carousel-content-5',
                    styleImage: 'carousel-content-image-5',
                    styleText: 'carousel-content-text-5'
                }
            ],

        }
        this.slideUp = this.slideUp.bind(this);
        this.slideDown = this.slideDown.bind(this);
    }

    componentWillMount() {
        let {customers, listStyles} = this.state;
        if (listStyles.length === customers.length || customers.length > listStyles.length) {
            listStyles.forEach((style, index) => {
                customers[index].styleContainer = style.styleContainer;
                customers[index].styleImage = style.styleImage;
                customers[index].styleText = style.styleText;
            })
        }

        if (customers.length < listStyles.length) {
            customers.forEach((customer, index) => {
                customer.styleContainer = listStyles[index].styleContainer;
                customer.styleImage = listStyles[index].styleImage;
                customer.styleText = listStyles[index].styleText;
            })
        }
        this.setState({customers: customers, listStyles: listStyles});
    }

    slideUp() {
        let {customers, currentCarousel} = this.state;
        const next = window.document.getElementById("nextT");
        next.style.display = "none";
        const back = window.document.getElementById("backT");
        back.style.display = "none";
        let testimonialOld = assign({}, customers);
        let styleContainerAux = testimonialOld[customers.length - 1].styleContainer;
        let styleImageAux = testimonialOld[customers.length - 1].styleImage;
        let styleTextAux = testimonialOld[customers.length - 1].styleText;

        let i = customers.length - 1;
        while (i > 0) {
            customers[i].styleContainer = testimonialOld[i - 1].styleContainer;
            customers[i].styleImage = testimonialOld[i - 1].styleImage;
            customers[i].styleText = testimonialOld[i - 1].styleText;
            i--;
        }

        customers[0].styleContainer = styleContainerAux;
        customers[0].styleImage = styleImageAux;
        customers[0].styleText = styleTextAux;

        if (currentCarousel === customers.length - 1) {
            currentCarousel = 0
        } else {
            currentCarousel = currentCarousel + 1
        }
        this.setState({customers, currentCarousel, displayUpDown: false});
        setTimeout(function () {
            next.style.display = "flex";
            back.style.display = "flex";
        }.bind(this), 400);
    }

    slideDown() {
        let {customers, currentCarousel} = this.state;
        const next = window.document.getElementById("nextT");
        next.style.display = "none";
        const back = window.document.getElementById("backT");
        back.style.display = "none";
        let testimonialOld = assign({}, customers);
        let styleContainerAux = testimonialOld[0].styleContainer;
        let styleImageAux = testimonialOld[0].styleImage;
        let styleTextAux = testimonialOld[0].styleText;

        let i = 0;
        while (i < (customers.length - 1)) {
            customers[i].styleContainer = testimonialOld[i + 1].styleContainer;
            customers[i].styleImage = testimonialOld[i + 1].styleImage;
            customers[i].styleText = testimonialOld[i + 1].styleText;
            i++;
        }

        customers[customers.length - 1].styleContainer = styleContainerAux;
        customers[customers.length - 1].styleImage = styleImageAux;
        customers[customers.length - 1].styleText = styleTextAux;

        if (currentCarousel === 0) {
            currentCarousel = customers.length - 1
        } else {
            currentCarousel = currentCarousel - 1
        }

        this.setState({customers, currentCarousel});

        setTimeout(function () {
            next.style.display = "flex";
            back.style.display = "flex";
            // eslint-disable-next-line no-restricted-globals
        }.bind(this), 400);


    }


    render() {
        let {customers} = this.state;
        let {primaryColor} = this.props;
        return (
            <div className="layout-customer-testimonial">
                {
                    customers.length !== 0 ?
                        customers.map((customer, index) => {
                            return (
                                customer.styleContainer !== '' ?
                                    <div key={index} className={customer.styleContainer}>
                                        <div id="container-style-text" className={customer.styleText}>
                                            <div className={customer.styleImage}>
                                                <img className="img-testimonial" src={customer.image} alt=""/>
                                            </div>
                                            <div className="testimonial-content-container">
                                                <div id={"testimonialContent" + index} className="testimonial-content">
                                                    {customer.experience}
                                                </div>
                                            </div>
                                            <div>
                                                <h4>{customer.name}</h4>
                                            </div>
                                        </div>
                                    </div> : null)
                        })
                        : null
                }
                <div id="nextT" className="content-up-down">
                    <div id="semiUp" className="semi-circle-up" style={{border: "1px solid " + primaryColor}}
                         onClick={this.slideUp}>
                        <i id="iconUpArrow" className="fa fa-chevron-up up" style={{color: primaryColor}}/>
                    </div>
                </div>
                <div id="backT" className="content-up-down">
                    <div id="semiDown" className="semi-circle-down" style={{border: "1px solid " + primaryColor}}
                         onClick={this.slideDown}>
                        <i id="iconDownArrow" className="fa fa-chevron-up down" style={{color: primaryColor}}/>
                    </div>
                </div>
            </div>
        )
    }
}