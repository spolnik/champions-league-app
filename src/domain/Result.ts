export default class Result {
    public readonly homeTeam: number | null;
    public readonly awayTeam: number | null;

    constructor(homeTeam: number | null, awayTeam: number | null) {
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
    }
}
