import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  Image,
  Input,
  Tag,
  Text,
} from "@chakra-ui/react";

import { DeleteIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState([] as Task[]);
  const [inputValue, setInputValue] = useState("");
  const [completedTasks, setCompletedTasks] = useState(0 as number);

  useEffect(() => {
    const completed = tasks.filter((task) => task.completed).length;
    setCompletedTasks(completed);
  }, [tasks]);

  const handleClick = () => {
    setTasks([
      ...tasks,
      { name: inputValue, completed: false, id: tasks.length },
    ]);
    setInputValue("");
  };

  const handleCheck = (id: number) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    );
  };

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
              color="#f2f2f2"
              placeholder="Adicione uma nova tarefa"
              size="lg"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setInputValue(e.target.value)
              }
              value={inputValue}
            ></Input>
            <Button
              bgColor="#1E6F9F"
              size="lg"
              marginLeft="2"
              onClick={handleClick}
            >
              <Text color="#FFF">Criar</Text>
            </Button>
          </Flex>
        </Flex>

        <Box height={2000}>
          <Flex
            height="auto"
            width="100%"
            justifyContent="space-between"
            alignItems="center"
            padding="50px 0 20px 0"
            borderBottom={tasks.length === 0 ? "1px solid #80808080" : "none"}
          >
            <Flex>
              <Text color="#4EA8DE" paddingRight="10px">
                Tarefas criadas
              </Text>
              <Tag color="white" bg="#333333">
                {tasks.length}
              </Tag>
            </Flex>
            <Flex>
              <Text color="#8284FA">Concluídas </Text>
              <Tag color="white" bg="#333333" marginLeft="10px">
                {completedTasks} de {tasks.length}
              </Tag>
            </Flex>
          </Flex>
          <Flex>
            {tasks.length === 0 ? (
              <Box
                width="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                paddingTop="20px"
              >
                <Text fontSize="20px" color="#808080">
                  Você ainda não tem tarefas cadastradas
                </Text>
              </Box>
            ) : (
              <Box width="100%">
                {tasks.map((task) => (
                  <Flex
                    width="732px"
                    height="72px"
                    bg="#3333"
                    my="10px"
                    borderRadius="2%"
                    alignItems="center"
                    justifyContent="space-between"
                    key={task.id}
                  >
                    <Checkbox
                      marginLeft="20px"
                      onChange={() => handleCheck(task.id)}
                    />
                    <Text
                      color="#f2f2f2"
                      textDecoration={task.completed ? "line-through" : ""}
                    >
                      {task.name}
                    </Text>
                    <DeleteIcon
                      marginRight="20px"
                      color="#f2f2f2"
                      cursor="pointer"
                      onClick={() => {
                        setTasks(tasks.filter((t) => t.id !== task.id));
                      }}
                    />
                  </Flex>
                ))}
              </Box>
            )}
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}

export default App;
