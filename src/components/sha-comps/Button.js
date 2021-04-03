import { Button, Text } from "@chakra-ui/react";

const daButton = ({ children, active, onClick }) => {
    return (
        <>
            {active ? (<Button
                isActive={true}
                width="100%"
                mt={2}
                mb={2}
                borderRadius={0}
                bg="#d5d8eb"
                color="white"
                onClick={onClick}
                _hover={{ color: "white", bg: "#dcdde0" }}
                _active={{ color: "white", bg: "#6A75CA" }}
            >
                <Text fontSize="lg">{children}</Text>
            </Button>) : (<Button
                width="100%"
                onClick={onClick}
                mt={2}
                mb={2}
                borderRadius={0}
                bg="#6A75CA"
                color="#dcdde0"
                _hover={{ color: "white", bg: "#848dcf" }}
            >
                {children}
            </Button>)}
        </>
    );
};

export default daButton;