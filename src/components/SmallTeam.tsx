import * as React from "react";
import Team from "../domain/Team";

interface SmallTeamProps {
    team: Team;
}

const smallImg = {
    height: "25px",
    margin: "auto",
    width: "25px",
};

const SmallTeam = (props: SmallTeamProps) => (
    <span>
        <img src={props.team.crestUrl} alt={props.team.shortName} className="img-responsive" style={smallImg}/>
        <span style={{marginLeft: "10px"}}>{props.team.shortName}</span>
    </span>
);

export default SmallTeam;
