import * as React from "react";
import Match from "../domain/Match";

interface FixtureProps {
    match: Match;
}

const fixtureStyle = {
    fontSize: "1.5em",
    margin: "10px 0",
};

const matchResultStyle = {
    fontSize: "1.5em",
    fontWeight: "bold",
};

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
                <div className="row text-center" style={fixtureStyle}>
                    <span className="col-md-3 col-md-offset-1">{this.props.match.homeTeam.shortName}</span>
                    <img
                        src={this.props.match.homeTeam.crestUrl}
                        alt={this.props.match.homeTeam.shortName}
                        className="img-responsive col-md-1"
                        style={{height: "3em"}}
                    />
                    <div className="col-md-2">
                        <div><span style={matchResultStyle}>{matchResult}</span></div>
                        {aggregateResult}
                        <span className="text-success" style={{fontSize: "0.7em"}}>{penalties}</span>
                    </div>
                    <img
                        src={this.props.match.awayTeam.crestUrl}
                        alt={this.props.match.awayTeam.shortName}
                        className="img-responsive col-md-1"
                        style={{height: "3em"}}
                    />
                    <span className="col-md-3">{this.props.match.awayTeam.shortName}</span>
                </div>
            </li>
        );
    }
}
