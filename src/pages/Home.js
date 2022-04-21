import Footer from "../components/Footer";
// import Hello from "../components/Hello";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Global from "../components/Global";
import Province from "../components/Province";
import CovidForm from "../components/CovidForm";
import data from "../utils/constants/provinces";
import { useState } from "react";

function Main() {
  const [provincesData, setProvinceData] = useState(data.provinces);

  return (
    <main>
      <Hero />
      <Global />
      <Province
        provincesData={provincesData}
        setProvinceData={setProvinceData}
      />
      <CovidForm
        provincesData={provincesData}
        setProvinceData={setProvinceData}
      />
    </main>
  );
}

function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
