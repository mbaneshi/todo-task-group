import Clean from "./groups/clean";
import Market from "./groups/market";
import Urgent from "./groups/urgent";

import {
  Container,
  Heading,
  HStack,
  Icon,
  IconButton,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { LockIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <VStack p={4} minH="8vh" pb={17}>
        <IconButton
          aria-label="Trocar tema"
          icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
          isRound={true}
          size="md"
          alignSelf="flex-end"
          onClick={toggleColorMode}
        />

        <Heading
          p="5"
          fontWeight="extrabold"
          size="xl"
          bgGradient="linear(to-l, teal.300, blue.500)"
          bgClip="text"
        >
          Todo - Grouping
        </Heading>
      </VStack>
      <HStack>
        <VStack>
          <Clean />
        </VStack>
        <VStack>
          <Market />
        </VStack>
        <VStack>
          <Urgent />
        </VStack>
      </HStack>
    </>
  );
}

export default App;
