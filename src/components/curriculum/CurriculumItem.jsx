import { Box, Image, Text, VStack } from "@chakra-ui/react";

export default function CurriculumItem({ imageUrl, title, content }) {
  return (
    <Box w={{ sm: "320px", lg: "400px" }} cursor="pointer" mx="auto">
      <VStack w="full" role="group" spacing="0" rounded="lg" overflow="hidden">
        <Box
          w="400px"
          h="225px"
          position="relative"
          transition="0.4s"
          overflow={"hidden"}
        >
          <Image
            w="full"
            h="full"
            objectFit={"cover"}
            transition="0.4s"
            _groupHover={{ transform: "scale(1.1)" }}
            src={imageUrl}
          />
          <Box
            position="absolute"
            top="0"
            left="0"
            w="full"
            h="full"
            bgGradient="linear(to-r, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2))"
          />
          <Text
            color="white"
            position="absolute"
            bottom="4"
            left="4"
            fontWeight={600}
            fontSize="32"
            transition="0.6s"
          >
            {title}
          </Text>
        </Box>
        <VStack
          w="400px"
          h="220px"
          bg="gray.100"
          p="4"
          alignItems={"flex-start"}
          spacing="4"
          transition="0.4s"
          _groupHover={{ bg: "gray.900", color: "white" }}
        >
          <Text>{content}</Text>
        </VStack>
      </VStack>
    </Box>
  );
}
