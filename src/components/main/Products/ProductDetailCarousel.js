import React, { useState } from "react";
import { Box, IconButton, useBreakpointValue, Image } from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};
// infinite: true,
// autoplay: true,
// speed: 500,
// autoplaySpeed: 5000,

function ProductDetailCarousel(props) {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "10px" });

  // These are the images used in the slide
  const images = [
    props.item.productDetails.imageOne,
    props.item.productDetails.imageTwo,
    props.item.productDetails.imageThree,
  ];

  console.log(props.item);

  return (
    <Box
      position={"relative"}
      height={"600px"}
      width={["full", "full", "70%"]}
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="facebook"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        // color="limegreen"
        colorScheme="facebook"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {images.map((url, index) => (
          <Image
            key={index}
            boxSize="675px"
            objectFit="fit"
            src={url}
            alt="Product Image"
          />
          // <Box
          //   key={index}
          //   height={"6xl"}
          //   position="relative"
          //   backgroundPosition="center"
          //   backgroundRepeat="no-repeat"
          //   backgroundSize="cover"
          //   as="image"

          // />
        ))}
      </Slider>
    </Box>
  );
}

export default ProductDetailCarousel;
