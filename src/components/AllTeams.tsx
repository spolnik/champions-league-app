import * as React from "react";

import Group from "../domain/Group";
import RawMatch from "../domain/RawMatch";
import Team from "../domain/Team";

import GroupBlock from "./Group";
import KnockoutStage from "./KnockoutStage";

interface AllTeamsProps {
    teams: Team[];
    matches: RawMatch[];
}

export default class AllTeams extends React.Component<AllTeamsProps> {

    public render() {

        const groups = Group.buildGroups(this.props.teams, this.props.matches);

        const groupNodes = groups.map((group) => (
            <GroupBlock group={group} key={group.name}/>
        ));

        return (
            <div>
                {groupNodes}
                <KnockoutStage
                    name="Round-of-16"
                    matches={Group.buildKnockoutStage(this.props.teams, this.props.matches, 7)}
                    numOfMatchDay={8}
                />
                <KnockoutStage
                    name="Quater-finals"
                    matches={Group.buildKnockoutStage(this.props.teams, this.props.matches, 8)}
                    numOfMatchDay={4}
                />
                <KnockoutStage
                    name="Semi-finals"
                    matches={Group.buildKnockoutStage(this.props.teams, this.props.matches, 9)}
                    numOfMatchDay={2}
                />
                <KnockoutStage
                    name="Final"
                    matches={Group.buildKnockoutStage(this.props.teams, this.props.matches, 10)}
                    numOfMatchDay={1}
                />
            </div>
        );
    }
}
