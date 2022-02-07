import * as React from "react";
import Layout from "../components/Layout";
import Hero from "../page-components/index/Hero";
import Features from "../page-components/index/Features";
import Nodestats from "../components/Statusbar/Nodestats";
import CTAdesktop from "../page-components/wallet/CTAdesktop";


const index = () => {
  return (
      <Layout>
        <Hero/>
          <Features/>
          <Nodestats/>
          <CTAdesktop/>
      </Layout>
  );
};

export default index;
