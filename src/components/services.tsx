import { css } from "@emotion/css";
import { Col, Row, Image } from "antd";
import CardService from "./card-services";

const Services: React.FC = () => {
  return (
    <div className="container" style={{ margin: "0 auto 40px auto" }}>
      <Row justify="space-between">
        <Col span={24}>
          <h1
            className={css`
              font-size: 34px;
              font-style: normal;
              font-weight: 600;
              line-height: normal;
              text-align: center;
              margin-bottom: 40px;
            `}
          >
            My Skills
          </h1>
        </Col>
      </Row>
      <Row gutter={[30, 30]}>
        <Col md={8}>
          <CardService
            icon={<Image src="/images/icons/mobile-app.svg" preview={false} />}
            title="Mobile App Development"
            description="Of course Native app offer the best performance, but why don't use cross-platform to save time and money?"
            tools={[
              "Flutter",
              "React Native",
              "Expo",
              "Android Studio",
              "Xcode",
              "Android & iOS Emulators",
            ]}
          ></CardService>
        </Col>
        <Col md={8}>
          <CardService
            icon={<Image src="/images/icons/fe.svg" preview={false} />}
            title="Front-End Development"
            description="When building a Front-End application, user experience, responsive design, performance and SEO are my main focus."
            tools={[
              "ReactJS",
              "NextJS",
              "Redux",
              "VueJS",
              "Webpack",
              "Sass",
              "TailwindCSS",
              "Bootstrap",
              "Ant Design",
              "Material UI",
              "Font Awesome",
              "Figma",
            ]}
          ></CardService>
        </Col>
        <Col md={8}>
          <CardService
            icon={<Image src="/images/icons/be.svg" preview={false} />}
            title="Back-End Development"
            description="Backend Development is a crucial part of a application. I always make sure that the backend is secure, fast, scalable and easy to maintain."
            tools={[
              "NodeJS",
              "NestJS",
              "PHP Laravel",
              "C# .Net",
              "Docker",
              "Redis",
              "Kafka",
              "MySQL",
              "PostgreSQL",
              "MongoDB",
              "Elascticsearch",
              "Swagger",
              "Postman",
            ]}
          ></CardService>
        </Col>
      </Row>
    </div>
  );
};

export default Services;
