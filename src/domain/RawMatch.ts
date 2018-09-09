import RawTeam from "./RawTeam";
import Score from "./Score";

export default interface RawMatch {
    utcDate: Date;
    status: string;
    matchday: number;
    group: string;
    homeTeam: RawTeam;
    awayTeam: RawTeam;
    score: Score;
}
