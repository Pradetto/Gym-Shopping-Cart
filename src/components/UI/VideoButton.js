// React / Redux
import React from "react";

// CSS
import { Button, Icon, IconButton, Image } from "@chakra-ui/react";

const VideoButton = (props) => {
  return (
    // <Button
    //   size="lg"
    //   onClick={props.action}
    //   position="relative"
    //   //   translateY="200"
    //   //   translateX="-200"
    //   mt="-80%"
    //   z-zIndex="5"
    // >
    //   {props.children}
    // </Button>

    <Icon
      //   display="inline-block"
      as={props.src}
      onClick={props.action}
      position=""
      zIndex="5"
      w={25}
      h={25}
      color="white"
      cursor={"pointer"}
      //   border="2px solid white"
      ml="5px"
      radius="50%"
    />
  );
};

export default VideoButton;
