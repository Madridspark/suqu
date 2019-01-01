import React, { PureComponent } from 'react';
import { Carousel } from 'element-react';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import styles from './index.less';

class TeacherList extends PureComponent {
  render() {
    const { children } = this.props;
    const items = children.map(({ name, name_en, photo }, i) => (
      <Carousel.Item key={i}>
        <div className={styles.item}>
          <img alt={name} src={photo} />
          <h3 className={styles.title}>
            <big>{name}</big>
            <small>{name_en}</small>
          </h3>
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
            type="flatcard"
            height='550px'
            arrow='always'
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

export default TeacherList;