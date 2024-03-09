import { Grid, GridItem, Image, Box,Center } from "@chakra-ui/react";
import React from "react";

const Gallery = () => {
  return (
    <>
      <Center>
        <Grid
          gridTemplateColumns= {{sm: '1fr ', md:"1fr 1fr", lg:'1fr 1fr 1fr' }}

          width={'70%'}
          // width= '50%'
          // gridAutoFlow={"auto"}
          gridAutoFlow={"dense"}
          margin={"5rem"}
          gap={"1rem"}
        >
          <Image src="https://tejaswinimakeupartist.com/wp-content/uploads/2021/05/Haldi-Makeup-Pune-Mumbai-India-e1621758851999.jpeg" />
          <Image src="https://tejaswinimakeupartist.com/wp-content/uploads/2021/05/Haldi-Makeup-Pune-Mumbai-India-e1621758851999.jpeg" />
          <Image src="https://tejaswinimakeupartist.com/wp-content/uploads/2021/05/Haldi-Makeup-Pune-Mumbai-India-e1621758851999.jpeg" />
          <Image src="https://tejaswinimakeupartist.com/wp-content/uploads/2021/05/Haldi-Makeup-Pune-Mumbai-India-e1621758851999.jpeg" />
          <Image src="https://tejaswinimakeupartist.com/wp-content/uploads/2021/05/Haldi-Makeup-Pune-Mumbai-India-e1621758851999.jpeg" />
          <Image src="https://tejaswinimakeupartist.com/wp-content/uploads/2021/05/Haldi-Makeup-Pune-Mumbai-India-e1621758851999.jpeg" />
          <Image src="https://tejaswinimakeupartist.com/wp-content/uploads/2021/05/Haldi-Makeup-Pune-Mumbai-India-e1621758851999.jpeg" />
          <Image src="https://tejaswinimakeupartist.com/wp-content/uploads/2021/05/Haldi-Makeup-Pune-Mumbai-India-e1621758851999.jpeg" />
          <Image src="https://tejaswinimakeupartist.com/wp-content/uploads/2021/05/Haldi-Makeup-Pune-Mumbai-India-e1621758851999.jpeg" />
        </Grid>
      </Center>
            </>
  );
};

export default Gallery;
