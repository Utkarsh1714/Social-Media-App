import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { SocketContextProvider } from "./context/SocketContext.jsx";

const styles = {
  global: (props) => ({
    body: {
      color: props.colorMode === "dark" ? "whiteAlpha.900" : "gray.800",
      bg: props.colorMode === "dark" ? "#101010" : "gray.100",
    },
  }),
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const colors = {
  gray: {
    light: "#616161",
    dark: "#1e1e1e",
  },
};

const theme = extendTheme({ config, styles, colors });

createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <SocketContextProvider>
          <App />
        </SocketContextProvider>
      </ChakraProvider>
    </BrowserRouter>
  </RecoilRoot>
);
