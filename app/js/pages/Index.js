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

  getInitialState() {
    return {like: pageData.map((currentPage, index) => {return currentPage.like})};
  },

  handleLikeClick(idx) {
    let copyLike = this.state.like;
    copyLike[idx] = copyLike[idx] + 1;
    this.setState({like:copyLike});
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

      //let copyLike =
      const footer = (
        <Card.Child role="footer">
          <a onClick={ this.handleLikeClick.bind(this,index)} >喜欢 {this.state.like[index]}</a>
          <Link to={`/pages/${String(index)}`}>
            <a>展开</a>
          </Link>
        </Card.Child>
      );

      return (
          <Card
            header={header}
            footer={footer}
            key={index}
            >
            {currentPage.coverSummary}

          </Card>


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
