import { useColorModeValue, Text } from "@chakra-ui/react";

interface IPrice {
  price: string;
  currency: string;
}

const StrikePrice = ({ price, currency }: IPrice): JSX.Element => {
  return (
    <Text
      color={useColorModeValue("gray.500", "gray.200")}
      fontWeight={300}
      marginTop="15px"
      fontSize="lg"
      textDecoration="line-through"
      ml={3}
    >
      {price} {currency}
    </Text>
  );
};

export default StrikePrice;
