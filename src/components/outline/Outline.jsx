import { Grid, GridItem, HStack, Text, VStack } from "@chakra-ui/react";
import OutlineList from "./OutlineList";

export default function Outline() {
  return (
    <VStack w="full" alignItems="center" py="32">
      <VStack w={{ sm: "sm", lg: "7xl" }} spacing="8">
        <HStack fontSize={{ sm: "30", lg: "48" }}>
          <Text as="span">세부한달살기</Text>
          <Text as="span" color="yellow.600" fontWeight={900}>
            비용
          </Text>
        </HStack>
        <VStack w="full">
          <Grid
            color="white"
            bg="black"
            w="full"
            align="center"
            py="4"
            templateColumns={{ sm: "none", md: "1fr 3fr 1fr" }}
            fontSize="20"
            fontWeight={600}
          >
            <GridItem>
              <Text>구분</Text>
            </GridItem>
            <GridItem>
              <Text>내용</Text>
            </GridItem>
            <GridItem>
              <Text>비고</Text>
            </GridItem>
          </Grid>
          <OutlineList
            title="숙소"
            content="세부 시티 캐피톨 센트럴 호텔"
            etc="-"
          />
          <OutlineList
            title="인원"
            content="20팀 한정(초등학교 3학년 이상)"
            etc="-"
          />
          <OutlineList
            title="비용"
            content="자녀 1인 + 보호자 1인 = 550만원/4주"
            etc="-"
          />
          <OutlineList
            title="포함비용"
            content="수업, 교(보)재, 식비, 통학, 셔틀, 공항 픽드랍"
            etc="-"
          />
          <OutlineList
            title="불포함비용"
            content="항공비, 여행자 보험, 기타 생활비"
            etc="-"
          />
          <OutlineList
            title="별도비용"
            content="골프&성장 강화 레슨: 별도안내, 투어 액티비티: 각 10만원/1인, 선택수업(코딩): 20만원"
            etc="-"
          />
        </VStack>
      </VStack>
    </VStack>
  );
}
