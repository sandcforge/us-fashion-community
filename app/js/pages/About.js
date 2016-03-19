import React from 'react';
import {
  Container,
  Group,
} from 'amazeui-touch';

const About = React.createClass({
  render: function() {
    return (
      <Container {...this.props}>
        <Group>
          <h2>2016 SandCForge @ 版权所有</h2>
        </Group>
      </Container>
    );
  },
});

export default About;
