import * as React from "react";

interface TeamProps {
    name: string;
    logoUrl: string;
    marketValue: string;
    founded: number;
}

const Team = (props: TeamProps) => (
    <div className="col-md-3 text-center">
        <h2><strong>{props.name}</strong></h2>
        <img
            src={props.logoUrl}
            alt={props.name}
            className="img-thumbnail img-responsive"
        />
        <h4>Founded: {props.founded}</h4>
        <h4>{props.marketValue}</h4>
    </div>
);

export default Team;
