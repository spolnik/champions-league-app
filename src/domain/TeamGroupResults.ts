import Match from "./Match";
import Team from "./Team";

export default class TeamGroupResults {
    private static isThatWin(teamResult: number, oppositeResult: number) {
        return teamResult > oppositeResult;
    }

    private static isThatLost(teamResult: number, oppositeResult: number) {
        return teamResult < oppositeResult;
    }

    public readonly team: Team;
    public won: number;
    public drawn: number;
    public lost: number;
    public goalsFor: number;

    public goalsAgainst: number;

    constructor(team: Team, matches: Match[]) {
        this.team = team;

        this.won = 0;
        this.drawn = 0;
        this.lost = 0;
        this.goalsFor = 0;
        this.goalsAgainst = 0;

        this.process(
            matches.filter((match) => new Date() > match.utcDate),
        );
    }

    get played() {
        return this.won + this.drawn + this.lost;
    }

    get goalsDifference() {
        return this.goalsFor - this.goalsAgainst;
    }

    get points() {
        return this.won * 3 + this.drawn;
    }

    get name() {
        return this.team.shortName;
    }

    private process(matches: Match[]) {
        this.processHomeFixtures(
            matches.filter((match) => match.homeTeam.id === this.team.id),
        );

        this.processAwayFixtures(
            matches.filter((match) => match.awayTeam.id === this.team.id),
        );
    }

    private processHomeFixtures(homeFixtures: Match[]) {
        homeFixtures.forEach((match) => {

            const teamGoals = match.score.fullTime.homeTeam;
            const opponentGoals = match.score.fullTime.awayTeam;

            this.calculateStats(teamGoals, opponentGoals);
        });
    }

    private processAwayFixtures(awayFixtures: Match[]) {
        awayFixtures.forEach((match) => {
            const teamGoals = match.score.fullTime.awayTeam;
            const opponentGoals = match.score.fullTime.homeTeam;

            this.calculateStats(teamGoals, opponentGoals);
        });
    }

    private calculateStats(teamGoals: number, opponentGoals: number) {
        this.goalsFor = this.goalsFor + teamGoals;
        this.goalsAgainst = this.goalsAgainst + opponentGoals;

        if (TeamGroupResults.isThatWin(teamGoals, opponentGoals)) {
            this.won = this.won + 1;
        } else if (TeamGroupResults.isThatLost(teamGoals, opponentGoals)) {
            this.lost = this.lost + 1;
        } else {
            this.drawn = this.drawn + 1;
        }
    }
}
