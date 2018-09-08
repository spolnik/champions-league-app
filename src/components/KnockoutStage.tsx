import * as React from "react";
import Fixture from "./Fixture";
import Fixtures from "./Fixtures";

interface KnockoutStageProps {
    name: string;
    fixtures: Fixture[];
}

export default class KnockoutStage extends React.Component<KnockoutStageProps> {
    public render() {
        return (
            <div className="group" id={this.props.name.toLowerCase()}>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h2 className="panel-title">{this.props.name}</h2>
                    </div>
                    <div className="panel-body">
                        <Fixtures fixtures={this.props.fixtures} numOfMatchDay={this.props.numOfMatchDay}/>
                    </div>
                </div>
            </div>
        );
    }
}