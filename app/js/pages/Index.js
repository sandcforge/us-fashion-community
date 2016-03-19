import React from 'react';
import {
  Container,
  List,
  NavBar,
  Group,
  View,
  Card,
} from 'amazeui-touch';
import {
  Link,
} from 'react-router';

import pageData from '../Data';


const Index = React.createClass({
  getDefaultProps() {
    return {
      transition: 'rfr',
    };
  },

  renderItems() {
    return pageData.map((currentPage, index) => {

      const header = (
        <Card.Child cover={currentPage.coverImage}>
          <h2 className="card-title">
            {currentPage.title}
          </h2>
        </Card.Child>
      );

        const footer = (
          <Card.Child role="footer">
            <a>喜欢</a>
            <a>评论</a>
            <a>展开</a>
          </Card.Child>
        );
      return (
        <Link to={`/pages/${String(index)}`}>
          <Card
            header={header}
            footer={footer}
            key={index}
            >
            {currentPage.coverSummary}

          </Card>
        </Link>


      );
    });
  },

  render() {
    return (
      <View>
        <NavBar
          amStyle="primary"
          title="北美时尚分享社区"
        />
        <Container scrollable>
            {this.renderItems()}
        </Container>
      </View>
    );
  },
});

export default Index;
