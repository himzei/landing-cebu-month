import { Box, HStack, Image, Text, VStack, keyframes } from "@chakra-ui/react";
import { GiCheckMark } from "react-icons/gi";
import { motion } from "framer-motion";

const animationKeyframes = keyframes`
  0% { transform: scale(1); opacity: 0; }
  50% { transform: scale(1.5); opacity: 0.2; }
  100% { transform: scale(2); opacity: 0; }
`;

const animation = `${animationKeyframes} 2s ease-in-out infinite`;

export default function PortfolioItem({ titleText, contentText, imgUrl }) {
  return (
    <HStack h="480px" justifyContent="flex-end">
      <Box
        w="20"
        borderLeft="1px"
        h="full"
        borderColor="yellow.600"
        borderStyle="dashed"
        position="relative"
      >
        <VStack
          bg="yellow.600"
          w="10"
          h="10"
          position="absolute"
          rounded="full"
          left="-5"
          top="160px"
          align="center"
          justifyContent="center"
        >
          <GiCheckMark color="white" />
          <Box
            as={motion.div}
            position="absolute"
            bg="yellow.600"
            w="10"
            h="10"
            top="-2"
            rounded="full"
            animation={animation}
            transition="0.2s linear"
          />
        </VStack>
      </Box>
      <VStack alignItems="flex-start" spacing={8}>
        <Box w="600px" h="320px" overflow="hidden">
          <Image src={imgUrl} />
        </Box>
        <VStack alignItems="flex-start" spacing="0" h="100px">
          <Text fontWeight={600} fontSize="24">
            {titleText}
          </Text>
          <Text>{contentText}</Text>
        </VStack>
      </VStack>
    </HStack>
  );
}
