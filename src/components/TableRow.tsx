import * as React from "react";
import TeamGroupResults from "../domain/TeamGroupResults";
import SmallTeam from "./SmallTeam";

interface TableRowProps {
    id: number;
    teamGroupResults: TeamGroupResults;
}

const TableRow = (props: TableRowProps) => (
    <tr>
        <td>{props.id + 1}</td>
        <td><SmallTeam team={props.teamGroupResults.team}/></td>
        <td>{props.teamGroupResults.played}</td>
        <td className="hidden-xs">{props.teamGroupResults.won}</td>
        <td className="hidden-xs">{props.teamGroupResults.drawn}</td>
        <td className="hidden-xs">{props.teamGroupResults.lost}</td>
        <td className="hidden-xs">{props.teamGroupResults.goalsFor}</td>
        <td className="hidden-xs">{props.teamGroupResults.goalsAgainst}</td>
        <td>{props.teamGroupResults.goalsDifference}</td>
        <td>{props.teamGroupResults.points}
        </td>
    </tr>
);

export default TableRow;
