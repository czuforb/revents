import React from "react";
import { Menu, Header, Grid } from "semantic-ui-react";

export const SettingsNav = () => {
  return (
    <>
      <Menu vertical>
        <Header icon="user" attached inverted color="grey" content="Profile" />
        <Menu.Item>Basics</Menu.Item>
        <Menu.Item>About Me</Menu.Item>
        <Menu.Item>My Photos</Menu.Item>
      </Menu>
      <Grid.Row />
      <Menu vertical>
        <Header
          icon="settings"
          attached
          inverted
          color="grey"
          content="Account"
        />
        <Menu.Item>My Account</Menu.Item>
      </Menu>
    </>
  );
};
