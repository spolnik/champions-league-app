export default class Team {
    public readonly id: number;
    public readonly shortName: string;
    public readonly tla: string;
    public readonly crestUrl: string;
    public readonly founded: number;
    public readonly squadMarketValue: number;

    constructor(
        id: number, shortName: string, tla: string, crestUrl: string, founded: number, squadMarketValue: number
    ) {
        this.id = id;
        this.shortName = shortName;
        this.tla = tla;
        this.crestUrl = crestUrl;
        this.founded = founded;
        this.squadMarketValue = squadMarketValue;
    }
}
