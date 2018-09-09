import * as React from "react";

import AllTeams from "../components/AllTeams";

const Home = () => (
    <AllTeams teamsUrl="teams.json" matchesUrl="matches.json"/>
);

export default Home;
