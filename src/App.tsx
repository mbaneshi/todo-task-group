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
      bgGradient="linear-gradient(#0D0D0D 10% , #1A1A1A 10%)"
    >
      <Container maxWidth={736}>
        <Flex flexDir="column" paddingTop="75px">
          <Flex width="100%" alignItems="center" justifyContent="center">
            <Image
              src="/Logo.png"
              alt="Logo"
              boxSize="126px"
              objectFit="contain"
            ></Image>
          </Flex>
          <Flex>
            <Input
              bg="#262626"
              border="none"
              placeholder="Adicione uma nova tarefa"
              size="lg"
            ></Input>
            <Button bgColor="#1E6F9F" size="lg" marginLeft="2">
              <Text color="#FFF">Criar</Text>
            </Button>
          </Flex>
        </Flex>

        <Box height={2000}>
          <Flex
            height="auto"
            width="100%"
            justifyContent="space-between"
            padding="50px 0 20px 0"
            borderBottom="1px solid #80808080"
          >
            <Text color="#4EA8DE">Tarefas criadas</Text>
            <Text color="#4EA8DE">Concluídas</Text>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
