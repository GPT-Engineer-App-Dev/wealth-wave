import { Box, Container, Flex, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex direction={{ base: "column", md: "row" }} mb={8}>
        <Box flex="3" mr={{ md: 4 }}>
          <Heading as="h2" size="xl" mb={4}>Top News</Heading>
          <Box mb={4}>
            <Image src="/images/top-news.jpg" alt="Top News" mb={2} />
            <Heading as="h3" size="md">Top News Headline</Heading>
            <Text>Summary of the top news story goes here...</Text>
          </Box>
          <Box mb={4}>
            <Image src="/images/top-news-2.jpg" alt="Top News" mb={2} />
            <Heading as="h3" size="md">Another Top News Headline</Heading>
            <Text>Summary of another top news story goes here...</Text>
          </Box>
        </Box>
        <Box flex="1" mt={{ base: 8, md: 0 }}>
          <Heading as="h2" size="lg" mb={4}>Trending</Heading>
          <VStack align="start">
            <Link href="#">Trending Article 1</Link>
            <Link href="#">Trending Article 2</Link>
            <Link href="#">Trending Article 3</Link>
            <Link href="#">Trending Article 4</Link>
          </VStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;