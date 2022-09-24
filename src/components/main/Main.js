import { useState, Fragment } from "react";

// Components
import VideoButton from "../UI/VideoButton";

// CSS
import { GiSpeakerOff, GiSpeaker } from "react-icons/gi";
import { BiVideo, BiVideoOff } from "react-icons/bi";

// assets
import VideoBackground from "../../assets/video/Crossfit-Cinematic.mp4";
import {
  Box,
  Center,
  Container,
  Flex,
  IconButton,
  Image,
  Text,
  VStack,
  Heading,
  Button,
} from "@chakra-ui/react";

const Main = () => {
  const [toggleMute, setToggleMute] = useState(true);
  const [stopVideo, setStopVideo] = useState(false);

  let muteIconSrc = toggleMute ? GiSpeakerOff : GiSpeaker;
  let videoIconSrc = stopVideo ? BiVideoOff : BiVideo;

  return (
    <Fragment>
      <Center>
        <Flex justifyContent="center" alignItems="center" minH="90vh">
          {stopVideo ? (
            <Image
              src="https://t3.ftcdn.net/jpg/02/42/39/66/360_F_242396695_5npYdlTm60j48pFPAVFJBC5uj9Lnvl6q.jpg"
              minW="100%"
              minH="101%"
              position="absolute"
              top="0"
              left="0"
              zIndex="-1"
              backgroundSize="cover"
            />
          ) : (
            <Box
              minW="100%"
              minH="100%"
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
            />
          )}
          <VStack>
            <Heading
              as="h1"
              size="4xl"
              noOfLines={1}
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
            <Button _active={{ transform: "scale(.95)" }}>Shop Now</Button>
            <Flex justifyContent="center">
              <Container>
                <VideoButton
                  action={() => setToggleMute(!toggleMute)}
                  src={muteIconSrc}
                />
                <VideoButton
                  action={() => setStopVideo(!stopVideo)}
                  src={videoIconSrc}
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
