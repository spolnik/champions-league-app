import Result from "./Result";

export default class Score {
    public readonly duration: string;
    public readonly fullTime: Result;
    public readonly halfTime: Result;
    public readonly extraTime: Result | null;
    public readonly penalties: Result | null;
    public aggregate: Result | null;

    constructor(
        duration: string,
        fullTime: Result,
        halfTime: Result,
        extraTime: Result | null,
        penalties: Result | null,
        aggregate: Result | null,
    ) {
        this.duration = duration;
        this.fullTime = fullTime;
        this.halfTime = halfTime;
        this.extraTime = extraTime;
        this.penalties = penalties;
        this.aggregate = aggregate;
    }
}
