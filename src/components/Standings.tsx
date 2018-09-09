import * as React from "react";
import * as ReactTooltip from "react-tooltip";
import Group from "../domain/Group";
import TeamGroupResults from "../domain/TeamGroupResults";
import TableRow from "./TableRow";

interface StandingsProps {
    group: Group;
}

export default class Standings extends React.Component<StandingsProps> {

    private static standingsSort(a: TeamGroupResults, b: TeamGroupResults) {
        if (a.points === b.points) {
            if (a.goalsDifference === b.goalsDifference) {
                return b.goalsFor - a.goalsFor;
            }
            return b.goalsDifference - a.goalsDifference;
        }

        return b.points - a.points;
    }

    public render() {
        const teams = this.props.group.teams.map((team) => {
            const teamFixtures = this.props.group.matches.filter((match) =>
                match.homeTeam.id === team.id || match.awayTeam.id === team.id,
            );

            return new TeamGroupResults(team, teamFixtures);
        });

        const teamRows = teams.sort(Standings.standingsSort).map((teamGroupResults, id) => {
            return <TableRow id={id} teamGroupResults={teamGroupResults} key={teamGroupResults.name}/>;
        });

        return (
            <div>
                <ReactTooltip />
                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Team</th>
                        <th data-tip="Played">P</th>
                        <th className="hidden-xs" data-tip="Won">W</th>
                        <th className="hidden-xs" data-tip="Drawn">D</th>
                        <th className="hidden-xs" data-tip="Lost">L</th>
                        <th className="hidden-xs" data-tip="Goals For">GF</th>
                        <th className="hidden-xs" data-tip="Goals Against">GA</th>
                        <th data-tip="Goals Difference">GD</th>
                        <th data-tip="Points">Pts</th>
                    </tr>
                    </thead>
                    <tbody>
                    {teamRows}
                    </tbody>
                </table>
            </div>
        );
    }
}
