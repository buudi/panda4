import { GridItem, SimpleGrid, Box, Button } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
const CreateButton = () => {
    return (
        <>
            <GridItem h="100px" colSpan={2}>
            </GridItem>
            <GridItem h="100px" colSpan={2}>
                <SimpleGrid spacing={5} columns={2}>
                    <Box h="50px"></Box>
                    <Box h="50px"></Box>
                    <Box h="50px"></Box>
                    <Box h="50px">
                        <SimpleGrid h="100%" columns={2} spacing={5}>
                            <GridItem colSpan={1} h="100%"></GridItem>
                            <GridItem colSpan={1} h="100%">
                                <Button leftIcon={<AddIcon />} w="100%" bg="#3D41D7" color="white" h="100%">
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