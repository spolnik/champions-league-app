import classnames from "classnames";
import * as React from "react";
import {
    Badge,
    Nav,
    NavItem,
    NavLink, Row,
    TabContent,
    TabPane,
} from "reactstrap";

import Group from "../domain/Group";
import Fixtures from "./Fixtures";
import Standings from "./Standings";
import TeamBlock from "./TeamBlock";

interface GroupBlockProps {
    group: Group;
}

interface GroupBlockState {
    activeTab: string;
}

export default class GroupBlock extends React.Component<GroupBlockProps, GroupBlockState> {

    constructor(props: GroupBlockProps) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: "standings",
        } as GroupBlockState;
    }

    public render() {
        const teamNodes = this.props.group.teams.sort((a, b) =>
            b.squadMarketValue - a.squadMarketValue,
        ).map((team) => (
            <TeamBlock
                name={team.shortName}
                logoUrl={team.crestUrl}
                marketValue={team.squadMarketValueAsString}
                key={team.shortName}
            />
        ));

        const allTeamsValue = this.props.group.teams
            .map((team) => parseInt(team.squadMarketValue.toString(), 10))
            .reduce((a, b) => a + b, 0);

        const formatter = new Intl.NumberFormat("it-IT", {
            currency: "EUR",
            minimumFractionDigits: 0,
            style: "currency",
        });

        return (
            <div style={{paddingTop: "50px"}} id={this.props.group.name.toLowerCase()}>
                <h2>Group {this.props.group.name}</h2>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === "standings" })}
                            onClick={() => { this.toggle("standings"); }}
                        >
                            Standings
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === "fixtures" })}
                            onClick={() => { this.toggle("fixtures"); }}
                        >
                            Fixtures
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === "teams" })}
                            onClick={() => { this.toggle("teams"); }}
                        >
                            Teams
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent
                    activeTab={this.state.activeTab}
                >
                    <TabPane tabId="standings">
                        <Standings group={this.props.group}/>
                    </TabPane>
                    <TabPane tabId="fixtures">
                        <Fixtures matches={this.props.group.matches} numOfMatchDay={6}/>
                    </TabPane>
                    <TabPane
                        tabId="teams"
                        style={{
                            borderColor: "#fff #dee2e6 #dee2e6 #dee2e6",
                            borderStyle: "solid",
                            borderWidth: "1px",
                        }}
                    >
                        <Row style={{padding: "1.5em"}}>
                            {teamNodes}
                            <Badge className="col-md-12 text-center" color="default">
                                {formatter.format(allTeamsValue)}
                            </Badge>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }

    private toggle(tab: string) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab,
            });
        }
    }
}
