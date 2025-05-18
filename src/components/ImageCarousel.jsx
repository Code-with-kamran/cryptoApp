import { Carousel } from "@material-tailwind/react";
 
 function ImageCarousel() {
  return (
    <Carousel className=" h-40 w-1/1" transition={{ duration: 1 }} autoplay={true} loop={true}>
      <img
        loading="lazy"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7LrKKtlLT9PPj1cHlrZK0ThmuDDeP7OjNxUicIr8GVTiX7zocCujeXvip07l3ACAgsL0&usqp=CAU"
        className="h-full w-full object-cover"
      />
      <img
        loading="lazy"
        src="https://www.shutterstock.com/image-illustration/top-7-cryptocurrency-tokens-by-600nw-2152214777.jpg"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        loading="lazy"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDaOkfbtciGqHASuOSK1aCASTykWkWyUmRHl2ootGipItgIMdJJwuD5W6kT1CCFiQIyKc&usqp=CAU"
        alt="image 2"
        className="h-full w-full object-cover"
      />
      <img
        loading="lazy"
        src="https://www.flatworldsolutions.com/IT-services/images/popular-cryptocurrencies-to-invest-in-2024.webp"
        alt="image 3"
        className="h-full w-full object-cover"
      />
    </Carousel>
  );
}

export default ImageCarousel; 