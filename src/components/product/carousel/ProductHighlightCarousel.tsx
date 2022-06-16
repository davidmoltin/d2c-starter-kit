import { useCallback } from "react";
import { isMobile } from "react-device-detect";
import { Box } from "@chakra-ui/react";
import type { File } from "@moltin/sdk";
import { CarouselProvider, Slider, Slide } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import {
  StyledButtonBack,
  StyledButtonNext,
  StyledImage,
  StyledImageWithZoom,
} from "../../shared/carousel-wrapped";
import LeftArrowIcon from "./icons/LeftArrowIcon";
import RightArrowIcon from "./icons/RightArrowIcon";
import { CarouselListener } from "./CarouselListener";

interface IProductHighlightCarousel {
  images: File[];
  selectedProductImage: File;
  setSelectedProductImage: (file: File) => void;
}

const ProductHighlightCarousel = ({
  images,
  selectedProductImage,
  setSelectedProductImage,
}: IProductHighlightCarousel): JSX.Element => {
  const selectedImageIndex = images.findIndex(
    (img) => img.id === selectedProductImage.id
  );

  const selectPrevImage = (currentIndex: number) =>
    setSelectedProductImage(images[currentIndex - 1]);

  const selectNextImage = (currentIndex: number) =>
    setSelectedProductImage(images[currentIndex + 1]);

  const selectImageWithListener = useCallback(
    (currentIndex: number) => setSelectedProductImage(images[currentIndex]),
    [images, setSelectedProductImage]
  );

  return (
    <CarouselProvider
      visibleSlides={1}
      totalSlides={images.length}
      currentSlide={selectedImageIndex}
      naturalSlideWidth={400}
      naturalSlideHeight={400}
      hasMasterSpinner={true}
      dragEnabled={isMobile}
    >
      <CarouselListener setCurrentSlide={selectImageWithListener} />

      <Box
        display={{ base: "flex", md: "none" }}
        position={"absolute"}
        zIndex={1}
        alignItems="center"
        h={0}
        top={"50%"}
        transform={"translateY(-50%)"}
        w={"full"}
        px={4}
      >
        <StyledButtonBack
          display={selectedImageIndex < 1 ? "none" : "flex"}
          justifyContent={"center"}
          alignItems={"center"}
          backgroundColor={"white"}
          rounded={"full"}
          w={"2rem"}
          h={"2rem"}
          onClick={() => selectPrevImage(selectedImageIndex)}
        >
          <LeftArrowIcon />
        </StyledButtonBack>
        <StyledButtonNext
          display={selectedImageIndex + 1 === images.length ? "none" : "flex"}
          justifyContent={"center"}
          alignItems={"center"}
          backgroundColor={"white"}
          rounded={"full"}
          w={"2rem"}
          h={"2rem"}
          marginLeft={"auto"}
          onClick={() => selectNextImage(selectedImageIndex)}
        >
          <RightArrowIcon />
        </StyledButtonNext>
      </Box>
      <Slider>
        {images.map((imageFile, index) => (
          <Slide key={imageFile.id} index={index}>
            <StyledImage
              display={{ base: "block", md: "none" }}
              objectFit="cover"
              objectPosition="center"
              hasMasterSpinner={true}
              alt={imageFile.file_name}
              src={imageFile.link.href}
            />
            <StyledImageWithZoom
              bgImageProps={{
                style: {
                  backgroundPosition: "center",
                  borderRadius: "0.375rem",
                },
              }}
              display={{ base: "none", md: "block" }}
              alt={imageFile.file_name}
              src={imageFile.link.href}
            />
          </Slide>
        ))}
      </Slider>
    </CarouselProvider>
  );
};

export default ProductHighlightCarousel;
