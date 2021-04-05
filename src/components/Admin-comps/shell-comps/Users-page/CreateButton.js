import { GridItem, SimpleGrid, Box, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
const CreateButton = ({ onOpen }) => {
  return (
    <>
      <GridItem h="100px" colSpan={2}></GridItem>
      <GridItem h="100px" colSpan={2}>
        <SimpleGrid columns={2}>
          <Box h="50px"></Box>
          <Box h="50px"></Box>
          <Box h="50px"></Box>
          <Box h="50px">
            <SimpleGrid h="100%" columns={2}>
              <GridItem colSpan={1} h="100%"></GridItem>
              <GridItem colSpan={1} h="100%">
                <Button
                  onClick={onOpen}
                  leftIcon={<AddIcon />}
                  w="100%"
                  bg="#3D41D7"
                  color="white"
                  h="100%"
                >
                  Create User
                </Button>
              </GridItem>
            </SimpleGrid>
          </Box>
        </SimpleGrid>
      </GridItem>
    </>
  );
};

export default CreateButton;
