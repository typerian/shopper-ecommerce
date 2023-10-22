import { type AppType } from "next/app";

import { api } from "@/utils/api";

import "@/styles/globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <main>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
};

export default api.withTRPC(MyApp);
