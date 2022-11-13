import React from "react";
import { Link } from "react-router-dom";

function ProjectCard(props){
    return(
        <>
            <div className="cardProject">
                <Link to={props.link}>
                    <span className="type">{props.type}</span>
                    <h3>{props.client}</h3>
                    <h4>{props.project}</h4>
                    <span className="year">{props.year}</span>
                </Link>
            </div>
        </>
    );
}

export default ProjectCard;