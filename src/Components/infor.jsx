import { Flex, Hide, Text, Icon, HStack, Divider } from "@chakra-ui/react";

import { IoCallOutline, IoLocationOutline } from "react-icons/io5";

const Infor = () => {
  return (
    <>
      <Hide below="lg">
        <Flex
          display={"flex"}
          px={"1rem"}
          py={".2rem"}
          justifyContent={"space-between"}
          width={"100vw"}
          bg={"black"}
          color={"white"}
          fontSize={"12px"}
        >
          <HStack>
            <Icon as={IoLocationOutline} />
            <Text>Banner road Banner Pune</Text>
            <Divider
              orientation="vertical"
              color={"black"}
              height={"1.5rem"}
              mx={".5rem"}
            />
            <Icon as={IoCallOutline}></Icon>
            <Text> +91222222222</Text>
          </HStack>
          <HStack>
            <Text>Follow us</Text>
            <Divider
              orientation="vertical"
              color={"black"}
              height={"1.5rem"}
              mx={".5rem"}
            />
            <Text> FB. youtube. Insta</Text>
          </HStack>
        </Flex>
      </Hide>
    </>
  );
};

export default Infor;


