import { Col, Image, Layout, Row, Space } from "antd";
import TopMenu from "./top-menu";
import { css } from "@emotion/css";

const { Header } = Layout;

const MainHeader: React.FC = () => {
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
      <div className="container" style={{ marginTop: 26, padding: 0 }}>
        <TopMenu />
      </div>
      <div
        className={css`
          position: relative;
          height: 470px;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          @media (max-width: 770px) {
            height: 500px;
          }
        `}
      >
        <Row>
          <Col xl={12} lg={16} md={18} sm={24}>
            <Space
              direction="vertical"
              className={css`
                margin-top: 82px;
                @media (max-width: 567px) {
                  text-align: center;
                }
              `}
            >
              <h1
                className={css`
                  color: #607d8b;
                  font-family: Inter;
                  font-size: 42px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: normal;
                  @media (max-width: 567px) {
                    font-size: 28px;
                  }
                `}
              >
                Hi, I’m Barkah
              </h1>
              <h2
                className={css`
                  font-size: 42px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: normal;
                  @media (max-width: 567px) {
                    font-size: 30px;
                  }
                  @media (max-width: 440px) {
                    font-size: 24px;
                  }
                `}
              >
                <span
                  className={css`
                    color: #457b9d;
                  `}
                >
                  a
                </span>
                &nbsp;
                <span
                  className={css`
                    color: #f44336;
                    font-weight: 700;
                  `}
                >
                  Full-Stack
                </span>
                &nbsp;
                <span
                  className={css`
                    color: #457b9d;
                    font-weight: 700;
                  `}
                >
                  Developer
                </span>
              </h2>
              <p
                className={css`
                  line-height: 2;
                  width: 80%;
                  font-size: 16px;
                  @media (max-width: 567px) {
                    text-align: center;
                    width: 100%;
                  }
                `}
              >
                I'm an Indonesian Web and Mobile App Developer with 12 years of
                experience. Dedicated to delivering simple, high-quality and
                efficient products.
              </p>
            </Space>
          </Col>
        </Row>
        <div
          className={css`
            position: absolute;
            right: 0;
            bottom: 76px;
            z-index: 20;
            transition: all 0.3s ease-in-out;
            @media (max-width: 1500px) {
              bottom: 50px;
            }
            @media (max-width: 878px) {
              bottom: 70px;
              right: -50px;
            }
            @media (max-width: 700px) {
              display: none;
            }
          `}
        >
          <Image
            src="/images/avatars.svg"
            preview={false}
            className={css`
              width: 350px !important;
              @media (max-width: 878px) {
                width: 300px !important;
              }
              @media (max-width: 799px) {
                width: 250px !important;
              }
              @media (max-width: 770px) {
                width: 250px !important;
              }
            `}
            // style={{ width: "350px" }}
          />
        </div>
      </div>

      <div
        className={css`
          width: 100%;
          position: absolute;
          right: 0;
          left: 0;
          bottom: -3px;
          z-index: 30;
          background: url(/images/wave.svg);
          height: 120px;
          background-size: cover;
        `}
      ></div>
      <div className="bottom-particles">
        {[...Array(200)].map((_, i) => {
          return <div key={i} className="bubble"></div>;
        })}
      </div>
    </Header>
  );
};

export default MainHeader;
