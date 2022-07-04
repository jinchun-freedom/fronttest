import React from "react";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";

import Main from "layouts/Main";
import Container from "components/Container";
import { RootState } from "store";
import { Title, Link, SettingPost, Settings, Post } from "./components";
import { PostContextProvider } from "context/postContext";
import EditPost from "./components/editpost/edit";
import Detail from "./components/detailInfo/detail";
import { DataItem } from "definition";

const Home = () => {
  const store = useSelector((store: RootState) => store.post);

  return (
    <Main>
      <Box bgcolor={"alternate.main"} position={"relative"}>
        <Box paddingBottom={{ xs: 2, sm: 3, md: 4 }}>
          <Container>
            <Title></Title>
          </Container>
          <Container>
            <Link></Link>
          </Container>
          <PostContextProvider>
            <Container>
              <SettingPost></SettingPost>
            </Container>
            <Container>
              <Settings />
              <Post isAdd />
            </Container>
            <Container>
              <EditPost />
            </Container>
            {store.data.map((item: DataItem, index: number) => (
              <Container key={index}>
                <Detail item={item} />
              </Container>
            ))}
          </PostContextProvider>
        </Box>
      </Box>
    </Main>
  );
};

export default Home;
