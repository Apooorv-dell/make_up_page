import {
  Flex,
  VStack,
  Heading,
  Text,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Input,
  Icon,
  Center,
} from "@chakra-ui/react";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <Center bg={"black"} borderBottom={".5px solid grey"}>
        <Flex
          flexWrap={"wrap"}
          width={"75vw"}
          gap={"3rem"}
          justifyContent={"space-around"}
          // bg={"black"}
          padding={"2rem"}
          py={"4rem"}
        >
          <VStack color="grey" width={"600px"}>
            <Heading fontSize={"25px"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              repudiandae.
            </Heading>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                color="gray.300"
                fontSize="1.2em"
              ></InputLeftElement>
              <Input placeholder="Subscribe" variant={"flushed"} />
              <InputRightElement>
                <Icon as={IoIosSend} />
              </InputRightElement>
            </InputGroup>
          </VStack>
          <VStack color={"grey"}>
            <Heading size={"md"}> Follow</Heading>
            <Text>FaceBook</Text>
            <Text>FaceBook</Text>
            <Text>FaceBook</Text>
          </VStack>
          <VStack color={"grey"}>
            <Heading size={"md"}> Follow</Heading>
            <Text>FaceBook</Text>
            <Text>FaceBook</Text>
            <Text>FaceBook</Text>
          </VStack>
        </Flex>
      </Center>
    </>
  );
};

export default Contact;
