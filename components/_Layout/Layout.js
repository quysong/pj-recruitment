// components/Layout.js
import Head from "next/head";

import Header from "./Header";

import "./assets/css/common.css";
import "./assets/css/main.css";

import navButtons from "../../config/buttons";
import Footer from "./Footer";

const Layout = props => {
  const appTitle = `> WHATABYTE`;

  return (
    <div className="Layout">
      <Head>
        <title>WHATABYTE</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous"></link>
      </Head>

      <Header appTitle={appTitle} />

      <div className="Content">{props.children}</div>
      
      <Footer></Footer>
    </div>
  );
};

export default Layout;
