import { css } from "@emotion/css";
import { Col, Image, Row, Space } from "antd";
import { useRouter } from "next/router";

const TopMenu: React.FC = () => {
  const router = useRouter();
  return (
    <>
      <Row justify="space-between">
        <Col>
          <a href="/">
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
          </a>
        </Col>
        <Col>
          <Space
            align="center"
            className={css`
              a {
                color: #000000;
                font-size: 15px;
                font-weight: 600;
              }
              a:hover {
                color: #457b9d;
              }
            `}
            direction="horizontal"
            size={[60, 0]}
            wrap
          >
            <a href="/projects">My Work</a>
            <a
              href="/contact"
              className={css`
                border-radius: 20px;
                background: #ffc107;
                display: flex;
                padding: 0 20px;
                justify-content: center;
                align-items: center;
                height: 40px;
                &:hover {
                  background: #ffca2c;
                  color: #fff !important;
                }
              `}
            >
              Say Hi!
            </a>
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default TopMenu;
