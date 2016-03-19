import React from 'react';
import {
  View,
  NavBar,
  Slider,
  Container,
} from 'amazeui-touch';
import {
  Link,
} from 'react-router';

import pageData from '../Data';




const Page = React.createClass({
  getPageIndex() {
    return Number(this.props.params.page);
  },
  buildImageSlider() {
    return (<Slider>

        {pageData[this.getPageIndex()].contentImages.map((oneSrc, index) => {
          return (
            <Slider.Item key={index}>
              <img src={oneSrc} />
            </Slider.Item>
          );
        })}
          </Slider>
    )
  },

  render() {
    let pageIndex = this.getPageIndex();
    console.log(pageIndex);
    return (
      <View>
        <NavBar
          title={pageData[pageIndex].title}
          amStyle="primary"
        />
      <Container scrollable>
      {this.buildImageSlider()}
      {pageData[pageIndex].content}
    </Container>
      </View>
    );
  },
});

export default Page;
