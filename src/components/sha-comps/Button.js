import { Button } from "@chakra-ui/react";

const daButton = ({ children, active, onClick }) => {
    return (
        <>
            {active ? (<Button
                isActive={true}
                width="100%"
                mt={2}
                mb={2}
                borderRadius={0}
                bg="blue.700"
                color="white"
                onClick={onClick}
                _hover={{ color: "black", bg: "#E5E7E9" }}
                _active={{ color: "black", bg: "#E5E7E9" }}
            >
                {children}
            </Button>) : (<Button
                width="100%"
                onClick={onClick}
                mt={2}
                mb={2}
                borderRadius={0}
                bg="blue.700"
                color="white"
                _hover={{ color: "black", bg: "#E5E7E9" }}
            >
                {children}
            </Button>)}
        </>
    );
};

export default daButton;