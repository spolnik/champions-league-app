import Score from "./Score";
import Team from "./Team";

export default class Match {
    public readonly utcDate: Date;
    public readonly status: string;
    public readonly stage: string;
    public readonly group: string;
    public readonly score: Score;
    public readonly homeTeam: Team;
    public readonly awayTeam: Team;

    constructor(
        utcDate: Date, status: string, stage: string, group: string, score: Score, homeTeam: Team, awayTeam: Team,
    ) {
        this.utcDate = utcDate;
        this.status = status;
        this.stage = stage;
        this.group = group;
        this.score = score;
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
    }
}
