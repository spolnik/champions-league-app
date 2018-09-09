export default class Result {
    public readonly homeTeam: number;
    public readonly awayTeam: number;

    constructor(homeTeam: number, awayTeam: number) {
        this.homeTeam = homeTeam;
        this.awayTeam = awayTeam;
    }
}
