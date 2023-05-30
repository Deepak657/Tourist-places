import React from "react";
import BlogsCard from "./BlogsCard";
import styled from "styled-components";

const BlogsCardContaner = () => {
  return (
    <BlogsCardContanerStyle>
      <BlogsCard img="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000" />
      <BlogsCard img="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg" />
      <BlogsCard img="https://media.istockphoto.com/id/182027571/photo/backlight-view-through-apple-tree-summer-meadow-in-bavaria-germany.jpg?s=612x612&w=0&k=20&c=x0WMRiJz2RX87SHN2A4JobozSgiHM9LTKazi92NyNRo=" />
      <BlogsCard img="https://webneel.com/daily/sites/default/files/images/daily/08-2018/1-nature-photography-spring-season-mumtazshamsee.jpg" />
      <BlogsCard img="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" />
      <BlogsCard img="https://images.freeimages.com/images/previews/fa4/sunset-tree-1355206.jpg" />
    </BlogsCardContanerStyle>
  );
};
const BlogsCardContanerStyle = styled.div`
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: center;
  gap: 105px;
  flex-wrap: wrap;
`;
export default BlogsCardContaner;
