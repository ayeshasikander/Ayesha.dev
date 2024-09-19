import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";
import theme from './style/theme';


function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;