import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function AppSlider() {
   
   const data = [
   {
      name: "Modelo 1",
      class: "Zapatilla Urbana",
      price: "500.90",
      imglink : '../shoe1.png'
   },
   {
      name: "Modelo 2",
      class: "Zapatilla Deportiva",
      price: "500.90",
      imglink : "../shoe2.png"
   },
   {
      name: "Modelo 3",
      class: "Zapatilla Urbana",
      price: "500.90",
      imglink : "../shoe3.png"
   },
   {
      name: "Modelo 4",
      class: "Zapatilla Deportiva",
      price: "500.90",
      imglink : "../shoe4.png"
   },
   {
      name: "Modelo 5",
      class: "Zapatilla Urbana",
      price: "500.90",
      imglink : "../shoe5.png"

   },
   {
      name: "Modelo 6",
      class: "Zapatilla Urbana",
      price: "500.90",
      imglink : "../shoe6.png"

   }
   ]

   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      variableWidth: true,
      swipeToSlide: true,
      edgeFriction: 0.15,
   };

 return (
      <Slider {...settings} >
          {data.map((d) => (
                <img src="../shoe1.png" alt="imagen de zapatilla"></img>
            
           ))}
        </Slider>
 );
}
 export default AppSlider 