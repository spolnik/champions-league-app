import * as React from "react";

import AllTeams from "../components/AllTeams";

interface Homeprops {
    user: string;
}

const Home = (props: Homeprops) => (
    <AllTeams teamsUrl="data/2018/teams.json" fixturesUrl="data/2018/matches.json"/>
);

export default Home;
