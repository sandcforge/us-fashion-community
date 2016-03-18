import React from 'react';
import {
  Container,
  Group,
  Slider,
} from 'amazeui-touch';

const sliderIntance = (
  <Slider>
    <Slider.Item>
      <img src="http://s.amazeui.org/media/i/demos/bing-1.jpg" />
    </Slider.Item>
    <Slider.Item><img src="http://s.amazeui.org/media/i/demos/bing-2.jpg" />
    </Slider.Item>
    <Slider.Item>
      <img src="http://s.amazeui.org/media/i/demos/bing-3.jpg" />
    </Slider.Item>
    <Slider.Item>
      <img src="http://s.amazeui.org/media/i/demos/bing-4.jpg" />
    </Slider.Item>
  </Slider>
);

const Page1 = React.createClass({
  render() {
    return (
      <Container {...this.props}>
      {sliderIntance}
        <Group>
          <h2>女爵</h2>
          <p> 她坦白了我们所虚伪的 她单纯了我们所复杂的
五年以来…
5年的等待，是个漫长也是耗损的过程。
看尽乐坛芭比娃娃的甜美面具，「性格」这两个字，似乎快要消失！
她的声音，她的个性，象徵著无可取代的高傲、独特的姿态，
这样一股充满灵魂的音乐、沉寂而刚苏醒的真声音，
是我们唯一相信且期待杨乃文的理由。
杨乃文 2006全新专辑 《女爵》
2006.12.01 终结等待</p>
        </Group>

      </Container>
    );
  },
});

export default Page1;
