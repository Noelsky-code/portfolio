import Header from "@Organisms/Header";
import AboutMeTemplate from "@Templates/AboutMe";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { LOGO, PHONE_NUMBER, EMAIL } from "@Constant/.";
import CareerTemplate from "@Templates/Career";
import ExprienceTemplate from "@Templates/Exprience";
import IntroductionTemplate from "@Templates/Introduction";
import LearnedTemplate from "@Templates/Learned";
import ProjectTemplate from "@Templates/Project";
import SkillSetTemplate from "@Templates/SkillSet";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import MainPage from "./Components/Page";
import "./App.css";
import ScrollToTop from "./Components/ScrollToTop";

const App = () => {
  const { pathname } = useLocation();

  const pageName = pathname.replace("/portfolio/", "").replaceAll("/", "");
  // eslint-disable-next-line no-underscore-dangle
  const _pageName = pageName || "AboutMe";
  const basicPath = "";

  return (
    <TransitionGroup className="transition-group">
      <CSSTransition key={pathname} className="pageSlider" timeout={700}>
        <MainPage pageName={_pageName}>
          <Header logoText={LOGO} infoText={`${PHONE_NUMBER}/${EMAIL}`} pageName={_pageName} />
          <ScrollToTop />
          <Routes location={pathname}>
            <Route path={`${basicPath}/AboutMe`} element={<AboutMeTemplate className="pageSlider" pageName={_pageName} />} />
            <Route path={`${basicPath}/SkillSet`} element={<SkillSetTemplate pageName={_pageName} />} />
            <Route path={`${basicPath}/Career`} element={<CareerTemplate pageName={_pageName} />} />
            <Route path={`${basicPath}/Project`} element={<ProjectTemplate pageName={_pageName} />} />
            <Route path={`${basicPath}/Exprience`} element={<ExprienceTemplate pageName={_pageName} />} />
            <Route path={`${basicPath}/Learned`} element={<LearnedTemplate pageName={_pageName} />} />
            <Route path={`${basicPath}/Introduction`} element={<IntroductionTemplate />} />
            <Route path="*" element={<Navigate replace to={`${basicPath}/AboutMe`} />} />
          </Routes>
        </MainPage>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default App;
