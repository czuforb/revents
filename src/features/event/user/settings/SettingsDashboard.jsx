import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import { SettingsNav } from "./SettingsNav";
import { Route } from "react-router-dom";
import BasicPage from "./BasicPage";

const SettingsDashboard = () => {
  return (
    <Grid>
      <GridColumn width={12}>
        <Route path="/settings/basic" component={BasicPage} />
      </GridColumn>
      <GridColumn width={4}>
        <SettingsNav />
      </GridColumn>
    </Grid>
  );
};

export default SettingsDashboard;
