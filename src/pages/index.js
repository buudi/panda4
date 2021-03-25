import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import Main from "../components/Main";
import {
  Box,
  Center,
  Heading,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Head>
        <title>PANDA CMS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <Center h="100vh">
        <Box>
          <Heading>List of Names:</Heading>
          <br />
          <UnorderedList>
            {data.map((names) => (
              <ListItem key={names.id}>{names.name}</ListItem>
            ))}
          </UnorderedList>
        </Box>
      </Center>
    </>
  );
}
