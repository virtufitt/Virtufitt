import PropTypes from "prop-types";
// import { ThemeProvider } from "@mui/material/styles";
// import theme from "../theme";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {

  return (
      // <ThemeProvider theme={theme}>
          <Component {...pageProps} />
      // </ThemeProvider>
  );
}
App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.objectOf(PropTypes.any).isRequired,
};
