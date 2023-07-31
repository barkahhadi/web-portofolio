import React from "react";
import { Col, Layout, Row, Space } from "antd";
import enUS from "antd/lib/locale/en_US";
import Services from "@/components/services";
import MainHeader from "@/components/main-header";
import RecentProjects from "@/components/recent-projects";
import Clients from "@/components/clients";
import { css } from "@emotion/css";
import Footer from "@/components/footer";

const { Content } = Layout;

const App: React.FC = () => {
  return (
    <Layout>
      <MainHeader />
      <Content
        style={{
          paddingTop: "55px",
          background: "#FFF",
        }}
      >
        <Services />
        <RecentProjects />
        <Clients />
      </Content>
      <Footer />
    </Layout>
  );
};

export default App;
