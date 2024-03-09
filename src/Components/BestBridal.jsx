import {
  Flex,
  Image,
  Text,
  Heading,
  Center,
  Container,
  Divider,
  Button,
} from "@chakra-ui/react";

const BestBridal = () => {
  return (
    <>
      <Center bg="#cfcfcf">
        <Flex
          justifyContent={"space-around"}
          width={"70%"}
          flexWrap={"wrap"}
          padding={"1rem"}
        >
          <Image  src="https://tejaswinimakeupartist.com/wp-content/uploads/2021/05/North-Indian-Bridal-Makeup-at-Pune-Mumbai-e1621758901663.jpeg"  mr={'2rem'}/>
          <Container color="grey">
            <Text p={".5rem"}>
              Looking for a bridal makeup artist in Pune, Mumbai (India)?
            </Text>
            <Heading fontSize={"3rem"} color={"black"} p={".5rem"}>
              {" "}
              INDIAN BRIDAL MAKEUP ARTIST{" "}
            </Heading>
            <Text ml={"3rem"} color={'black'} fontSize={'20px'}>
              natural and classy bridal makeup for all wedding functions
            </Text>
            <Divider width={'100px'} background={'black'} height={'2px'} my={'1rem'} />
            <Text>
              Are you looking for a Best Bridal Makeup Artist in Pune or Mumbai
              or anywhere in India for your wedding functions like Engagement,
              Vidhi, Reception, Haldi, Cocktail party or any other? Do you want
              every look to be different than others but still want to look the
              best version of you? Tejaswini is a Top Makeup Artist in India
              with 10 years of experience. She is most sought-after destination
              best wedding/Bridal Makeup artist in India.
            </Text>
            <Button
              mt={"2rem"}
              px={"3.5rem"}
              py={"1.5rem"}
              variant="outline"
              fontWeight={"light"}
              border={".5px solid black"}
              borderRadius={"none"}
            >
              explore
            </Button>
          </Container>
        </Flex>
      </Center>
    </>
  );
};

export default BestBridal;
