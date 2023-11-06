import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Data Engineer",
          "DevOps Engineer",
          "Databricks Certified Data Engineer - Associate",
          "Databricks Certified AWS Platform Architect",
          "Databricks Certified Azure Platform Architect",
          "Databricks Certified GCP Platform Architect",
          "Incoming AWS Certified Developer - Associate",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
