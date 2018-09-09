import * as React from "react";
import Match from "../domain/Match";

interface FixtureProps {
    match: Match;
}

export default class Fixture extends React.Component<FixtureProps> {

    public render() {

        const matchDay = new Date(this.props.match.utcDate);
        const matchDate = matchDay.toString("dd MMMM yyyy");
        let matchResult = matchDay.toString("HH.mm");

        if (matchDay < Date.today()) {
            matchResult =
                `${this.props.match.score.fullTime.homeTeam} : ${this.props.match.score.fullTime.awayTeam}`;
        }

        let aggregateResult;
        if (this.props.match.score.aggregate) {
            aggregateResult = (
                <div><span style={{fontSize: "0.8em"}}>
                    Aggregate: {this.props.match.score.aggregate.homeTeam}-{this.props.match.score.aggregate.awayTeam}
                </span></div>
            );
        }

        if (this.props.match.score.extraTime) {
            matchResult =
                `${this.props.match.score.extraTime.homeTeam} : ${this.props.match.score.extraTime.awayTeam}`;
        }

        let penalties;
        if (this.props.match.score.penalties) {
            penalties = `(${this.props.match.score.penalties.homeTeam}-${this.props.match.score.penalties.awayTeam} p)`;
        } else if (this.props.match.score.extraTime) {
            penalties = "Extra Time";
        }

        return (
            <li className="list-group-item">
                <div><h6>{matchDate}</h6></div>
                <div className="row text-center fixture">
                    <span className="col-md-3 col-md-offset-1">{this.props.match.homeTeam.shortName}</span>
                    <img
                        src={this.props.match.homeTeam.crestUrl}
                        alt={this.props.match.homeTeam.shortName}
                        className="img-responsive match-logo col-md-1"
                    />
                    <div className="col-md-2">
                        <div><span className="match-result">{matchResult}</span></div>
                        {aggregateResult}
                        <span className="text-success" style={{fontSize: "0.7em"}}>{penalties}</span>
                    </div>
                    <img
                        src={this.props.match.awayTeam.crestUrl}
                        alt={this.props.match.awayTeam.shortName}
                        className="img-responsive match-logo col-md-1"
                    />
                    <span className="col-md-3">{this.props.match.awayTeam.shortName}</span>
                </div>
            </li>
        );
    }
}
