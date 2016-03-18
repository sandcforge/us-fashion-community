import React from 'react';
import {
  Container,
  Group,
} from 'amazeui-touch';

const NotFound = React.createClass({
  render: function() {
    return (
      <Container {...this.props}>
        <Group>
          <h2>2015 SandCForge 版权所有</h2>
        </Group>
      </Container>
    );
  },
});

export default NotFound;
