import * as React from "react";

interface TeamProps {
    name: string;
    logoUrl: string;
    marketValue: string;
}

const style = {
    height: "140px",
    marginBottom: "15px",
    marginTop: "5px",
    maxWidth: "140px",
};

const TeamBlock = (props: TeamProps) => (
    <div className="col-md-3 text-center">
        <h3><strong>{props.name}</strong></h3>
        <img
            src={props.logoUrl}
            alt={props.name}
            style={style}
            className="img-responsive"
        />
        <h5>{props.marketValue}</h5>
    </div>
);

export default TeamBlock;
