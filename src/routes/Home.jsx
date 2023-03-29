import About from "../components/about/About";
import Consulting from "../components/consulting/Consulting";
import Curriculum from "../components/curriculum/Curriculum";
import Main from "../components/main/Main";
import Portfolio from "../components/portfolio/Portfolio";
import Special from "../components/special/Special";

export default function Home() {
  return (
    <>
      {/* 메인 슬라이드 */}

      <Main />

      <About />

      <Special />

      <Curriculum />

      <Portfolio />

      <Consulting />
    </>
  );
}
