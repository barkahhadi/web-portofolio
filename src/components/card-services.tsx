import { css } from "@emotion/css";
import { Card, Image } from "antd";
import React from "react";

interface CardServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tools: string[];
}

const CardService: React.FC<CardServiceProps> = (props) => {
  const { icon, title, description, tools } = props;

  return (
    <Card
      className={css`
        text-align: center;
        min-height: 620px;
        @media (max-width: 767px) {
          min-height: auto;
        }
        @media (max-width: 1024px) {
          min-height: 680px;
        }
        @media (max-width: 865px) {
          min-height: 720px;
        }
      `}
    >
      {icon}
      <h3
        className={css`
          margin: 22px auto 16px auto;
          font-size: 18px;
          font-weight: 500;
        `}
      >
        {title}
      </h3>
      <p
        className={css`
          color: #696969;
          font-size: 16px;
          font-weight: 300;
          margin-bottom: 16px;
          height: 100px;
          @media (max-width: 1024px) {
            height: 130px;
          }
          @media (max-width: 917px) {
            height: 140px;
          }
          @media (max-width: 870px) {
            height: 170px;
          }
          @media (max-width: 767px) {
            height: auto;
          }
        `}
      >
        {description}
      </p>
      <span
        className={css`
          color: #f44336;
          font-weight: 700;
          font-size: 16px;
          margin-bottom: 14px;
          display: inline-block;
        `}
      >
        Dev Tools
      </span>
      <ul
        className={css`
          li {
            margin-bottom: 8px;
          }
        `}
      >
        {tools && tools.map((tool, index) => <li key={index}>{tool}</li>)}
      </ul>
    </Card>
  );
};

export default CardService;
