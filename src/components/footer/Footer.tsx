import {
  Box,
  Container,
  HStack,
  Link,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";

import { globalBaseWidth } from "../../styles/theme";
import { InfoIcon, PhoneIcon } from "@chakra-ui/icons";
import GithubIcon from "../../../public/icons/github.svg";
import EpLogo from "../../../public/icons/ep-logo.svg";
import FbIcon from "../../../public/icons/facebook.svg";
import LinkedInIcon from "../../../public/icons/linkedin.svg";
import TwitterIcon from "../../../public/icons/twitter.svg";
import YoutubeIcon from "../../../public/icons/youtube.svg";

const Footer = (): JSX.Element => (
  <Box as="footer" borderTop="1px" borderColor="gray.200" bg="white">
    <Container
      as={Stack}
      maxW={globalBaseWidth}
      py={10}
      borderBottom="1px"
      borderColor="gray.200"
    >
      <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={8}>
        <Stack align="flex-start">
          <EpLogo width={120} height={40} />
        </Stack>
        <Stack align="flex-start">
          <Link href="/">Home</Link>
          {/* <Link href="/shipping">Shipping</Link> */}
          <Link href="/faq">FAQ</Link>
        </Stack>
        <Stack align="flex-start">
          {/* <Link href="/about">About</Link> */}
          <Link href="/terms">Terms</Link>
        </Stack>
        <Stack align="flex-start"></Stack>
        <HStack align="flex-start" justifyContent="flex-end">
          <Box>
            <Link
              href="https://github.com/elasticpath/d2c-reference-store"
              paddingRight="3rem"
              _hover={{
                color: "brand.primary",
              }}
              aria-label="Go to repository on github"
            >
              <GithubIcon width={25} height={25} />
            </Link>
          </Box>

          <Box>
            <Link
              href="https://ca.linkedin.com/company/elastic-path"
              paddingRight="3rem"
              _hover={{
                color: "brand.primary",
              }}
              aria-label="Go to Elasticpath LinkedIn page"
            >
              <LinkedInIcon width={25} height={25} />
            </Link>
          </Box>

          <Box>
            <Link
              href="https://www.facebook.com/elasticpath/"
              paddingRight="3rem"
              _hover={{
                color: "brand.primary",
              }}
              aria-label="Go to Elasticpath Facebook page"
            >
              <FbIcon width={25} height={25} />
            </Link>
          </Box>

          <Box>
            <Link
              href="https://twitter.com/elasticpath"
              paddingRight="3rem"
              _hover={{
                color: "brand.primary",
              }}
              aria-label="Go to Elasticpath Twitter page"
            >
              <TwitterIcon width={25} height={25} />
            </Link>
          </Box>

          <Box>
            <Link
              href="https://www.youtube.com/user/elasticpath"
              paddingRight="3rem"
              _hover={{
                color: "brand.primary",
              }}
              aria-label="Go to Elasticpath Youtube page"
            >
              <YoutubeIcon width={25} height={25} />
            </Link>
          </Box>
        </HStack>
      </SimpleGrid>
    </Container>
  </Box>
);

export default Footer;
