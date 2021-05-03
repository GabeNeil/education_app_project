import React from 'react';
import Carousel from 'react-multi-carousel' 
import 'react-multi-carousel/lib/styles.css';
//import "bootstrap/dist/css/bootstrap.css";
//import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import Trumpet from "./Trumpet.png";
import Double_Bass from "./Double_Bass.png";
import Electric_Guitar from "./Electric_Guitar.png";
import Saxophone from "./Saxophone.png";
import "./InstrumentMenu.css";
import '../App.css';




const InstrumentMenu = ({instrumentList, onClick}) => {

    // const onClick = (event) => {
    //     //selectLesson(event.target.index);
    //     console.log(event.target.value);
    // }

    const menu_images = {"Trumpet":Trumpet, "Double Bass":Double_Bass, "Electric Guitar":Electric_Guitar, "Saxophone":Saxophone}

    const instrumentsItems = instrumentList.map((instrument, index) => {
        return (<img id='instrument-select' onClick={onClick} index={index} key={index} src={menu_images[instrument.name]} alt="" />
        
        );
    })

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return (
        <Carousel id='instrument-menu'
        responsive={responsive} 
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable>
            {instrumentsItems}
        </Carousel>
    )
};

export default InstrumentMenu;
