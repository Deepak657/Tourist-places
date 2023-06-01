import React from "react";
import styled from "styled-components";
import { Heading } from "../../GlobalComponent/CardHeading";
import { Content } from "../../GlobalComponent/ParagraphComponent";

interface Iprops {
  img: string;
  id: number;
}

const BlogsCard = ({ img, id }: Iprops) => {
  return (
    <BlogsCardStyle key={id}>
      <Image src={img} alt="" />
      <DateAuther>
        <Date>23/4/2023</Date>
        <Auther>Auther</Auther>
      </DateAuther>
      <Title>Give You better health a lift in our journey.........</Title>
      <Description>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint iure
        dolor doloremque officia? Eaque incidunt obcaecati mollitia architecto
        repellendus odio neque error, accusantium vitae, quae iure eligendi et
        suscipit laudantium..... <Span>See More</Span>
      </Description>
    </BlogsCardStyle>
  );
};

const BlogsCardStyle = styled.div`
  width: 330px;
`;

const Image = styled.img`
  width: 100%;
  height: 280px;
  border-radius: 10px;
  object-fit: cover;
`;

const Title = styled(Heading)`
  color: #000;
  font-size: 25px;
`;

const Span = styled.span`
  color: orange;
`;
const Description = styled(Content)`
  font-size: 13px;
  margin-bottom: 0;
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

const Auther = styled(Date)`
  color: black;
`;
export default BlogsCard;
