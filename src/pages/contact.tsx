import React, { useState } from "react";
import { Button, Col, Form, Input, Layout, Row, Space } from "antd";
import DefaultHeader from "@/components/default-header";
import ProjectList from "@/components/project-list";
import Footer from "@/components/footer";
import { css } from "@emotion/css";

const { Content } = Layout;

const ProjectsPage: React.FC = () => {
  const [isLoading, setLoading] = useState(false);
  const [form] = Form.useForm();

  return (
    <Layout>
      <DefaultHeader />
      <Content
        style={{
          paddingTop: "55px",
          background: "#FFF",
          color: "#fff",
          paddingBottom: "260px",
        }}
      >
        <div className="container">
          <Row justify="center">
            <Col lg={12}>
              <h1
                className={css`
                  font-size: 34px;
                  font-weight: 600;
                  margin-bottom: 20px;
                  color: #607d8b;
                `}
              >
                Hi there!
              </h1>
              <h3
                className={css`
                  font-size: 28px;
                  font-weight: 400;
                  margin-bottom: 20px;
                  color: #607d8b;
                `}
              >
                What can I do for you?
              </h3>
              <Form form={form} layout="vertical">
                <Form.Item
                  label="Your Name"
                  required
                  name="name"
                  rules={[
                    {
                      required: true,
                      message: "Please enter Email",
                    },
                  ]}
                >
                  <Input placeholder="Please enter your name" size="large" />
                </Form.Item>
                <Form.Item
                  label="Your Email"
                  name="email"
                  required
                  rules={[
                    {
                      required: true,
                      message: "Please enter Email",
                    },
                    {
                      pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "Please enter valid email",
                    },
                  ]}
                >
                  <Input placeholder="Please enter your email" size="large" />
                </Form.Item>
                <Form.Item
                  label="What's up?"
                  name="message"
                  required
                  rules={[
                    {
                      required: true,
                      message: "Please enter Email",
                    },
                  ]}
                >
                  <Input.TextArea
                    placeholder="Please enter your message"
                    size="large"
                    rows={5}
                  />
                </Form.Item>
                <Space align="center" direction="horizontal">
                  <Button
                    type="default"
                    onClick={() => form.submit()}
                    loading={isLoading}
                    size="large"
                    className={css`
                      border-radius: 20px;
                      background: #ffc107;
                      display: flex;
                      padding: 13px 20px;
                      justify-content: center;
                      align-items: center;
                      height: 40px;
                      color: #002a3a;
                      font-weight: 600;
                      display: inline-block;
                      border: none;
                      width: 150px;
                      &:hover {
                        background-color: #ffca2c;
                        color: #fff !important;
                      }
                    `}
                  >
                    Submit
                  </Button>
                </Space>
              </Form>
            </Col>
          </Row>
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default ProjectsPage;
