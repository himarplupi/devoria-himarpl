import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import StrukturOrganisasi from "./pages/StrukturOrganisasi";
import Contacts from "./pages/Contacts";
import Logo from "./pages/Logo";
import Departments from "./pages/Departments";
import PageNews from "./pages/Berita";
import { DepartmentDetails } from "./pages/DepartmentDetails";
import PageNotFound from "./pages/404";
import EmailForm from "./pages/EmailForm";
import { AnimatePresence } from "motion/react";
import Awarding from "./pages/Awarding";
function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="struktur" element={<StrukturOrganisasi />} />
          <Route path="contact" element={<Contacts />} />
          <Route path="berita" element={<PageNews />} />
          <Route path="logo" element={<Logo />} />
          <Route path="awarding" element={<Awarding />} />
          <Route path="be" element={<Departments />} />
          <Route path="dp" element={<Departments />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/be/:slug" element={<DepartmentDetails />}></Route>
          <Route path="/dp/:slug" element={<DepartmentDetails />}></Route>
        </Route>
        <Route path="/contact/submit" element={<EmailForm />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
