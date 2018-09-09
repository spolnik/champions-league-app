import Match from "./Match";
import RawMatch from "./RawMatch";
import Team from "./Team";

export default class Group {
    public static buildGroups(rawTeams: Team[], rawMatches: RawMatch[]) {

        const groupNames = ["A", "B", "C", "D", "E", "F", "G", "H"];
        const groups = groupNames.map((name) => new Group(name));

        rawTeams.forEach((team: Team) => {
            const group = groups.find((item: Group) => item.name === team.group);
            if (group) {
                group.addTeam(team);
            }
        });

        rawMatches.forEach((rawMatch) => {
            if (rawMatch.matchday > 6) {
                return;
            }

            const rawMatchGroup = rawMatch.group.replace("Group ", "");
            const group = groups.find((item) => item.name === rawMatchGroup);

            if (!group) {
                return;
            }

            const groupMatch = Group.parseRawMatch(group.teams, rawMatch);

            if (groupMatch) {
                group.addMatch(groupMatch);
            }
        });

        return groups;
    }

    public static buildKnockoutStage(rawTeams: Team[], rawMatches: RawMatch[], matchday: number) {
        const matches: Match[] = [];

        rawMatches
            .filter((rawMatch) => rawMatch.matchday === matchday)
            .forEach((rawMatch) => {
                const match = this.parseRawMatch(rawTeams, rawMatch);

                if (match) {
                    const firstMatch = matches.find((firstFixture) =>
                        firstFixture.homeTeam.id === match.awayTeam.id
                            && firstFixture.awayTeam.id === match.homeTeam.id,
                    );

                    if (firstMatch) {
                        match.calculateAggregateResult(firstMatch);
                    }

                    matches.push(match);
                }
            });

        return matches;
    }

    private static parseRawMatch(teams: Team[], rawMatch: RawMatch) {
        const homeTeam = teams.find((team) => team.id === rawMatch.homeTeam.id);
        const awayTeam = teams.find((team) => team.id === rawMatch.awayTeam.id);

        if (!homeTeam || !awayTeam) {
            return null;
        }

        return new Match(
            rawMatch.utcDate,
            rawMatch.status,
            rawMatch.matchday,
            rawMatch.score,
            homeTeam,
            awayTeam,
        );
    }

    public readonly name: string;
    public readonly teams: Team[];
    public readonly matches: Match[];

    constructor(name: string) {
        this.name = name;
        this.teams = [];
        this.matches = [];
    }

    public addTeam(team: Team) {
        this.teams.push(team);
    }

    public addMatch(match: Match) {
        this.matches.push(match);
    }
}
