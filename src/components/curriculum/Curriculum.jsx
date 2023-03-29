import { Box, Grid, HStack, Text, VStack } from "@chakra-ui/react";
import CurriculumItem from "./CurriculumItem";
import Math from "../../assets/jpg/curriculum/math.jpg";
import Activity from "../../assets/jpg/curriculum/activity.jpg";
import English from "../../assets/jpg/curriculum/english.jpg";
import Science from "../../assets/jpg/curriculum/science.jpg";
import Voluntter from "../../assets/jpg/curriculum/volunteer.jpg";
import Coding from "../../assets/jpg/curriculum/coding.jpg";

export default function Curriculum() {
  return (
    <HStack
      w="full"
      justifyContent={"center"}
      py="32"
      bgAttachment={"fixed"}
      position="relative"
      bgImage={
        "url('https://images.unsplash.com/photo-1676412952691-5e4a229485a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80')"
      }
      bgSize="cover"
      bgPosition="center"
    >
      <Box
        position="absolute"
        w="full"
        h="full"
        top="0"
        left="0"
        bgGradient={"linear(to-r, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.4))"}
      />
      <VStack w="full" alignItems="center" px={4} spacing="16" zIndex={9}>
        <VStack alignItems="center" spacing="0" w="full">
          <Text color="white" fontSize={20} px="4" align="center">
            세부한달살기 커리큘럼을 알려드립니다.
          </Text>
          <HStack fontSize={{ sm: "36", lg: "48" }}>
            <Text as="span" fontWeight={900} color="white">
              커리큘럼
            </Text>
          </HStack>
        </VStack>
        <Grid
          w={{ sm: "sm", md: "4xl", lg: "7xl" }}
          templateColumns={{
            sm: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          rowGap="10"
        >
          <CurriculumItem
            title="영어"
            content="아동 문학게의 노벨상이라 불리는 뉴베리 수상 작품드을 기본 교재로 언어 원리를 유기적으로 습득하게 됩니다. 수업 시간 중 Literary Elements와 Oral & Written Summary, Discussion, Presentation, Essay, Q&A 활동을 통해 문학 작품에서 얻게 되는 이해력, 표현력을 높이고 학업 능력까지 향상하게 됩니다. 1:1 수업에서는 기대할 수 없는 최대 8명의 학생간의 상호 작용을 통해 시너지 효과를 얻게 됩니다."
            imageUrl={English}
          />
          <CurriculumItem
            title="활동영어"
            content="아이들이 쉽게 이해하고 준비할 수 있는 뮤지컬, 역할극, 합창 등 액티비티를 선정하여 선생님들과 함께 준비하게 되며, 작품을 통해 영어를 익히고 성취감을 얻들 수 있도록 하였습니다. 또한 공연을 통해 학생들이 자신감을 키우게 됩니다."
            imageUrl={Activity}
          />
          <CurriculumItem
            title="수학"
            content="올림피아드와 SSAT, PSAT 등 수학 문제들로 기본 개념 이해, 문제 풀이 방법 등을 영어로 학습하게 됩니다. 생소할 수 있는 수학 용어들과 영어권 국가의 수학 접근 방법을 습득하여 과목에 더욱 깊이 있게 접근하게 됩니다. 수업 중 다양한 액티비티를 통해 어렵기만 한 수학에 보다 재밌게 접근하게 되며, 90분 간 친구들과 머리를 맞대어 협력하고 경쟁하는 과정을 통해 체득형 수학을 경헙합니다. "
            times="추가신청"
            imageUrl={Math}
          />
          <CurriculumItem
            title="과학"
            content="과학은 개념을 이해하기가 어렵다 보니 흥미를 잃는 경우가 많이 있습니다. 백마디 말보다 직접 경험하는 것이 개념을 이해하는데 가장 효과적입니다. 이론과 개념을 릭히는 실험 활동을 통해 이해도를 높일 뿐 아니라 기반을 다지게 됩니다. 문제만 풀고 답하는 방식이 아닌 개념 학습과 실험등을 통해 과학 지식을 습득하게 되고, 전체 학습 과정을 통해 과학적 사고 방식을 익힐 수 있도록 구성되어 있습니다. "
            imageUrl={Science}
          />
          <CurriculumItem
            title="코딩"
            content="영국의 교육용 솔루션 제공첩체인 카노가 마이크로소프트와 협력해 실제 윈도우 체계의 조립식 DIY 컴퓨터 키트를 개발하였습니다. 90분간 영어로 컴퓨터 키트 조립 방법을 배우며 컴퓨터 하드웨어의 기본 작동 원리를 익히게 됩니다. 완성된 카노 컴퓨터로 게임을 만들고 변경하는 과정을 통해 기초적인 코딩 작업을 체험하며 소프트웨어에 대한 이해도를 높이게 됩니다. "
            imageUrl={Coding}
          />
          <CurriculumItem
            title="봉사"
            content="영국 환경 찬체로 등산로와 야생 환경을 보호하여 사람과 자연이 공존하도록 교육하고 활동합니다. 산책로와 야생에 버려진 일회용품 쓰레기를 줄이고, 여가 활동(등산, 산악자전건 등)을 통해 사람과 자연을 건강하게 연결하는데 목적을 두고 있습니다. Trash Free Trails Cebu는 환경 보호에 뜻을 함께하는 지역 환경청, 자전거 동호인들과 다양한 행사를 진행하고 있으며, 자연 환경 보호 활동에 동참하게 됩니다."
            imageUrl={Voluntter}
          />
        </Grid>
      </VStack>
    </HStack>
  );
}
