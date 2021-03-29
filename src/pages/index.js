import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Center,
  Heading,
  UnorderedList,
  ListItem,
  Stack,
  Skeleton,
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
      <Center h="100vh">
        <Box>
          <Heading>List of Names:</Heading>
          <br />
          {data.length != 0 ? (
            <UnorderedList>
              {data.map((names) => (
                <ListItem key={names.id}>{names.name}</ListItem>
              ))}
            </UnorderedList>
          ) : (
            <Stack>
              <Skeleton height="20px" />
              <Skeleton height="20px" />
              <Skeleton height="20px" />
            </Stack>
          )}
        </Box>
      </Center>
    </>
  );
}
