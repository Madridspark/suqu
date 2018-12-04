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
    const items = children.map(({ name, photo }, i) => (
      <Carousel.Item key={i}>
        <div className={styles.item}>
          <img alt={name} src={photo} />
        </div>
      </Carousel.Item>
    ));
    return (
      <Carousel
        interval="4000"
        type="flatcard"
        height="200px"
        arrow='always'
        indicatorPosition='none'
      >{items}
      </Carousel>
    );
  }
}

export default TeacherList;