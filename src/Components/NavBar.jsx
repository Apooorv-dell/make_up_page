import { Flex, Image, Text, Icon, Stack, Grid } from "@chakra-ui/react";
import { IoSearchOutline } from "react-icons/io5";

const NavBar = () => {
  return (
    <>
      <Grid
        width={"100vw"}
        bg="black"
        padding={"2rem"}
        justifyContent={"space-between"}
        align={"center"}
        gridTemplateColumns={"1fr  1fr"}
      >
    <Image  src="https://cdn-cljej.nitrocdn.com/CGDBltJrxvmtUCdzLpUWvJUcUUTmRiyV/assets/static/optimized/rev-60a5a06/wp-content/uploads/2021/05/White_270x50.png" />
       <Stack color={"white"} direction={"row"} spacing={"5"}  gridColumn={'3 /4'} >
          <Text>Home</Text>
          <Text>About</Text>
          <Text>Services</Text>
          <Text>Courses</Text>
          <Text>Portfolio</Text>
          <Text>Blog</Text>
          <Text>Conta ct us </Text>
          <Icon mt={"3px"} as={IoSearchOutline}></Icon>
        </Stack>
      </Grid>
    </>
  );
};

export default NavBar;
