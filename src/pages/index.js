import Head from "next/head";
import { useEffect, useState } from "react";
import axios from "axios";
import NewNav from "../components/NewNav";
import {
  Box,
  Center,
  Heading,
  UnorderedList,
  ListItem,
  Stack,
  Skeleton,
  Button
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

  const handleCheck = async () => {
    const userData = localStorage.getItem("user-data");
    await axios
      .post('/api/check', {
        data: userData
      })
      .then(res => {
        if (res.data.success) {
          console.log("logged in");
        } else {
          console.log(res.data.msg);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <>
      <NewNav />
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
      <Box>
        <Heading>check logged:</Heading>
        <Button onClick={handleCheck}>Check</Button>
      </Box>
    </>
  );
}
