import * as React from "react";

import AllTeams from "../components/AllTeams";
// @ts-ignore
import * as matchesData from "../data/2018/matches.json";
// @ts-ignore
import * as teamsData from "../data/2018/teams.json";

const Home = () => (
    <AllTeams
        teams={teamsData.default}
        matches={matchesData.default.matches}
    />
);

export default Home;
