import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pycounts from "../../Assets/Projects/pycounts.png";
import wpa from "../../Assets/Projects/wpa.png";
import gocod from "../../Assets/Projects/gocod.png";
import chatBI from "../../Assets/Projects/chatBI.png";
import price_pulse from "../../Assets/Projects/price_pulse.png";
import stream_persona from "../../Assets/Projects/stream_persona.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatBI}
              isBlog={false}
              title="TolkAI"
              description={
                <span>
                  A final-year engineering project involving the creation 
                  of <span className="purple">a Large Language Model (LLM)</span> based on the combination of 02 foundation models: <span className="purple">Gemini Pro - Gemini Pro Vision - Codey</span> using 
                  <span className="purple"> LangChain </span> that will be capable of assisting the BI engineer throughout the entire delivery chain: from analysing 
                  the downstream business need and choosing the appropriate type of visualizations
                  to creating and interpreting those visualizations. With my 05 teammates, we plan 
                  to integrate our tool with Power BI, Tableau and Qlik Sense initially, before extending it to other software later on.
                </span>
              }
              ghLink="https://github.com/el-tegy/TolkAI"
              //demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stream_persona}
              isBlog={false}
              title="reddit_realtime_sentiment_analysis"
              description={
                <span>
                  This project is a sophisticated real-time data streaming architecture utilizing some of the most advanced and widely-used technologies in the industry and is built on 
                  <span className="purple"> Google Cloud Kubernetes Engine (GKE)</span>. 
                  It leverages <span className="purple">Terraform</span>, allowing for efficient and predictable deployments. The data pipeline begins with data 
                  production from Reddit through the <span className="purple">PRAW API</span>, utilizing <span className="purple">Python</span>. This data is 
                  then sent into <span className="purple">Apache Kafka</span>, which serves as the backbone of the system, handling high-throughput data streams with robustness. 
                  <span className="purple"> Kafdrop</span> is used for monitoring Kafka, providing a visual interface for broker health and topic management. As far as they are concerned, 
                  Topics mainly consist on subreddits comments and are consumed by <span className="purple">Apache Spark</span>. For data storage, <span className="purple">Apache Cassandra</span> is 
                  chosen for its high availability and performance. Finally, the visualization and monitoring of processed data are accomplished using <span className="purple"> Grafana</span>, in order to present data 
                  insights effectively to end-users.
                  This project is an embodiment of my practical experience with a stack of technologies pivotal for real-time data processing in an enterprise context. 
                </span>
              }
              ghLink="https://github.com/el-tegy/reddit_realtime_sentiment_analysis"
              //demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pycounts}
              isBlog={false}
              title="pycounts"
              description={
                <span>
                I'm excited to share with you this personal project, <span className="purple">pycounts</span>, 
                a Python CLI/package hosted on GitHub. This project isn't just about counting words in a text file; 
                it's a showcase of a cutting-edge Python package architecture that's built for industrial scale.
                This project stands out for its rigorous adherence to Python standards, ensuring maintainability. With a fully 
                automated <span className="purple">CI/CD pipeline using GitHub Actions</span>, we guarantee code that's 
                not only functional but also adheres to the highest quality standards, enforced through tools like <span className="purple">Black
                </span> for code style and  <span className="purple">Bandit</span> for security. What's more, it's integrated with <span className="purple">Poetry </span> 
                for dependency management and streamlined packaging, which is the backbone of modern Python software craftsmanship. <span className="purple">Pre-commit hooks</span>, 
                type checks with mypy, and comprehensive testing with pytest underline a commitment to code quality that's 
                essential for today's Python packages.
                </span>        
              }
              ghLink="https://github.com/el-tegy/pycounts_ja2327072339"
              //demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gocod}
              isBlog={false}
              title="gocod"
              description={
                <span>
                  This solution is designed to help developers in general to be more productive in their projects. Here are its main features: quick and easy project creation, template recommendation based on answers to a questionnaire, template 
                  creation and sharing, adding templates to preferences. This project was developed using <span className="purple">Python FastAPI and Pydantic</span> for the back-end and <span className="purple">React</span> for the front-end. Code quality is assured by Pylint, Black and Isort with Pre-Commit. 
                  <span className="purple"> MongoDB</span> is used to store user data, while a <span className="purple">Neo4j</span> database contains the data on which the recommendations made to users are based. The complete solution was deployed in <span className="purple">GCP Compute Instance</span> using 
                  <span className="purple"> Terraform</span> and <span className="purple">Ansible</span> to manage and provision the infrastructure. Finally, the API documentation was generated using <span className="purple">Sphinx</span>.
                </span>
              }
              ghLink="https://github.com/nosql-esigelec/sprint-1-lt2a/"
              //demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={price_pulse}
              isBlog={false}
              title="price_pulse"
              description={
                <span>
                  price_pulse project encapsulates
                  a full-stack solution for price tracking across 02 e-commerce platforms.
                  Leveraging <span className="purple">Docker and Docker Compose</span>, price_pulse stands as a containerized application ensuring consistent deployment and isolation of services. At its core, 
                  <span className="purple"> Scrapy</span> is employed to adeptly scrape pricing data, reflecting my ability to Extract, Load and Transform information from various web architectures.
                  The project incorporates a <span className="purple">MySQL database</span>, with <span className="purple">PhpMyAdmin</span> enhancing the user interface for database 
                  interactions. This showcases a blend of back-end technologies harmoniously working together. I've integrated essential development tools such as <span className="purple">pylint</span> for code quality 
                  assurance and Poetry for robust dependency management. The use of pre-commit hooks ensures a disciplined approach to code standards before any changes are committed, 
                  underscoring my commitment to <span className="purple">clean, maintainable code</span>.
                </span>
              }
              ghLink="https://github.com/el-tegy/price_pulse"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wpa}
              isBlog={false}
              title="wpa - world population api"
              description={
                <span>
                  A data engineer's work is never far from the cloud, is it? This project is an <span className="purple">ASP.NET Core API</span>, adeptly <span className="purple"> deployed to Azure Web App Service</span>, which serves worldwide 
                  population data. Developed <span className="purple"> with C#</span>, it epitomizes the modern cloud-based approach to data exposure and management. In this project, 
                  I have honed my expertise in cloud-based solutions, ensuring high availability and scalability while managing vast datasets with adept precision. The project, showcases 
                  my proficiency in backend development and a deep understanding of object-oriented programming, emphasizing my readiness to tackle the challenges in today's data-centric engineering roles.
                </span>
              }
              ghLink="https://github.com/el-tegy/asp_dotnet_core_api_project_s8_bdtn"
              //demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
