import { Text, VStack } from "@chakra-ui/react";
import BackImage from "../../assets/jpg/special/1.jpg";
import SpecialItem from "./SpecialItem";

export default function Special() {
  return (
    <VStack
      justifyContent="center"
      backgroundImage={BackImage}
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundAttachment="fixed"
      w="full"
      h="800px"
      spacing={16}
    >
      <Text as="span" fontWeight={600} fontSize="48" color="white">
        아이원 세부한달살기는{" "}
        <Text as="span" color="yellow.600" fontWeight={700}>
          하지 않습니다!
        </Text>
      </Text>
      <VStack w="7xl">
        <SpecialItem text="다양한 교과목을 편성하여 한달살기동안 학습 공백이 없습니다." />
        <SpecialItem text="교과목 수업으로 자습시 문제 풀이만 도와주는 방식이 아닙니다." />
        <SpecialItem text="입시 전문 학원의 수업으로 모든 과목 강사진에 대한 우려가 없습니다." />
        <SpecialItem text="학습 내용에 충실한 활동 수업으로 지루할 틈이 없습니다." />
        <SpecialItem text="일상적인 대화만하는 비효율적인 1:1수업이 없습니다." />
        <SpecialItem text="학습의 이해 없이 무작정 외우고 보는 단순 담기식 학습이 없습니다." />
      </VStack>
    </VStack>
  );
}
