import { Box, Text, Link } from "@chakra-ui/react";

const Business = () => (
  <Box p={4}>
    <Text fontSize="2xl" mb={4}>Business News</Text>
    <Text>Content for Business News goes here.</Text>
    <Link href="/">Back to Home</Link>
  </Box>
);

export default Business;