import React from 'react';
import {
  Group,
} from 'amazeui-touch';

const pageData = [
  {
    index: 0,
    route: 'page1',
    title: '我思念的城市',
    coverImage: 'http://s.amazeui.org/media/i/demos/bing-1.jpg',
    coverSummary: (<div>            风路过的时候  没能吹走 <br />
                这个城市太厚的灰尘 <br />
                多少次的雨水  从来没有 <br />
                冲掉你那沉重的忧伤 <br />
                你的忧伤  像我的绝望 <br />
                那样漫长</div>),
    contentImages: ['http://s.amazeui.org/media/i/demos/bing-1.jpg',
                    'http://s.amazeui.org/media/i/demos/bing-2.jpg',
                    'http://s.amazeui.org/media/i/demos/bing-3.jpg',
                    'http://s.amazeui.org/media/i/demos/bing-4.jpg',
                    ],
    content:  <Group>
                <h2>女爵</h2>
                <p> 她坦白了我们所虚伪的 她单纯了我们所复杂的五年以来…5年的等待，是个漫长也是耗损的过程。看尽乐坛芭比娃娃的甜美面具，「性格」这两个字，似乎快要消失！她的声音，她的个性，象徵著无可取代的高傲、独特的姿态，这样一股充满灵魂的音乐、沉寂而刚苏醒的真声音，是我们唯一相信且期待杨乃文的理由。杨乃文 2006全新专辑 《女爵》2006.12.01 终结等待</p>
              </Group>,
  },

  {
    index: 1,
    route: 'page2',
    title: '我思念的城市2',
    coverImage: 'http://s.amazeui.org/media/i/demos/bing-2.jpg',
    coverSummary: (<div>风路过的时候  没能吹走<br />
                这个城市太厚的灰尘 <br />
                多少次的雨水  从来没有 <br />
                冲掉你那沉重的忧伤 <br />
                你的忧伤  像我的绝望 <br />
                那样漫长</div>),
    contentImages:
      [ 'http://s.amazeui.org/media/i/demos/bing-1.jpg',
        'http://s.amazeui.org/media/i/demos/bing-2.jpg',
        'http://s.amazeui.org/media/i/demos/bing-3.jpg',
        'http://s.amazeui.org/media/i/demos/bing-4.jpg',
      ],
    content:
      <Group>
        <h2>女爵</h2>
        <p> 她坦白了我们所虚伪的 她单纯了我们所复杂的五年以来…5年的等待，是个漫长也是耗损的过程。看尽乐坛芭比娃娃的甜美面具，「性格」这两个字，似乎快要消失！她的声音，她的个性，象徵著无可取代的高傲、独特的姿态，这样一股充满灵魂的音乐、沉寂而刚苏醒的真声音，是我们唯一相信且期待杨乃文的理由。杨乃文 2006全新专辑 《女爵》2006.12.01 终结等待</p>
      </Group>
  },
];

export default pageData;
