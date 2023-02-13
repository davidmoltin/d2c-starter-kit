import { withStoreStaticProps } from "../lib/store-wrapper-ssg";
import { Box, Text } from "@chakra-ui/react";
import { globalBaseWidth } from "../styles/theme";

const faq = [
  {
    question: "Does EP Swag ship to my country?",
    answer: "EP Swag currently ships to Canada, the USA, and the UK only.",
  },

  {
    question: "Do I have to pay for shipping?",
    answer: "Free shipping is included with all orders.",
  },

  {
    question: "How do I pay for items?",
    answer:
      "Items can only be purchased with discount or coupon codes. Reach out to the Enablement Team to learn how to earn coupon codes!",
  },

  {
    question:
      "I am a new employee. How do I pay for my New Hire Welcome Bundle?",
    answer:
      "You will receive a 100% discount code that can be used to purchase your bundle free of charge. The coupon code is capped at $100, so if your total exceeds that amount, you will be required to pay the remaining amount.",
  },

  {
    question: "Can I purchase a bundle if I am not a new employee?",
    answer: "Only new employees can purchase a bundle.",
  },

  {
    question:
      "What if I am a new employee and I don't want to purchase a bundle?",
    answer:
      "If you do not want a bundle, proceed with the single item you'd like to checkout.",
  },

  {
    question: "When will my order be delivered?",
    answer:
      "Estimated delivery time is calculated per order and can range between 5-30 business days. After placing your order, an estimated delivery time will be displayed.",
  },

  {
    question: "How do I change or cancel my order?",
    answer:
      "Once an order has been submitted, you cannot cancel or change your order.",
  },
];

const FAQ = () => {
  return (
    <Box maxWidth={globalBaseWidth} margin="auto" padding={8}>
      <Text fontSize="3xl">Frequently Asked Questions</Text>
      <br />
      <br />
      {faq.map((item, index) => (
        <Box key={index}>
          <Text fontWeight="bold">{item.question}</Text>
          <Text fontWeight="thin">{item.answer}</Text>
          <br />
        </Box>
      ))}
    </Box>
  );
};

export default FAQ;

export const getServerSideProps = withStoreStaticProps();
