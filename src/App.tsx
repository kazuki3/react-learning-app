import { Button, ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from 'react-router-dom'

import './styles.css';
import theme from './theme/theme';
import { Router } from "./router/Router";

export const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <BrowserRouter>
            <Router />
            {/* <Button colorScheme="teal">ボタン</Button>
            <p>aaaaaaaaaaaaa</p> */}
            </BrowserRouter>
        </ChakraProvider>
      );
}