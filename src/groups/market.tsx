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
  Toast,
} from "@chakra-ui/react";

import { DeleteIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";

interface Task {
  id: number;
  name: string;
  completed: boolean;
}

function Clean() {
  const [tasks, setTasks] = useState([] as Task[]);
  const [inputValue, setInputValue] = useState("");
  const [completedTasks, setCompletedTasks] = useState(0 as number);

  useEffect(() => {
    const completed = tasks.filter((task) => task.completed).length;
    setCompletedTasks(completed);
  }, [tasks]);
  const toast = useToast();

  const handleClick = () => {
    setTasks([
      ...tasks,
      { name: inputValue, completed: false, id: tasks.length },
    ]);
    setInputValue("");
  };

  const handleDelete = (task: Task) => {
    if (task.completed) {
      toast({
        title: "Forbiden.",
        description: "you can not delete done task :)",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      return;
    }
    setTasks(tasks.filter((t) => t.id !== task.id));
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
    <Box bgGradient="linear(to-l, teal.300, blue.500)">
      <Container maxWidth={"100%"}>
        <Flex flexDir="column" paddingTop="25px">
          <Text color={"white"} fontSize={"large"}>
            {" "}
            Marketing
          </Text>
          <Flex width="100%" alignItems="center" justifyContent="center">
            <Image
              src="/Logo.png"
              alt="Logo"
              boxSize="130px"
              objectFit="contain"
            ></Image>
          </Flex>

          <Flex>
            <Input
              bg="#262626"
              border="none"
              color="#f2f2f2"
              placeholder="Add a new task"
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
              <Text color="#FFF">Create</Text>
            </Button>
          </Flex>
        </Flex>

        <Box height={1000}>
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
                Task Created
              </Text>
              <Tag color="white" bg="#333333">
                {tasks.length}
              </Tag>
            </Flex>
            <Flex>
              <Text color="#8284FA">Done </Text>
              <Tag color="white" bg="#333333" marginLeft="10px">
                {completedTasks} from {tasks.length}
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
                  You don't have registered tasks yet
                </Text>
              </Box>
            ) : (
              <Box width="100%">
                {tasks.map((task) => (
                  <Flex
                    width="300px"
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
                        handleDelete(task);
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

export default Clean;
