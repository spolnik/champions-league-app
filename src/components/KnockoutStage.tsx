import * as React from "react";

import Match from "../domain/Match";
import Fixtures from "./Fixtures";

interface KnockoutStageProps {
    name: string;
    matches: Match[];
    numOfMatchDay: number;
}

const KnockoutStage = (props: KnockoutStageProps) => (
    <div className="group" id={props.name.toLowerCase()}>
        <div className="panel panel-default">
            <div className="panel-heading">
                <h2 className="panel-title">{props.name}</h2>
            </div>
            <div className="panel-body">
                <Fixtures matches={props.matches} numOfMatchDay={props.numOfMatchDay}/>
            </div>
        </div>
    </div>
);

export default KnockoutStage;
