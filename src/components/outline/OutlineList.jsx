import { Grid, GridItem, Text } from "@chakra-ui/react";

export default function OutlineList({
  bgColor = "white",
  textColor = "black",
  title,
  content,
  etc,
}) {
  return (
    <Grid
      color={textColor}
      bg={bgColor}
      w="full"
      align="center"
      py="4"
      templateColumns={{ sm: "repeat(1, 1fr)", md: "1fr 3fr 1fr" }}
      fontSize="20"
      borderBottom="1px"
      borderLeft="1px"
      borderRight="1px"
      borderColor="gray.100"
      role="group"
      _hover={{ background: "red.500", color: "white" }}
    >
      <GridItem>
        <Text fontWeight={900}>{title}</Text>
      </GridItem>
      <GridItem>
        <Text px="4">{content}</Text>
      </GridItem>
      <GridItem>
        <Text>{etc}</Text>
      </GridItem>
    </Grid>
  );
}
