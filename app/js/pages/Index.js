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


const Index = React.createClass({
  getDefaultProps() {
    return {
      transition: 'rfr',
    };
  },

  renderItems() {
    const pages = [
      'Page1',
      'Page2',
    ];


    const header = (
      <Card.Child cover="http://lorempixel.com/1000/625/people/">
        <h3 className="card-title">
          Cover + 标题: 我思念的城市
        </h3>
      </Card.Child>
    );



    return pages.map((item, index) => {

        const footer = (
          <Card.Child role="footer">
            <a>喜欢</a>
            <a>评论</a>
            <Link to={`/${item.toLowerCase()}`}>展开</Link>
          </Card.Child>
        );
      return (

          <Card
            header={header}
            footer={footer}
            key={index}
            >

            风路过的时候  没能吹走 <br />
            这个城市太厚的灰尘 <br />
            多少次的雨水  从来没有 <br />
            冲掉你那沉重的忧伤 <br />
            你的忧伤  像我的绝望 <br />
            那样漫长
          </Card>


      );
    });
  },

  render() {
    return (
      <View>
        <NavBar
          amStyle="primary"
          title="时尚分享社区"
        />
        <Container scrollable>
            {this.renderItems()}
        </Container>
      </View>
    );
  },
});

export default Index;
