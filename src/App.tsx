import {
  Box,
  Button,
  Container,
  Flex,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";

function App() {
  return (
    <Box
      width="100%"
      height="100%"
      bgGradient="linear-gradient(#0D0D0D 10% , #262626 10%)"
    >
      <Container maxWidth={736}>
        <Flex flexDir="column" bg="tomato">
          <Flex
            width="100%"
            alignItems="center"
            bg="green"
            justifyContent="center"
          >
            <Image
              src="/Logo.png"
              alt="Logo"
              boxSize="126px"
              objectFit="contain"
            ></Image>
          </Flex>
          <Flex>
            <Input></Input>
            <Button bgColor="#1E6F9F">
              <Text color="#FFF">Criar</Text>
            </Button>
          </Flex>
        </Flex>

        <Box height={2000}>
          <Flex height="auto">
            <Text color="#4EA8DE">Tarefas criadas</Text>
            <Text color="#4EA8DE">Concluídas</Text>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
