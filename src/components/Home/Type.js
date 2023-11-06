import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Data Engineer",
          "DevOps Engineer",
          "Databricks Certified Data Engineer",
          "Databricks Certified AWS PA",
          "Databricks Certified Azure PA",
          "Databricks Certified GCP PA",
          "Incoming AWS Certified Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 45,
      }}
    />
  );
}

export default Type;
