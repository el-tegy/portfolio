import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AchievementCard from "./AchievementCards";
import Particle from "../Particle";
import databricks_aws_pa from "../../Assets/Achievements/Databricks_AWS_platform_architect.pdf";
import databricks_azure_pa from "../../Assets/Achievements/Databricks_Azure_platform_architect.pdf";
import databricks_gcp_da from "../../Assets/Achievements/Databricks_GCP_platform_architect.pdf";
import databricks_genai_fd from "../../Assets/Achievements/Databricks_Generative_AI.pdf";
import databricks_lh_fd from "../../Assets/Achievements/Databricks_Lakehouse_fundamentals.pdf";
import databricks_de_asso from "../../Assets/Achievements/Databricks_Data_Engineer_Associate.pdf";
import ll_da from "../../Assets/Achievements/LinkedIn_Learning_certified_Become_Data_Analyst.pdf";
import ll_ds from "../../Assets/Achievements/LinkedIn_Learning_certified_Become_Data_Scientist.pdf";

function Achievements() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          The list of my <strong className="purple">Achievements </strong>
        </h1>
        <p style={{ color: "white" }}>
        Here are a few of the certifications I have earned.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <AchievementCard
              imgPath={databricks_de_asso}
              isBlog={false}
              title={<span className="purple">Databricks Certified Data Engineer Associate</span>}
              description={
                <span>
                  The Databricks Certified Data Engineer Associate certification validates my expertise in data engineering on the 
                  Databricks platform, emphasizing my proficiency in building reliable data pipelines and performing complex data transformations. 
                  It represents not only my grasp of essential data engineering concepts but also hands-on experience with Databricks' best practices 
                  and the Apache Spark ecosystem.
                </span>
              }
              ghLink="https://github.com/el-tegy/chatBI"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <AchievementCard
              imgPath={}
              isBlog={false}
              title={<span className="purple">AWS Certified Developer Associate</span>}
              description={
                <span>
                    The AWS Certified Developer - Associate certification underscores my comprehensive understanding of core AWS services, uses, and basic 
                    AWS architecture best practices, as well as my proficiency in developing, deploying, and debugging cloud-based applications using AWS. 
                    It serves as a testament to my hands-on experience in the AWS environment, ensuring I can leverage AWS to build scalable, high-performance 
                    applications.
                    Not available yet - coming soon!
                </span>        
              }
              //ghLink="https://github.com/el-tegy/pycounts_ja2327072339"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <AchievementCard
              imgPath={stream_persona}
              isBlog={false}
              title="stream_persona"
              description={
                <span>
                    The Databricks Azure Platform Architect certification validates my professional's expertise in configuring Azure Databricks, focusing on deployment, 
                    security, and cloud integrations, with an emphasis on practical skills like platform administration, network configuration, and external storage configuration. 
                </span>
              }
              ghLink="https://github.com/el-tegy/stream_persona"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <AchievementCard
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
            <AchievementCard
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

export default Achievements;
