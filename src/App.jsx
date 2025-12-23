import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { VideoPage } from "./pages/VideoPage";
import { PageNotFound } from "./pages/PageNotFound";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/video" element={<VideoPage></VideoPage>}></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </>
  );
}

export default App;
