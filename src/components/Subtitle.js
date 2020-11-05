import React from "react";
import PropTypes from "prop-types";
import Typist from "react-typist";

const Subtitle = ({ onDone }) => (
  <Typist
    startDelay={500}
    avgTypingDelay={20}
    cursor={{ show: false }}
    className="my-2 flex lg:h-32"
    onTypingDone={onDone}
  >
    <code className="w-full text-sm leading-loose">
      <div>
        <span className="text-blue-600">const</span>{" "}
        <span className="text-orange-400">_facundo</span>:{" "}
        <span className="text-orange-400">Array</span>&lt;
        <span className="text-green-400">Ingredientes</span>&gt;{" "}
        <span className="text-blue-600">=</span> [
      </div>
      <div className="lg:pl-8">
        <span className="text-red-500">desarrollo</span>,{" "}
        <span className="text-red-500">dise&ntilde;o</span>,{" "}
        <span className="text-red-500">compromiso</span>,{" "}
      </div>
      <div className="lg:pl-8">
        <span className="text-red-500">especias</span>, ...
      </div>
      <div>];</div>
    </code>
  </Typist>
);

Subtitle.propTypes = {
  onDone: PropTypes.func.isRequired,
};

export default Subtitle;
