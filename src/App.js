import './App.css';
import { Main } from './pages/main/Main';
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Main />
      </ChakraProvider>
  );
}

export default App;
