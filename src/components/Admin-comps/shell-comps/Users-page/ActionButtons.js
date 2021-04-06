import { Button } from "@chakra-ui/react";

const ActionButtons = () => {
  return (
    <>
      <Button bg="green.200" size="sm">
        Edit User
      </Button>
      <Button bg="red.200" size="sm" ml={2}>
        Delete
      </Button>
    </>
  );
};

export default ActionButtons;
