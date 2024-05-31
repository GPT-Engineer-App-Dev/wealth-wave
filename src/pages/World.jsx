import { Box, Text, Link } from "@chakra-ui/react";

const World = () => (
  <Box p={4}>
    <Text fontSize="2xl" mb={4}>World News</Text>
    <Text>Content for World News goes here.</Text>
    <Link href="/">Back to Home</Link>
  </Box>
);

export default World;