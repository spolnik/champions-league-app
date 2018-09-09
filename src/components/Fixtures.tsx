import * as React from "react";
import Match from "../domain/Match";
import Fixture from "./Fixture";

interface FixturesProps {
    numOfMatchDay: number;
    matches: Match[];
}

interface FixturesState {
    round: number;
}

export default class Fixtures extends React.Component<FixturesProps, FixturesState> {

    constructor(props: FixturesProps) {
        super(props);
        this.state = {round: 1} as FixturesState;
    }

    public render() {
        const fixtureNodes = this.props.matches.filter((_: {}, id: number) => {
            const to = this.state.round * 2;
            const from = this.state.round * 2 - 2;

            return id >= from && id < to;
        }).map((match, idx) => <Fixture match={match} key={idx}/>);

        return (
            <div className="fixtures">
                <ul className="col-md-12 list-group">
                    {fixtureNodes}
                </ul>
                <nav className="col-md-12">
                    <ul className="pager">
                        <li className="previous">
                            <a href="javascript:void(0)" onClick={this.previousRound.bind(this)}>Previous</a>
                        </li>
                        <li className="next">
                            <a href="javascript:void(0)" onClick={this.nextRound.bind(this)}>Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }

    private previousRound() {
        const FIRST_ROUND = 1;
        const round = this.state.round;

        if (round > FIRST_ROUND) {
            this.setState({round: round - 1});
        }
    }

    private nextRound() {
        const LAST_ROUND = this.props.numOfMatchDay;
        const round = this.state.round;

        if (round < LAST_ROUND) {
            this.setState({round: round + 1});
        }
    }
}
