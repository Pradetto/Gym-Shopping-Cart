import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  VStack,
  Text,
} from "@chakra-ui/react";
import React, { Fragment, useState } from "react";
import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";

const CONFETTI_DARK = `url("https://coolwallpapers.me/picsup/5635383-fitness-wallpapers.jpg")`;

function ContactPage() {
  const { hasCopied, onCopy } = useClipboard("pradetto5@gmail.com");
  const [submitted, setSubmitted] = useState(false);

  return (
    <Flex
      align="center"
      justify="center"
      css={{
        backgroundImage: CONFETTI_DARK,
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "93vh",
        backgroundSize: "cover",
        backgroundPosition: "left", // toggle this to center if I want the background image to drag
      }}
      id="contact"
    >
      <Box
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 5, lg: 16 }}
      >
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <Heading
              color="white"
              fontSize={{
                base: "4xl",
                md: "5xl",
              }}
            >
              Get in Touch
            </Heading>

            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: "column", md: "row" }}
            >
              <Stack
                align="center"
                justify="space-around"
                direction={{ base: "row", md: "column" }}
              >
                <Tooltip
                  label={hasCopied ? "Email Copied!" : "Copy Email"}
                  closeOnClick={false}
                  hasArrow
                >
                  <IconButton
                    color="white"
                    aria-label="email"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<MdEmail />}
                    _hover={{
                      bg: "blue.500",
                    }}
                    onClick={onCopy}
                    isRound
                  />
                </Tooltip>

                <Link href="https://github.com/Pradetto">
                  <IconButton
                    color="white"
                    aria-label="github"
                    variant="ghost"
                    size="lg"
                    fontSize="3xl"
                    icon={<BsGithub />}
                    _hover={{
                      bg: "blue.500",
                    }}
                    isRound
                  />
                </Link>

                <Link href="#NoTwitter Try LinkedIn">
                  <IconButton
                    color="white"
                    aria-label="twitter"
                    variant="ghost"
                    size="lg"
                    icon={<BsTwitter size="28px" />}
                    _hover={{
                      bg: "blue.500",
                    }}
                    isRound
                  />
                </Link>

                <Link href="https://www.linkedin.com/in/michael-pradetto/">
                  <IconButton
                    color="white"
                    aria-label="linkedin"
                    variant="ghost"
                    size="lg"
                    icon={<BsLinkedin size="28px" />}
                    _hover={{
                      bg: "blue.500",
                    }}
                    isRound
                  />
                </Link>
              </Stack>

              <Box bg="white" borderRadius="lg" p={8} shadow="base">
                <VStack spacing={5}>
                  <FormControl isRequired>
                    <FormLabel>Name</FormLabel>

                    <InputGroup>
                      <InputLeftElement children={<BsPerson />} />
                      <Input type="text" name="name" placeholder="Your Name" />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>

                    <InputGroup>
                      <InputLeftElement children={<MdOutlineEmail />} />
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Message</FormLabel>

                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={6}
                      resize="none"
                    />
                  </FormControl>
                  {!submitted && (
                    <Button
                      colorScheme="blue"
                      bg="blue.400"
                      color="white"
                      _hover={{
                        bg: "blue.500",
                      }}
                      onClick={() => setSubmitted(true)}
                    >
                      Send Message
                    </Button>
                  )}
                  {submitted && (
                    <Fragment>
                      <Text color="green">
                        Success. Thanks for reaching out!
                      </Text>
                      <Button
                        colorScheme="gray"
                        bg="gray.400"
                        color="white"
                        _hover={{
                          bg: "gray.500",
                        }}
                        onClick={() => setSubmitted(false)}
                      >
                        Submit again?
                      </Button>
                    </Fragment>
                  )}
                </VStack>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}

export default ContactPage;
