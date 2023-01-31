import { useState, Fragment } from "react";
import { NavLink as RouterLink } from "react-router-dom";

// Components
import VideoButton from "../UI/VideoButton";

// CSS
import { GiSpeakerOff, GiSpeaker } from "react-icons/gi";

// assets
import VideoBackground from "../../assets/video/Crossfit-Cinematic.mp4";
import {
  Box,
  Center,
  Container,
  Flex,
  VStack,
  Heading,
  Button,
  Link,
} from "@chakra-ui/react";

const Main = () => {
  const [toggleMute, setToggleMute] = useState(true);

  let muteIconSrc = toggleMute ? GiSpeakerOff : GiSpeaker;

  return (
    <Fragment>
      <Center>
        <Flex justifyContent="center" alignItems="center" minH="90vh">
          <Box
            minW="100%"
            minH="103%"
            as="video"
            src={VideoBackground}
            muted={toggleMute ? "True" : ""}
            loop
            autoPlay
            objectFit="cover"
            sx={{
              aspectRatio: "16/9",
            }}
            position="absolute"
            top="0"
            left="0"
            zIndex="-1"
            playsInline
          />
          <VStack>
            <Heading
              textAlign="center"
              as="h1"
              size="4xl"
              noOfLines={2}
              textColor="white"
              _hover={{
                transition: "all 1.65s ease",
                backgroundImage:
                  "linear-gradient(to left, violet, indigo, blue, green, #d2d20f, #eb9c0b, red)",
                backgroundClip: "text",
                textFillColor: "tansparent",
              }}
            >
              Own who you are.
            </Heading>
            <Link as={RouterLink} to="/products">
              <Button _active={{ transform: "scale(.95)" }}>Shop Now</Button>
            </Link>
            <Flex justifyContent="center">
              <Container>
                <VideoButton
                  action={() => setToggleMute(!toggleMute)}
                  src={muteIconSrc}
                />
              </Container>
            </Flex>
          </VStack>
        </Flex>
      </Center>
    </Fragment>
  );
};

export default Main;
