import classnames from "classnames";
import * as React from "react";
import {
    Nav,
    NavItem,
    NavLink, Row,
    TabContent,
    TabPane,
} from "reactstrap";

import Group from "../domain/Group";
import Fixtures from "./Fixtures";
import Standings from "./Standings";
import Team from "./Team";

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
            parseInt(b.squadMarketValue, 10) - parseInt(a.squadMarketValue, 10),
        ).map((team) => (
            <Team
                name={team.shortName}
                logoUrl={team.crestUrl}
                marketValue={team.squadMarketValue}
                founded={team.founded}
                key={team.shortName}
            />
        ));

        return (
            <div className="group" id={this.props.group.name.toLowerCase()}>
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
                        <Row style={{padding: "1.5em"}}>{teamNodes}</Row>
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
