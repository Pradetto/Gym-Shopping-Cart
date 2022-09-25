// React / Redux
import React from "react";

// CSS
import { Icon } from "@chakra-ui/react";

const VideoButton = (props) => {
  return (
    <Icon
      as={props.src}
      onClick={props.action}
      position=""
      zIndex="5"
      w={25}
      h={25}
      color="white"
      cursor={"pointer"}
      ml="5px"
      radius="50%"
    />
  );
};

export default VideoButton;
