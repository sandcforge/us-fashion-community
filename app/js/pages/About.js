import React from 'react';
import {
  Container,
  Group,
  NavBar,
} from 'amazeui-touch';

const About = React.createClass({
  render: function() {
    return (
      <Container {...this.props}>
      <NavBar
        title='关于'
        amStyle="primary"
      />
        <Group>
          <h2>2016 SandCForge @ 版权所有</h2>
        </Group>
      </Container>
    );
  },
});

export default About;
