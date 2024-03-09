import { Image, Flex, Text, Center,Grid } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <>
      <Center>
          <Flex bg={'black'}  padding={'2rem'} justifyContent={'space-between'} width={'100vw'} flexWrap={'wrap'} >
            <Image  src="https://tejaswinimakeupartist.com/wp-content/uploads/2021/05/Tejaswini-White-Logo.png" />
            <Grid color={'white'}   gridTemplateColumns={{sm:'1fr',md:'1fr 1fr',lg:'1fr 1fr'}}   alignSelf={'center'} gap={'1.5rem'}>
              <Text>Home</Text>
              <Text>About</Text>
            </Grid>
          </Flex>
      </Center>
    </>
  );
};

export default Footer;
