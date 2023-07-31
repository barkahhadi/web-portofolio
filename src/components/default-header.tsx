import { Col, Image, Layout, Row, Space } from "antd";
import TopMenu from "./top-menu";
import { css } from "@emotion/css";

const { Header } = Layout;

const DefaultHeader: React.FC = () => {
  return (
    <Header
      className="header"
      style={{
        backgroundColor: "#F3F4F5",
        height: "auto",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="container" style={{ margin: "26px auto" }}>
        <TopMenu />
      </div>
    </Header>
  );
};

export default DefaultHeader;
