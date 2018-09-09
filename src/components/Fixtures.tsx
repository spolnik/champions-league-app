import * as React from "react";
import Match from "../domain/Match";
import Fixture from "./Fixture";
import {Pagination, PaginationItem, PaginationLink} from "reactstrap";

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

        const paginationItemNodes = [...Array(this.props.numOfMatchDay).keys()]
            .map((idx) => idx + 1)
            .map((idx) => (
                <PaginationItem active={this.state.round === idx}>
                    <PaginationLink href="javascript:void(0)" onClick={() => this.changeRound(idx)}>
                        {idx}
                    </PaginationLink>
                </PaginationItem>
            ));

        return (
            <div style={{marginTop: "30px"}}>
                <ul className="col-md-12 list-group">
                    {fixtureNodes}
                </ul>
                <Pagination style={{marginTop: "10px"}}>
                    <PaginationItem>
                        <PaginationLink
                            previous
                            href="javascript:void(0)"
                            onClick={() => this.changeRound(this.state.round - 1)}
                        />
                    </PaginationItem>
                    {paginationItemNodes}
                    <PaginationItem>
                        <PaginationLink
                            next
                            href="javascript:void(0)"
                            onClick={() => this.changeRound(this.state.round + 1)}
                        />
                    </PaginationItem>
                </Pagination>
            </div>
        );
    }

    private changeRound(newRound: number) {
        const FIRST_ROUND = 1;
        const LAST_ROUND = this.props.numOfMatchDay;

        if (newRound >= FIRST_ROUND && newRound <= LAST_ROUND) {
            this.setState({round: newRound});
        }
    }
}
