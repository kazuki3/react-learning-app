import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from 'react-router-dom'

import './styles.css';
import theme from './theme/theme';
import { Router } from "./route/Router";

export const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <BrowserRouter>
            <Router />
            </BrowserRouter>
        </ChakraProvider>
      );
}