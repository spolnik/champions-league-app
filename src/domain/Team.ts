export default class Team {
    public readonly id: number;
    public readonly shortName: string;
    public readonly tla: string;
    public readonly crestUrl: string;
    public readonly founded: number;
    public readonly squadMarketValue: number;
    public readonly squadMarketValueAsString: string;
    public readonly group: string;

    constructor(
        id: number, shortName: string, tla: string, crestUrl: string,
        founded: number, squadMarketValue: number, group: string,
    ) {
        this.id = id;

        this.shortName = shortName;
        this.tla = tla;
        this.crestUrl = crestUrl;
        this.founded = founded;

        this.squadMarketValue = squadMarketValue;
        const formatter = new Intl.NumberFormat("it-IT", {
            currency: "EUR",
            minimumFractionDigits: 0,
            style: "currency",
        });
        this.squadMarketValueAsString = formatter.format(squadMarketValue);

        this.group = group;
    }
}
