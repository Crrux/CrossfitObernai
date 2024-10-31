import { BrowserRouter, Route, Routes } from "react-router-dom";

import Popup from "./components/popup/popup";

import Header from "./layout/header/header";

import Home from "./pages/home/home";
import Class from "./pages/class/class";
import Planning from "./pages/planning/planning";
import Contact from "./pages/contact/contact";
import Events from "./pages/events/events";
import Error from "./pages/error/error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Popup />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="class" element={<Class />} />
          <Route path="planning" element={<Planning />} />
          <Route path="contact" element={<Contact />} />
          <Route path="events" element={<Events />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
