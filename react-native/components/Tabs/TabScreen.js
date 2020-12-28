import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs, View, Left, Right, Body, Title } from 'native-base';
import Tab1 from './tab1.js';
import Tab2 from './tab2.js';
import Tab3 from './tab3.js';
export default class TabsExample extends Component {

  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: 'black' }} hasTabs>
          <Left />
          <Left />
          <Left />
          <Body>
            <Title style={{ color: 'white' }}>Hello Chat</Title>
          </Body>
          <Right />
        </Header>
        <Tabs>
          <Tab
            tabStyle={{ backgroundColor: 'black' }}
            activeTabStyle={{ backgroundColor: 'black' }}
            textStyle={{ color: 'white' }}
            heading="Create Chatters">
            <Tab1 />
          </Tab>
          <Tab
            tabStyle={{ backgroundColor: 'black' }}
            activeTabStyle={{ backgroundColor: 'black' }}
            textStyle={{ color: 'white' }}
            heading="Members">
            <Tab2 />
          </Tab>
          <Tab
            tabStyle={{ backgroundColor: 'black' }}
            activeTabStyle={{ backgroundColor: 'black' }}
            textStyle={{ color: 'white' }}
            heading="Questions">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}