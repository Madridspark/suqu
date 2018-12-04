import React, { PureComponent } from 'react';
import { Carousel } from 'element-react';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import moment from 'moment';
import styles from './index.less';

const itemHeight = 150;
const margin = 20;

class TeacherList extends PureComponent {
  render() {
    const { children } = this.props;
    const items = children.map(({ title, link, image }, i) => (
      <li className={styles.item} key={i}>
        <a
          style={{
            lineHeight: `${itemHeight}px`,
            height: itemHeight,
            margin
          }}
          href={link}
          target='_blank'
          rel='noopener noreferrer'
        ><img style={{ height: itemHeight }} alt={title} src={image} />
        </a>
      </li>
    ));
    return (
      <Carousel
        interval="4000"
        type="flatcard"
        height="200px"
        indicatorPosition='none'
      >
        {
          [1,2,3,4,5,6].map((item, index) => {
            return (
              <Carousel.Item key={index}>
                <h3>{item}</h3>
              </Carousel.Item>
            )
          })
        }
      </Carousel>
    );
  }
}

export default TeacherList;