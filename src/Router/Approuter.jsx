import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homes from "../Components/Homes";
import Abouts from "../Components/Abouts";
import Main from "../Main/Main";
import AimScopePage from "../Components/AimScopePage/AimScopePage";
import GuidelinePage from "../Components/AuthorGuidelinePage/GuidelinePage";
import PeerPage from "../Components/PeerReviewPage/PeerPage";
import PublicationPage from "../Components/PublicationPage/PublicationPage";
import AbstractingPage from "../Components/AbstractingPage/AbstractingPAge";
import ArticlePage from "../Components/ArticleProcessPage/ArticlePage";
import PlagiarismPage from "../Components/PlagiarismPage/PlagiarismPage";
import MalPracticePage from "../Components/MalPracticePage/MalPracticePage";
import CorrectionPage from "../Components/CorrectionPage/CorrectionPage";
import PublicRightsPage from "../Components/PublicRightsPage/PublicRightsPage";
import ScrollToTop from "./ScrollToTop";
import EditorialPage from "../Components/EditorialPage/EditorialPage";
import IssuePage from "../Components/IssuePage/IssuePage";
import ContactPage from "../Components/ContactPage/ContactPage";
import CopyrightsPage from "../Components/CopyrightsPage/CopyrightsPage";

function Approuter() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Main />}>
            <Route path="/" element={<Homes />} />
            <Route path="/about" element={<Abouts />} />
            <Route path="/aim-and-scope" element={<AimScopePage />} />
            <Route path="/author-guidelines" element={<GuidelinePage />} />
            <Route path="/Peer-Review-Process" element={<PeerPage />} />
            <Route path="/Publication-ethics" element={<PublicationPage />} />
            <Route path="/abstracting-and-indexing" element={<AbstractingPage />} />
            <Route path="/article-processing" element={<ArticlePage />} />
            <Route path="/plagiarism" element={<PlagiarismPage />} />
            <Route path="/malpractice" element={<MalPracticePage />} />
            <Route path="/correction" element={<CorrectionPage />} />
            <Route path="/publication-policy" element={<PublicRightsPage />} />
            <Route path="/editorial-board" element={<EditorialPage />} />
            <Route path="/issues" element={<IssuePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/copyrights" element={<CopyrightsPage />} />
          </Route>
        </Routes> 
      </BrowserRouter>
    </>
  );
}

export default Approuter;
