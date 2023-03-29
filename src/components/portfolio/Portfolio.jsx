import { Grid, GridItem, Text, VStack } from "@chakra-ui/react";
import PortfolioItem from "./PortfolioItem";
import Activity1 from "../../assets/jpg/portfolio/activity1.jpg";
import Activity2 from "../../assets/jpg/portfolio/activity2.jpg";
import Activity3 from "../../assets/jpg/portfolio/activity3.jpg";
import Activity4 from "../../assets/jpg/portfolio/activity4.jpg";

import Book1 from "../../assets/jpg/portfolio/book1.jpg";
import Book2 from "../../assets/jpg/portfolio/book2.jpg";
import Book3 from "../../assets/jpg/portfolio/book3.jpg";
import Book4 from "../../assets/jpg/portfolio/book4.jpg";

import Foods1 from "../../assets/jpg/portfolio/foods1.jpg";
import Foods2 from "../../assets/jpg/portfolio/foods2.jpg";
import Foods3 from "../../assets/jpg/portfolio/foods3.jpg";

export default function Portfolio() {
  return (
    <VStack w="full" alignItems="center" py="16" spacing={0}>
      {/* 액티비티 */}
      <Grid
        w="7xl"
        templateColumns={{ sm: "repeat(1, 1fr)", md: "2fr 5fr" }}
        px="4"
      >
        <GridItem>
          <VStack
            alignItems="flex-start"
            spacing={2}
            py="4"
            position="sticky"
            top="20"
          >
            <Text fontWeight={900} fontSize={{ sm: "36", lg: "48" }}>
              액티비티
            </Text>
            <Text fontSize="20" px="1">
              주말 액티비티
            </Text>
          </VStack>
        </GridItem>
        <GridItem>
          <PortfolioItem
            imgUrl={Activity1}
            titleText="아일랜드 호핑"
            contentText="섬과 섬을 잇는 짧은 여행을 반복하며 대양을 건너는 것을 아일랜드 호핑(Island Hopping)"
          />
          <PortfolioItem
            imgUrl={Activity2}
            titleText="사파리 투어"
            contentText="-"
          />
          <PortfolioItem
            imgUrl={Activity3}
            titleText="고래상어"
            contentText="-"
          />
          <PortfolioItem
            imgUrl={Activity4}
            titleText="봉사활동"
            contentText="-"
          />
        </GridItem>
      </Grid>

      {/* 교재 / 부교재 */}
      <Grid
        w="7xl"
        templateColumns={{ sm: "repeat(1, 1fr)", md: "2fr 5fr" }}
        px="4"
      >
        <GridItem>
          <VStack
            alignItems="flex-start"
            spacing={2}
            py="4"
            position="sticky"
            top="20"
          >
            <Text fontWeight={900} fontSize={{ sm: "36", lg: "48" }}>
              학습 교재/교보재
            </Text>
            <Text fontSize="20" px="1">
              뉴베리 문학상 수상작품, 교보재 및 자체 개발 교재 활용
            </Text>
          </VStack>
        </GridItem>
        <GridItem>
          <PortfolioItem
            imgUrl={Book1}
            titleText="영어"
            contentText="뉴베리 문학상 수상 작품 내용을 기반으로 자체 제작한 교재 활용"
          />
          <PortfolioItem
            imgUrl={Book2}
            titleText="활동 영어"
            contentText="실제 공연할 뮤지컬, 연극, 대폰, 악보 등 활용"
          />
          <PortfolioItem
            imgUrl={Book3}
            titleText="수학"
            contentText="영어권 국가 교과 편성에 맞춘 학년별 학습이 가능한 학교 교재 활용"
          />
          <PortfolioItem
            imgUrl={Book4}
            titleText="코딩"
            contentText="흥미와 실제 체험이 가능한 교보재 및 코딩 학습 장비 및 자료 활용"
          />
        </GridItem>
      </Grid>

      {/* 식사 */}
      <Grid
        w="7xl"
        templateColumns={{ sm: "repeat(1, 1fr)", md: "2fr 5fr" }}
        px="4"
      >
        <GridItem>
          <VStack
            alignItems="flex-start"
            spacing={2}
            py="4"
            position="sticky"
            top="20"
          >
            <Text fontWeight={900} fontSize={{ sm: "36", lg: "48" }}>
              식사
            </Text>
            <Text fontSize="20" fontWeight={600}>
              1일 3식 제공!
            </Text>
            <Text color="gray.700" fontSize="20">
              건강한 식재료를 얻고 맛있는 음식을 만드는 것도 교육과 가이
              전문적인 일입니다. 맛있고 건강한 식사를 제공하고자 전문가와
              협력합니다. 주중 1일 3식이 제공되고 주말은 일정에 따라 변경이 될
              수 있습니디.
            </Text>
          </VStack>
        </GridItem>
        <GridItem>
          <PortfolioItem imgUrl={Foods1} titleText="" contentText="" />
          <PortfolioItem imgUrl={Foods2} titleText="" contentText="" />
          <PortfolioItem imgUrl={Foods3} titleText="" contentText="" />
        </GridItem>
      </Grid>
    </VStack>
  );
}
