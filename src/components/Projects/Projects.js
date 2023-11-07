import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pycounts from "../../Assets/Projects/pycounts.png";
import wpa from "../../Assets/Projects/wpa.png";
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
              title="chatBI"
              description={
                <span>
                  A final-year engineering project involving the creation 
                  of <span className="purple">a Large Language Model LLM based on GPT-4 </span> that will be capable of 
                  assisting the BI engineer throughout the entire delivery chain: from analysing 
                  the downstream business need and choosing the appropriate type of visualizations
                  to creating and interpreting those visualizations. With my 05 teammates, we plan 
                  to integrate our tool with Power BI initially, before extending it to Tableau and 
                  Qlik Sense later on
                </span>
              }
              ghLink="https://github.com/el-tegy/chatBI"
              //demoLink="https://chatify-49.web.app/"
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
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stream_persona}
              isBlog={false}
              title="stream_persona"
              description={
                <span>
                  I'm glad to share this personal project, <span className="purple">stream_persona</span>. 
                  It's a comprehensive data engineering solution that integrates seamlessly with today's streaming data ecosystems.
                  In developing stream_persona, I've crafted a seamless system for streaming data operations, leveraging 
                  a cutting-edge stack including <span className="purple">Apache Kafka, Airflow, Spark, and Cassandra</span>, and embodied best practices in DevOps, CI/CD with GitHub Actions, 
                  all while upholding high code quality and contributing to open source standards. This project reflects a microcosm 
                  of a data engineer's essential skills in today's tech landscape. Through this project, I've honed my skills in 
                  building scalable, efficient, and robust data pipelines, crucial for any data engineer in the tech industry today. This project is also a testament 
                  to my commitment to <span className="purple">produce code that respects quality and best practices.</span>
                </span>
              }
              ghLink="https://github.com/el-tegy/stream_persona"
              //demoLink="https://editor.soumya-jit.tech/"              
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
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
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
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
