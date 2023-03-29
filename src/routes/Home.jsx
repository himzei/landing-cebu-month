import { Element } from "react-scroll";
import About from "../components/about/About";
import Consulting from "../components/consulting/Consulting";
import Curriculum from "../components/curriculum/Curriculum";
import Main from "../components/main/Main";
import Outline from "../components/outline/Outline";
import Portfolio from "../components/portfolio/Portfolio";
import Special from "../components/special/Special";

export default function Home() {
  return (
    <>
      {/* 메인 슬라이드 */}
      <Main />

      <div id="1">
        <Element name="test1" className="test1">
          <About />
        </Element>
      </div>

      <div id="2">
        <Element name="test2" className="test2">
          <Special />
        </Element>
      </div>

      <div id="3">
        <Element name="test3" className="test3">
          <Curriculum />
        </Element>
      </div>

      <div id="4">
        <Element name="test4" className="test4">
          <Portfolio />
        </Element>
      </div>

      <div id="5">
        <Element name="test5" className="test5">
          <Outline />
        </Element>
      </div>

      <div id="6">
        <Element name="test6" className="test6">
          <Consulting />
        </Element>
      </div>
    </>
  );
}
