import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import AchievementCard from "./AchievementCards";
import Particle from "../Particle";
import databricks_de_asso_img from "../../Assets/Achievements/images/Associate-badge-eng-2x.png";
import databricks_aws_dev_asso_img from "../../Assets/Achievements/images/AWS-Certified-Developer-Associate_badge.png";
import databricks_aws_pa_img from "../../Assets/Achievements/images/fundamentals-badge-platform-architect-aws.png";
import databricks_azure_pa_img from "../../Assets/Achievements/images/fundamentals-badge-platform-architect-azure.png";
import databricks_gcp_da_img from "../../Assets/Achievements/images/fundamentals-badge-platform-architect-gcp.png";
import databricks_genai_fd from "../../Assets/Achievements/images/fundamentals-badge-generative-lp.png";
import databricks_lh_fd from "../../Assets/Achievements/images/lakehouse-fundamentals.png";
import ll_da from "../../Assets/Achievements/images/ll_da.jpg";
import ll_ds from "../../Assets/Achievements/images/ll_ds.jpg";

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
              imgPath={databricks_de_asso_img}
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
              cdLink="https://credentials.databricks.com/dbaee0ed-a944-481e-b75c-60c6bf23ae6e#gs.052hqp"
              //notAv="https://chatify-49.web.app/"
            />
          </Col> 
          <Col md={4} className="project-card">
            <AchievementCard
              imgPath={databricks_aws_dev_asso_img}
              isBlog={false}
              title={<span className="purple">AWS Certified Developer Associate</span>}
              description={
                <span>
                    The AWS Certified Developer - Associate certification underscores my comprehensive understanding of core AWS services, uses, and basic 
                    AWS architecture best practices, as well as my proficiency in developing, deploying, and debugging cloud-based applications using AWS. 
                    It serves as a testament to my hands-on experience in the AWS environment, ensuring I can leverage AWS to build scalable, high-performance 
                    applications.
                </span>        
              }
              //cdLink=""
              notAv=" "
            />
          </Col>

          <Col md={4} className="project-card">
            <AchievementCard
              imgPath={databricks_azure_pa_img}
              isBlog={false}
              title={<span className="purple">Databricks Certified Azure Platform Architect</span>}
              description={
                <span>
                    The Databricks Azure Platform Architect certification validates my professional's expertise in configuring Azure Databricks, focusing on deployment, 
                    security, and cloud integrations, with an emphasis on practical skills like platform administration, network configuration, and external storage configuration. 
                </span>
              }
              cdLink="https://credentials.databricks.com/adddace6-e97f-49b2-9d07-1166ef2a5b75#gs.050ytz"
              //notAv=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <AchievementCard
              imgPath={databricks_gcp_da_img}
              isBlog={false}
              title={<span className="purple">Databricks Certified GCP Platform Architect</span>}
              description={
                <span>
                  Earning the Databricks GCP Platform Architect badge has equipped me with a robust understanding of best practices for configuring and operating Databricks on Google Cloud Platform,
                  including deployment intricacies, security enhancements, and cloud service integrations. This hands-on experience is grounded in critical areas such as platform administration, account API usage, 
                  and the management of both external storage and customer-managed resources, proving my capability to architect advanced data solutions on GCP.
                </span>
              }
              cdLink="https://credentials.databricks.com/888a06cf-f6d2-42c8-89c8-53b773cf9143"
              //notAv="""
            />
          </Col>

          <Col md={4} className="project-card">
            <AchievementCard
              imgPath={databricks_aws_pa_img}
              isBlog={false}
              title={<span className="purple">Databricks Certified AWS Platform Architect</span>}
              description={
                <span>
                 The Databricks AWS Platform Architect certification showcases my mastery in deploying and managing Databricks within the AWS ecosystem, covering crucial aspects like platform administration, account API usage, 
                 external storage configurations, cloud service integrations, and security through customer-managed VPCs and keys. Achieving this accreditation affirms my hands-on capability to architect and administer Databricks on AWS, 
                 underpinning my readiness for advanced data solution roles.
                </span>
              }
              cdLink="https://credentials.databricks.com/ab56ce33-b35a-449c-b14c-ae6c92d58f42"
              //notAv=""
            />
          </Col>

          <Col md={4} className="project-card">
            <AchievementCard
              imgPath={databricks_genai_fd}
              isBlog={false}
              title={<span className="purple">Databricks Certified Generative AI Fundamentals</span>}
              description={
                <span>
                  The Databricks AWS Platform Architect certification showcases my mastery in deploying and managing Databricks within the AWS ecosystem, covering crucial aspects like platform administration, account API usage, 
                  external storage configurations, cloud service integrations, and security through customer-managed VPCs and keys. Achieving this accreditation affirms my hands-on capability to architect and administer Databricks on AWS, 
                  underpinning my readiness for advanced data solution roles.
                </span>
              }
              cdLink="https://credentials.databricks.com/ab56ce33-b35a-449c-b14c-ae6c92d58f42#gs.054nc9"
              //notAv=""
            />
          </Col>

          <Col md={4} className="project-card">
            <AchievementCard
              imgPath={databricks_lh_fd}
              isBlog={false}
              title={<span className="purple">Databricks Certified Lakehouse Fundamentals</span>}
              description={
                <span>
                  The Databricks Certified Lakehouse Fundamentals certification endows me with a comprehensive understanding of the Lakehouse architecture and its components, such as Apache Spark, Delta Lake, Databricks SQL, and Databricks Machine Learning. 
                  It validates my ability to articulate how these elements synergize to support data engineering, data science, and business analytics, equipping me with a foundational competency that's crucial for leveraging Databricks' unified platform in 
                  data and AI use cases​.
                </span>
              }
              cdLink="https://credentials.databricks.com/76292eef-d64b-4f99-9f56-9b497af833f3#gs.054gim"
              //notAv=""
            />
          </Col>

          <Col md={4} className="project-card">
            <AchievementCard
              imgPath={ll_ds}
              isBlog={false}
              title={<span className="purple">LinkedIn Learning certified Become a Data Scientist</span>}
              description={
                <span>
                  The LinkedIn Learning "Become a Data Scientist" certification is a comprehensive learning path designed to build the analytical and technical skill set required for a career in data science, emphasizing key areas such as statistical analysis, 
                  data mining, machine learning, and big data processing techniques. Through a hands-on approach, the course prepares aspiring data scientists to tackle real-world data challenges and equips them with the practical experience needed to interpret and 
                  translate data insights into strategic decisions in a business context.
                </span>
              }
              cdLink="https://esigelec-my.sharepoint.com/:b:/g/personal/elisee_tegue_groupe-esigelec_org/Eck5L0tfQiNJpQpnqGm7Pr0B0cabp2aQFiSzRReS5eLPqg?e=8PRjxb"
              //notAv=""
            />
          </Col>

          <Col md={4} className="project-card">
            <AchievementCard
              imgPath={ll_da}
              isBlog={false}
              title={<span className="purple">LinkedIn Learning certified Become a Data Analyst</span>}
              description={
                <span>
                  The "Become a Data Analyst" certification from LinkedIn Learning is a curated educational path that imparts essential analytical skills, focusing on data processing, visualization, and statistical analysis. This certification signifies that I have engaged in practical, 
                  hands-on exercises designed to build proficiency in using leading analytical tools and methodologies, preparing me to derive actionable insights from data across various business scenarios.
                </span>
              }
              cdLink="https://esigelec-my.sharepoint.com/:b:/g/personal/elisee_tegue_groupe-esigelec_org/EcDY31nrh2dAoZczp51TbWwBfhFe2iTcVeZBZ_AbFvKyLw?e=LT3UzH"
              //notAv=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Achievements;
