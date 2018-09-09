import * as React from "react";

interface TeamProps {
    name: string;
    logoUrl: string;
    marketValue: string;
    founded: number;
}

const style = {
    height: "140px",
    width: "140px",
};

const Team = (props: TeamProps) => (
    <div className="col-md-3 text-center">
        <h3><strong>{props.name}</strong></h3>
        <img
            src={props.logoUrl}
            alt={props.name}
            style={style}
            className="img-thumbnail img-responsive"
        />
        <h5>Founded: {props.founded}</h5>
        <h5>{props.marketValue}</h5>
    </div>
);

export default Team;
