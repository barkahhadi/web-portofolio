import React from "react";
import { Layout } from "antd";
import DefaultHeader from "@/components/default-header";
import ProjectList from "@/components/project-list";
import Footer from "@/components/footer";

const { Content } = Layout;

const ProjectsPage: React.FC = () => {
  return (
    <Layout>
      <DefaultHeader />
      <Content
        style={{
          paddingTop: "55px",
          background: "#FFF",
        }}
      >
        <ProjectList />
      </Content>
      <Footer />
    </Layout>
  );
};

export default ProjectsPage;
