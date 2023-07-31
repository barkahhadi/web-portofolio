import { css } from "@emotion/css";
import { Col, Layout, Row, Space } from "antd";
import {
  LinkedinOutlined,
  GithubOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

const Footer: React.FC = () => {
  return (
    <Layout.Footer style={{ background: "#ffffff", position: "relative" }}>
      <div
        className={css`
          width: 100%;
          position: absolute;
          right: 0;
          left: 0;
          top: 0;
          z-index: 30;
          background: url(/images/footer.svg);
          height: 420px;
          padding-top: 210px;
          background-size: cover;
        `}
      >
        <div className="container">
          <Row justify="center">
            <Col lg={4}></Col>
          </Row>
          <Row justify="center">
            <Col lg={12} style={{ textAlign: "center" }}>
              <Space direction="vertical" align="center" size={30}>
                <img
                  src="/images/app-logo/logo.svg"
                  alt="logo"
                  className={css`
                    width: 60px;
                    height: 60px;
                    vertical-align: middle;
                    @media (max-width: 768px) {
                      width: 40px;
                      height: 40px;
                    }
                  `}
                />
                <Space
                  size={20}
                  className={css`
                    a {
                      color: #607d8b;
                      font-size: 30px;
                    }
                    a:hover {
                      color: #000000;
                    }
                  `}
                >
                  <a
                    href="https://www.linkedin.com/in/barkah-hadi-82303678"
                    target="_blank"
                  >
                    <LinkedinOutlined />
                  </a>
                  <a href="https://github.com/barkahhadi" target="_blank">
                    <GithubOutlined />
                  </a>
                  <a href="https://www.instagram.com/acaah/" target="_blank">
                    <InstagramOutlined />
                  </a>
                </Space>
                <p style={{ textAlign: "center" }}>
                  Designed and coded by Barkah @ 2023.
                </p>
              </Space>
            </Col>
          </Row>
        </div>
      </div>
    </Layout.Footer>
  );
};

export default Footer;
