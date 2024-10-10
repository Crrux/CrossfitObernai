import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layout/header/header";
import Home from "./pages/home/home";
import Planning from "./pages/planning/planning";
import Error from "./pages/error/error";
import Contact from "./pages/contact/contact";
import Events from "./pages/events/events";
import Class from "./pages/class/class";
import PopupPC from "./components/popup_pc/popup_pc";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="class" element={<Class />} />
          <Route path="planning" element={<Planning />} />
          <Route path="contact" element={<Contact />} />
          <Route path="events" element={<Events />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <PopupPC />
      </BrowserRouter>
    </>
  );
}

export default App;
