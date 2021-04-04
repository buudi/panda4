import { Box, Text, Center } from "@chakra-ui/react";


const colors = {
    txtColor: "#D3D3FD"
};

const Button = ({ children, active, icon }) => {
    if (active) {
        return (
            <Box
                as="button"
                width="100%"
                h="40px"
                color="white"
                borderLeft="4px"
                borderRadius="4px"
                fontWeight="bold"
                fontSize="xl"
            >
                {children}
            </Box>
        );
    } else {
        return (
            <Box
                as="button"
                width="100%"
                h="40px"
                color={colors.txtColor}
                pl="4px"
                fontWeight="bold"
                fontSize="lg"
                _hover={{ pr: "4px", borderLeft: "4px", borderRadius: "4px" }}
            >
                {children}
            </Box>
        );
    }
};

export default Button;