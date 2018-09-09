import Result from "./Result";
import Score from "./Score";
import Team from "./Team";

export default class Match {
    public readonly utcDate: Date;
    public readonly status: string;
    public readonly matchDay: number;
    public readonly score: Score;
    public readonly homeTeam: Team;
    public readonly awayTeam: Team;

    constructor(
        utcDate: Date, status: string, matchDay: number, score: Score, homeTeam: Team, awayTeam: Team,
    ) {
        this.utcDate = utcDate;
        this.status = status;
        this.matchDay = matchDay;
        this.score = score;
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
    }

    public calculateAggregateResult(firstMatch: Match) {
        let aggregateGoalsHomeTeam;
        let aggregateGoalsAwayTeam;

        if (this.score.extraTime) {
            aggregateGoalsHomeTeam = firstMatch.score.fullTime.awayTeam + this.score.extraTime.homeTeam;
            aggregateGoalsAwayTeam = firstMatch.score.fullTime.homeTeam + this.score.extraTime.awayTeam;
        } else {
            aggregateGoalsHomeTeam = firstMatch.score.fullTime.awayTeam + this.score.fullTime.homeTeam;
            aggregateGoalsAwayTeam = firstMatch.score.fullTime.homeTeam + this.score.fullTime.awayTeam;
        }

        this.score.aggregate = new Result(aggregateGoalsHomeTeam, aggregateGoalsAwayTeam);
    }
}
