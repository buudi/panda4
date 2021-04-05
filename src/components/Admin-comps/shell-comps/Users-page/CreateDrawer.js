import {
    Button,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Stack,
    Input,
    FormLabel,
    Select,
    FormControl
} from "@chakra-ui/react";

function CreateDrawer({ isOpen, firstField, onClose, onOpen }) {
    return (
        <>
            <Drawer
                isOpen={isOpen}
                placement="right"
                initialFocusRef={firstField}
                onClose={onClose}
            >
                <DrawerOverlay>
                    <form>
                        <DrawerContent>
                            <DrawerCloseButton />
                            <DrawerHeader borderBottomWidth="1px">
                                Create a new user
              </DrawerHeader>
                            <DrawerBody>
                                <Stack spacing="24px">
                                    <FormControl mt={4} isRequired>
                                        <FormLabel>Name</FormLabel>
                                        <Input
                                            ref={firstField}
                                            id="username"
                                            placeholder="name"
                                        />
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel htmlFor="username">Email</FormLabel>
                                        <Input
                                            id="username"
                                            placeholder="email"
                                        />
                                    </FormControl>

                                    <FormControl isRequired>
                                        <FormLabel>Role</FormLabel>
                                        <Select id="owner" defaultValue="0" placeholder="Select value">
                                            <option value="1">Admin</option>
                                            <option value="2">Moderator</option>
                                            <option value="3">Reviewer</option>
                                        </Select>
                                    </FormControl>

                                    <FormControl isRequired>
                                        <FormLabel htmlFor="username">Password</FormLabel>
                                        <Input
                                            type="password"
                                            id="username"
                                            placeholder="password"
                                        />
                                    </FormControl>
                                </Stack>
                            </DrawerBody>

                            <DrawerFooter borderTopWidth="1px">
                                <Button variant="outline" mr={3} onClick={onClose}>
                                    Cancel
                            </Button>
                                <Button type="submit" colorScheme="blue">Create User</Button>
                            </DrawerFooter>
                        </DrawerContent>
                    </form>
                </DrawerOverlay>
            </Drawer>
        </>
    );
}

export default CreateDrawer;