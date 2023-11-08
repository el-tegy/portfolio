import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { TbCertificate } from "react-icons/tb";
import { BsHourglassSplit } from "react-icons/bs";

function AchievementCards(props) {
    return (
        <Card className="project-card-view">
            <Card.Img variant="top" src={props.imgPath} alt="card-img" />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                    {props.description}
                </Card.Text>
                {"\n"}
                {"\n"}

                {!props.isBlog && props.cdLink && (
                    <Button variant="primary" href={props.cdLink} target="_blank">
                        <TbCertificate /> &nbsp;
                        {props.isBlog ? "Blog" : "View my credential"}
                    </Button>
                )}

                {/* If the component contains Demo link and it's not a Blog, it will render the below component without target="_blank" to open in the same tab */}
                
                {!props.isBlog && props.notAv && (
                    <Button
                        variant="primary"
                        href={props.demoLink}
                        style={{ marginLeft: "10px" }}
                    >
                        <BsHourglassSplit /> &nbsp;
                        {"Not available yet - coming soon!"}
                    </Button>
                )}
            </Card.Body>
        </Card>
    );
}

export default AchievementCards;
