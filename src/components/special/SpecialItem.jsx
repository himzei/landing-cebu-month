import { Box, HStack, Text } from "@chakra-ui/react";
import { IoMdCheckboxOutline } from "react-icons/io";

export default function SpecialItem({ text }) {
  return (
    <Box
      w={{ sm: "360px", md: "2xl" }}
      bg="rgba(255, 255, 255, 0.05)"
      px="12"
      py="4"
      rounded="lg"
      role="group"
      transition="0.6s"
      _hover={{ bg: "black", transform: "scale(1.2)" }}
    >
      <HStack>
        <IoMdCheckboxOutline
          display="none"
          _groupHover={{ display: "block", color: "yellow.600" }}
          color="white"
          size="24"
        />{" "}
        <Text
          color="white"
          fontSize="20"
          _groupHover={{ color: "yellow.600" }}
          transition="0.6s"
        >
          {text}
        </Text>
      </HStack>
    </Box>
  );
}
