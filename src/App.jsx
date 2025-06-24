import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import { StrukturOrganisasi } from "./pages/StrukturOrganisasi";
import { Contacts } from "./pages/Contacts";
import Dedication from "./pages/Dedications";
import Logo from "./pages/Logo";
import Departments from "./pages/Departments";
import Berita from "./pages/Berita";
import { DepartmentDetails } from "./pages/DepartmentDetails";
import PageNotFound from "./pages/404";
import EmailForm from "./pages/EmailForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="struktur" element={<StrukturOrganisasi />} />
        <Route path="contact" element={<Contacts />} />
        <Route path="dedication" element={<Dedication />} />
        <Route path="berita" element={<Berita />} />
        <Route path="logo" element={<Logo />} />
        {/* <Route path="be" element={<Departments />} />
        <Route path="dp" element={<Departments />} /> */}
        <Route path="*" element={<PageNotFound />} />
      </Route>
      <Route path="/contact/submit" element={<EmailForm />} />
      {/* <Route path="/be/:slug" element={<DepartmentDetails />}></Route>
      <Route path="/dp/:slug" element={<DepartmentDetails />}></Route> */}
    </Routes>
  );
}

export default App;
