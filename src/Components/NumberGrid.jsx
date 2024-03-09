import {
  Center,
  Grid,
  Heading,
  Box,
  Divider,
  VStack,
  Text,
} from "@chakra-ui/react";

const NumberGrid = () => {
  const items = [
    { number: 3, title: "Years", tag: "Establised in 2018" },
    { number: 30, title: "Batches", tag: "Establised in 2018" },
    {
      number: 400,
      title: "Students",
      tag: "More than 400 students passed till date",
    },
    {
      number: 3000,
      title: "Hours",
      tag: "3000+ hrs spent by Tejaswini on students",
    },
  ];

  return (
    <>
      <Center>
        <Grid
          gridTemplateColumns={{
            sm: "1fr ",
            md: "1fr 1fr",
            lg: "1fr 1fr 1fr 1fr",
          }}
        >
          {items.map((i) => (
            <VStack padding={"1rem"} alignSelf={"center"}>
              <Divider
                width={"40px"}
                background={"black"}
                height={"3px"}
                pos={"relative"}
                left={"26"}
                bottom={"-120"}
              />
              <Heading
                color={"#dbb570"}
                fontSize={"128px"}
                fontFamily={"HenriDidot,serif"}
              >
                {i.number}
              </Heading>

              <Heading as={"h5"} size={"lg"}>
{i.title}
              </Heading>

              <Text>{i.tag}</Text>
            </VStack>
          ))}
        </Grid>
      </Center>
    </>
  );
};

export default NumberGrid;
