import React, { PureComponent } from 'react';
import { Carousel } from 'element-react';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import moment from 'moment';
import styles from './index.less';

const itemHeight = 150;
const margin = 20;

class WorkList extends PureComponent {
  render() {
    const { children } = this.props;
    const items = children.map((photo, i) => (
      <Carousel.Item key={i}>
        <div className={styles.item}>
          <img alt='学员作品' src={photo} />
        </div>
      </Carousel.Item>
    ));
    return (
      <OverPack always={false}>
        <QueueAnim
          className={styles.list}
          type='bottom'
          duration={700}
          style={{ height: 550 }}
          >{[
          <Carousel
            key='uni'
            interval="4000"
            type="card"
            height={550}
            arrow='never'
            indicatorPosition='none'
            autoplay
          >{items}
          </Carousel>
        ]}
        </QueueAnim>
      </OverPack>
    );
  }
}

export default WorkList;