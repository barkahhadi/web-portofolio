import { css } from "@emotion/css";
import { Button, Col, Image, Row, Space, Tag } from "antd";
import { DoubleRightOutlined } from "@ant-design/icons";
import { Projects } from "@/constants/projects";

const CardProject: React.FC<Projects> = (props) => {
  const { title, description, tools, image, link, date, isRecent } = props;
  return (
    <div
      className={css`
        background-color: #e4e7e9;
        padding: 26px;
        margin-bottom: 26px;
        border-radius: 12px;
      `}
    >
      <Row gutter={[50, 20]}>
        <Col md={8}>
          <Image src={image} preview={true} width="100%" />
        </Col>
        <Col md={16}>
          <h3
            className={css`
              color: #002a3a;
              font-size: 24px;
              font-style: normal;
              font-weight: 600;
              margin-top: 12px;
              margin-bottom: 12px;
            `}
          >
            {title}
          </h3>
          <p
            className={css`
              color: #002a3a;
              font-size: 14px;
              font-weight: 400;
              line-height: 170%;
              letter-spacing: 0.42px;
              margin-bottom: 12px;
            `}
          >
            {description}
          </p>
          <Space direction="vertical" size={12}>
            <Space>
              <span>Date:</span>
              <span>{date}</span>
            </Space>
            <Space>
              <p
                className={css`
                  font-weight: 300;
                `}
              >
                Dev Tools:
              </p>
              <Space size={[0, "small"]} wrap>
                {tools &&
                  tools.map((tool) => (
                    <Tag bordered={false} color="blue">
                      {tool}
                    </Tag>
                  ))}
              </Space>
            </Space>
            {link && (
              <Space wrap>
                {link.map((item) => (
                  <Button type="primary" href={item.url} target="blank">
                    {item.type == "web"
                      ? "Visit Site"
                      : item.type == "android"
                      ? "Android App"
                      : "iOS App"}{" "}
                    <DoubleRightOutlined />
                  </Button>
                ))}
              </Space>
            )}
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default CardProject;
