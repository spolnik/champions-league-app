import * as $ from "jquery";
import * as React from "react";

import Group from "../domain/Group";
import RawMatch from "../domain/RawMatch";
import Team from "../domain/Team";

import GroupBlock from "./Group";
import KnockoutStage from "./KnockoutStage";

interface AllTeamsProps {
    teamsUrl: string;
    matchesUrl: string;
}

interface AllTeamsState {
    teams: Team[];
    fixtures: RawMatch[];
}

export default class AllTeams extends React.Component<AllTeamsProps, AllTeamsState> {

    constructor(props: AllTeamsProps) {
        super(props);
        this.state = {teams: [], fixtures: []} as AllTeamsState;
    }

    public componentDidMount() {
        $.getJSON(this.props.teamsUrl, (result) =>
            this.setState({teams: result.teams}),
        );

        $.getJSON(this.props.matchesUrl, (result) =>
            this.setState({fixtures: result.fixtures}),
        );
    }

    public render() {

        const groups = Group.buildGroups(this.state.teams, this.state.fixtures);

        const groupNodes = groups.map((group) => (
            <GroupBlock group={group} key={group.name}/>
        ));

        return (
            <div>
                {groupNodes}
                <KnockoutStage
                    name="Round-of-16"
                    matches={Group.buildKnockoutStage(this.state.teams, this.state.fixtures, 7)}
                    numOfMatchDay={8}
                />
                <KnockoutStage
                    name="Quater-finals"
                    matches={Group.buildKnockoutStage(this.state.teams, this.state.fixtures, 8)}
                    numOfMatchDay={4}
                />
                <KnockoutStage
                    name="Semi-finals"
                    matches={Group.buildKnockoutStage(this.state.teams, this.state.fixtures, 9)}
                    numOfMatchDay={2}
                />
                <KnockoutStage
                    name="Final"
                    matches={Group.buildKnockoutStage(this.state.teams, this.state.fixtures, 10)}
                    numOfMatchDay={1}
                />
            </div>
        );
    }
}
