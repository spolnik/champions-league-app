import * as React from "react";
import Team from "../domain/Team";

interface SmallTeamProps {
    team: Team;
}

const SmallTeam = (props: SmallTeamProps) => (
    <span>
        <img src={props.team.crestUrl} alt={props.team.shortName} className="img-small"/>
        <span className="short-name">{props.team.shortName}</span>
    </span>
);

export default SmallTeam;
