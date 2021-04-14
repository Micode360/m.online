import '../css/carousel.css'
import addidas from "../img/addidas_ball.png"
import Slider from "react-slick";


export default function Carousel() {

    // const settings = {
    //     className: "center",
    //     centerMode: true,
    //     infinite: true,
    //     centerPadding: "60px",
    //     slidesToShow: 3,
    //     speed: 500
    // };
    const arr = [
        {
            title: 'Adidas 416 Pro',
            description: '2021 ball brand with Aesthetic letter upgrade',
            amount: 2.33,
            currency: 'dollars',
            image: addidas
        },
        {
            title: 'Euro 891 Pro',
            description: 'Euro 2020 ball extra large',
            amount: 12.44,
            currency: 'dollars',
            image: addidas
        },
        {
            title: 'Adidas 816 Pro',
            description: 'All European brand made with synthetic leather',
            amount: 8.44,
            currency: 'dollars',
            image: addidas
        },
        {
            title: 'Addidas white',
            description: 'special made brand',
            amount: 13.44,
            currency: 'dollars',
            image: addidas
        }
    ];

    // const settings = {
    //     className: "center",
    //     centerMode: true,
    //     infinite: true,
    //     lazyLoad: true,
    //     centerPadding: "0",
    //     slidesToShow: 3,
    //     speed: 300,
    //   //  beforeChange: (current, next) => 
    // };

    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };

    return (
        <div className="carousel-container">
            <div className="carousel-carton">
            <Slider {...settings}>
                {
                    arr.map((item, id) => {

                        return (
                            <div  key={id}>
                                <div className="item-card">
                                    <div className="item-card-body">
                                        <div className="item-img-container">
                                            <img src={item.image} alt="addidas_ball" className="item-img" />
                                        </div>
                                        <div className="inline item-amount-inline-case">
                                            <span className="amount">${item.amount}</span>
                                            <button className="add">Add</button>
                                        </div>
                                        <div className="card-info">
                                            <h4 className="item">{item.title}</h4>
                                            <p className="item-description">{item.description}</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </Slider>
            </div>
        </div>
    );
}