import { Flex, Box, Select, Text } from "@chakra-ui/react";
import { ProductResponse } from "@moltin/sdk";

interface IProductComponentsProps {
  components: ProductResponse[];
  product: ProductResponse;
}

const ProductComponents = ({
  components,
  product,
}: IProductComponentsProps): JSX.Element => {
  return (
    <Flex direction="row" flexWrap="wrap">
      {Object.keys(product.attributes.components).map((cmpName) => {
        const allOptions = product.attributes.components[cmpName].options;
        const bundle_configuration = product.meta.bundle_configuration;
        return (
          <Box key={cmpName} m="2">
            <Text mb="2">{cmpName}</Text>
            {bundle_configuration ? (
              <Box borderWidth="1px" borderRadius="lg" p="6" minW={350}>
                <Select
                  value={JSON.stringify(
                    bundle_configuration.selected_options[cmpName]
                  )}
                >
                  {allOptions.map(({ id, quantity }) => {
                    const optionData = components.find(
                      (item) => item.id === id
                    )!;
                    return (
                      <option
                        key={id}
                        value={JSON.stringify({ [id]: quantity })}
                        label={`${optionData.attributes.name} (Quantity: ${quantity}) ${optionData.attributes.sku}
                        `}
                      />
                    );
                  })}
                </Select>
              </Box>
            ) : null}
          </Box>
        );
      })}
    </Flex>
  );
};

export default ProductComponents;
