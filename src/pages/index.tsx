import type { NextPage } from "next";
import { Grid, Box, Text, Button, Image, Circle } from "@chakra-ui/react";

import NextLink from "next/link";

import type { Promotion } from "@moltin/sdk";
import { ProductResponseWithImage } from "../lib/types/product-types";

import PromotionBanner from "../components/promotion-banner/PromotionBanner";
import { fetchFeaturedPromotion } from "../components/promotion-banner/fetchFeaturedPromotion";

import FeaturedProducts from "../components/featured-products/FeaturedProducts";
import { fetchFeaturedProducts } from "../components/featured-products/fetchFeaturedProducts";

import { withStoreStaticProps } from "../lib/store-wrapper-ssg";
import Carousel from "../components/carousel/Carousel";
import { globalBaseWidth } from "../styles/theme";

const nodeId = process.env.NEXT_PUBLIC_DEMO_NODE_ID || "";
const promotionId = process.env.NEXT_PUBLIC_DEMO_PROMO_ID || "";

export interface IHome {
  promotion?: Promotion;
  featuredProducts?: ProductResponseWithImage[];
}

const categories = [
  {
    name: "clothing",
    id: "3e608783-b35b-4df0-a5c2-a4880af7fdc1",
    slug: "clothing",
    href: "/search/ep-swag/clothing",
    image: "/images/cat3.png",
  },
  {
    name: "accessories",
    id: "ee9d497a-b9be-4820-b434-6d6399e44aac",
    slug: "accessories",
    href: "/search/ep-swag/accessories",
    image: "/images/cat2.png",
  },
  {
    name: "lifestyle",
    id: "bf0a5bfd-f619-4561-b064-38174c3bfc6b",
    slug: "lifestyle",
    href: "/search/ep-swag/lifestyle",
    image: "/images/cat1.png",
  },
];

const carouselImages = [
  {
    image: "images/landing_5.png",
  },
  {
    image: "/images/landing_1.jpg",
  },
  {
    image: "images/landing_3.jpg",
    display: "none",
  },
  {
    image: "images/landing_4.jpg",
  },
];

// const Home: NextPage<IHome> = ({ promotion, featuredProducts }) => {
const Home: NextPage<IHome> = () => {
  return (
    <Box display="flex" justifyContent="center">
      <Box display="flex" flexDirection="column" maxWidth={globalBaseWidth}>
        {/* @ts-ignore */}
        <Carousel images={carouselImages} />

        <Grid
          templateColumns="repeat(4, 1fr)"
          background="#ECE5E1"
          padding="20px"
          justifyItems="center"
          margin={0}
        >
          <Text fontSize="3xl">choose your own path</Text>
          <Box display="flex" alignItems="center">
            <Circle
              size="30px"
              bg="#0033CC"
              color="white"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontSize="20px">1</Text>
            </Circle>
            <Text fontSize="md" fontWeight="semibold" ml={2}>
              click shop
            </Text>
          </Box>
          <Box display="flex" alignItems="center">
            <Circle
              size="30px"
              bg="#0033CC"
              color="white"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontSize="20px">2</Text>
            </Circle>
            <Text fontSize="md" fontWeight="semibold" ml={2}>
              pick your gifts
            </Text>
          </Box>
          <Box display="flex" alignItems="center">
            <Circle
              size="30px"
              bg="#0033CC"
              color="white"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontSize="20px">3</Text>
            </Circle>
            <Text fontSize="md" fontWeight="semibold" ml={2}>
              checkout with your code
            </Text>
          </Box>
        </Grid>

        <Grid templateColumns="repeat(4, 1fr)" background="#F5F5F5">
          {categories.map((category, index) => {
            return (
              <NextLink key={index} href={category.href}>
                <Box padding="15px" cursor="pointer">
                  <Image src={category.image} alt={category.name} />
                  <Text fontSize="md" fontWeight="semibold" align="center">
                    {category.name}
                  </Text>
                </Box>
              </NextLink>
            );
          })}
          <Box
            bgImage="/images/landing_2.jpg"
            bgPos="top"
            bgSize="cover"
            width="100%"
            display="flex"
            alignItems="flex-end"
            justifyContent="center"
            paddingBottom="40px"
          >
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
        </Grid>
      </Box>
    </Box>
  );
};

export const getStaticProps = withStoreStaticProps<IHome>(async () => {
  // Fetching static data for the home page
  const promotion = promotionId
    ? await fetchFeaturedPromotion(promotionId)
    : undefined;
  const featuredProducts = nodeId
    ? await fetchFeaturedProducts(nodeId)
    : undefined;

  return {
    props: {
      ...(promotion && { promotion }),
      ...(featuredProducts && { featuredProducts }),
    },
  };
});

export default Home;
