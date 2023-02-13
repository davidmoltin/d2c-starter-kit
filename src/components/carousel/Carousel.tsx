import { Box, Text, Button } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import NextLink from "next/link";

// @ts-ignore
function Carousel({ images }) {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut: NodeJS.Timeout | null = null;

  useEffect(() => {
    // @ts-ignore
    timeOut =
      autoPlay &&
      setTimeout(() => {
        slideRight();
      }, 3000);
  });

  const slideRight = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const slideLeft = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };
  return (
    <Box
      display="flex"
      width="100%"
      minHeight="550px"
      alignItems="center"
      justifyContent="flex-end"
      onMouseEnter={() => {
        setAutoPlay(false);
        // @ts-ignore
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}
    >
      <Box position="relative" width="100%" height="100%" userSelect="none">
        {/* @ts-ignore */}
        {images.map((image, index) => {
          return (
            <Box
              key={index}
              display="flex"
              flex={1}
              position="absolute"
              width="100%"
              height="100%"
              bgImage={image.image}
              bgPos={{ base: "left", sm: "left", md: "top", lg: "top" }}
              bgSize="cover"
              p={6}
              alignItems="center"
              justifyContent={{
                base: "center",
                sm: "center",
                md: "flex-end",
                lg: "flex-end",
              }}
              minHeight="550px"
              opacity={index === current ? 1 : 0}
              transition="opacity 1s ease-in-out"
            >
              <Box
                maxWidth="500px"
                p={4}
                textAlign="left"
                marginRight={{ base: "0", sm: "0", md: "30px", lg: "30px" }}
                backgroundColor="rgba(239, 239, 240,0.6)"
                borderRadius={10}
                display={image.display}
              >
                <Text fontSize="3xl" color="black">
                  Welcome to Elastic Path
                </Text>
                <Text fontSize="3xl" color="black">
                  We&apos;re so glad you&apos;ve joined us
                </Text>
                <br />
                <Text fontSize="lg" color="black">
                  You&apos;ve joined the team and now it&apos;s time to use your
                  Elastic Path swag proudly! EP Swag offers comfortable clothing
                  basics to office necessities.
                </Text>
                <br />
                <Text fontSize="lg" color="black">
                  Click <strong>shop</strong> to start shopping!
                </Text>
                <br />
                <br />
                <Box textAlign="right">
                  <NextLink href="/search/ep-swag/new-hire-bundle">
                    <Button
                      size="lg"
                      backgroundColor="#D37422"
                      color="white"
                      width="200px"
                      _hover={{
                        backgroundColor: "#D37422",
                        color: "white",
                      }}
                    >
                      shop
                    </Button>
                  </NextLink>
                </Box>
              </Box>
            </Box>
          );
        })}
        <Box
          position="absolute"
          fontSize="40px"
          top="50%"
          transform="translate(0, -50%)"
          backgroundColor="rgba(239, 239, 240,0.4)"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="30px"
          height="30px"
          borderRadius="50%"
          paddingBottom="7px"
          zIndex={100}
          cursor="pointer"
          left="15px"
          onClick={slideLeft}
          userSelect="none"
        >
          &lsaquo;
        </Box>

        <Box
          position="absolute"
          fontSize="40px"
          top="50%"
          transform="translate(0, -50%)"
          backgroundColor="rgba(239, 239, 240,0.4)"
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="30px"
          height="30px"
          borderRadius="50%"
          paddingBottom="7px"
          zIndex={100}
          cursor="pointer"
          userSelect="none"
          right="15px"
          onClick={slideRight}
        >
          &rsaquo;
        </Box>
        <Box
          position="absolute"
          bottom="5px"
          left="50%"
          transform="translate(-50%, 0)"
          userSelect="none"
        >
          {/* @ts-ignore */}
          {images.map((_, index) => {
            return index == current ? (
              <Box
                key={index}
                height="10px"
                width="10px"
                backgroundColor="#0033CC"
                borderRadius="50%"
                display="inline-block"
                marginLeft="10px"
                cursor="pointer"
                onClick={() => setCurrent(index)}
              ></Box>
            ) : (
              <Box
                key={index}
                height="10px"
                width="10px"
                backgroundColor="#f5f5f5"
                borderRadius="50%"
                display="inline-block"
                marginLeft="10px"
                cursor="pointer"
                onClick={() => setCurrent(index)}
              ></Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}

export default Carousel;
