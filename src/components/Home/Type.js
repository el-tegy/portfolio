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
          "Databricks Certified AWS Architect",
          "Databricks Certified Azure Architect",
          "Databricks Certified GCP Architect",
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
