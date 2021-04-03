import { Box, Text, Center } from "@chakra-ui/react";


const colors = {
    txtColor: "#D3D3FD"
};

const Button = ({ children, active }) => {
    if (active) {
        return (
            <Box
                as="button"
                width="100%"
                color={colors.txtColor}
                borderLeft="4px"
                borderRadius="4px"
                fontWeight="bold"
            >
                <Text
                    fontSize="xl"
                >
                    {children}
                </Text>
            </Box>
        );
    } else {
        return (
            <Box
                as="button"
                width="100%"
                color={colors.txtColor}
                pl="4px"
                fontWeight="bold"
                _hover={{ pr: "4px", borderLeft: "4px", borderRadius: "4px" }}
            >
                <Text
                    fontSize="lg"
                >
                    {children}
                </Text>
            </Box>
        );
    }
};

export default Button;