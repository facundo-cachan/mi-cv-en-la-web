import React from "react";
import PropTypes from "prop-types";

import "./static/css/tailwind.css";
import "./static/css/animate.css";
import "./static/css/global.css";

import { ThemeProvider } from "./src/context/ThemeContext";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider>{element}</ThemeProvider>
);

wrapRootElement.propTypes = {
  element: PropTypes.node.isRequired,
};
