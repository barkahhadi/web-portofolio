import { css } from "@emotion/css";
import { Carousel, Col, Image, Row, Space } from "antd";

const Clients: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#fff",
  };

  const imageStyle: React.CSSProperties = {
    height: "50px",
    width: "auto",
    filter: "grayscale(100%)",
    opacity: 0.8,
  };

  return (
    <div className="container" style={{ padding: "60px 30px" }}>
      <h1
        className={css`
          color: #000000;
          font-size: 34px;
          text-align: center;
          font-weight: 600;
          margin-bottom: 60px;
        `}
      >
        My Awesome Clients
      </h1>
      <Row
        gutter={[60, 70]}
        align="bottom"
        justify="center"
        className="clients-row"
      >
        <Col>
          <Image
            src="/images/clients/kominfo.png"
            preview={false}
            style={{
              ...imageStyle,
              width: 55,
              height: "auto",
            }}
          />
        </Col>
        <Col>
          <Image
            src="/images/clients/atrbpn.png"
            preview={false}
            style={{
              ...imageStyle,
              width: 60,
              height: "auto",
            }}
          />
        </Col>
        <Col>
          <Image
            src="/images/clients/lbs.png"
            preview={false}
            style={imageStyle}
          />
        </Col>
        <Col>
          <Image
            src="/images/clients/pln.png"
            preview={false}
            style={imageStyle}
          />
        </Col>
        <Col>
          <Image
            src="/images/clients/ap1.png"
            preview={false}
            style={imageStyle}
          />
        </Col>
        <Col>
          <Image
            src="/images/clients/admedika.png"
            preview={false}
            style={imageStyle}
          />
        </Col>
        <Col>
          <Image
            src="/images/clients/bmw.png"
            preview={false}
            style={imageStyle}
          />
        </Col>
        <Col>
          <Image
            src="/images/clients/inspira.png"
            preview={false}
            style={{
              ...imageStyle,
              width: 120,
              height: "auto",
            }}
          />
        </Col>
        <Col>
          <Image
            src="/images/clients/wika.png"
            preview={false}
            style={imageStyle}
          />
        </Col>
        <Col>
          <Image
            src="/images/clients/ptsp.png"
            preview={false}
            style={imageStyle}
          />
        </Col>
        <Col>
          <Image
            src="/images/clients/balihai.png"
            preview={false}
            style={imageStyle}
          />
        </Col>
        <Col>
          <Image
            src="/images/clients/jmt.png"
            preview={false}
            style={{
              ...imageStyle,
              width: 80,
              height: "auto",
            }}
          />
        </Col>
        <Col>
          <Image
            src="/images/clients/mobeng.png"
            preview={false}
            style={imageStyle}
          />
        </Col>
        <Col>
          <Image
            src="/images/clients/pln.png"
            preview={false}
            style={imageStyle}
          />
        </Col>
        <Col>
          <Image
            src="/images/clients/unilever.png"
            preview={false}
            style={imageStyle}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Clients;
