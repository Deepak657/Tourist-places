import React from "react";
import styled from "styled-components";
import { Heading } from "../components/CardHeading";
import { Content } from "../components/ParagraphComponent";

interface Iprops {
  img: string;
}

const BlogsCard = ({ img }: Iprops) => {
  return (
    <BlogsCardStyle>
      <img
        src={img}
        alt=""
        width="100%"
        height="280px"
        style={{ borderRadius: "10px", objectFit: "cover" }}
      />
      <DateAuther>
        <Date>23/4/2023</Date>
        <Date
          style={{
            color: "black",
          }}
        >
          Auther
        </Date>
      </DateAuther>
      <Heading
        style={{
          color: "black",
          fontSize: "25px",
        }}
      >
        Give You better health a lift in our journey.........
      </Heading>
      <Content
        style={{
          fontSize: "13px",
          marginBottom: "0",
        }}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint iure
        dolor doloremque officia? Eaque incidunt obcaecati mollitia architecto
        repellendus odio neque error, accusantium vitae, quae iure eligendi et
        suscipit laudantium.....{" "}
        <span style={{ color: "orange" }}>See More</span>
      </Content>
    </BlogsCardStyle>
  );
};

const BlogsCardStyle = styled.div`
  width: 330px;
`;

const DateAuther = styled.div`
  margin: 18px 0;
  padding: 14px;
  display: flex;
  border-radius: 8px;
  background: #dfdddd;
  justify-content: space-between;
`;
const Date = styled.div`
  font-family: sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: ${({ theme }) => theme.colors.heading};
`;
export default BlogsCard;
