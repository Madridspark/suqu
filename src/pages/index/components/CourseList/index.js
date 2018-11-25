import React, { PureComponent } from 'react';
import Link from 'umi/link';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import styles from './index.less';

const itemHeight = 280;
const fontSize = 14;

class CourseList extends PureComponent {
  render() {
    const { children } = this.props;
    const items = children.map(({ title, link, image, description }, i) => (
      <li className={styles.item} key={i}>
        <Link to={link} style={{ height: itemHeight }}>
          <div
            style={{
              fontSize: fontSize,
              paddingTop: itemHeight - (1.5 * 1.2 + 5 * 1.5 + 2) * fontSize,
            }}
            className={styles.content}
          >
            <h4 style={{
              fontSize: 1.2 * fontSize,
              lineHeight: `${1.5 * 1.2 * fontSize}px`,
              transform: `translateY(${(5 * 1.5 + 1) * fontSize}px)`,
            }}>{title}</h4>
            <p style={{
              lineHeight: `${1.5 * fontSize}px`,
              transform: `translateY(${(5 * 1.5 + 6) * fontSize}px)`,
            }}>{description}</p>
          </div>
          <img alt={title} src={image} />
        </Link>
      </li>
    ));
    items.push(
      <li className={styles.item} key='more'>
        <Link to='https://baidu.com/' style={{ height: itemHeight }}>
          <div className={styles.more}>更多课程</div>
        </Link>
      </li>
    )
    return (
      <OverPack always={false}>
        <QueueAnim
          type='scaleY'
          className={styles.list}
          component='ul'
          duration={700}
          interval={200}
          style={{ height: Math.ceil(children.length / 4) * (itemHeight + fontSize * 3) }}
        >{items}
        </QueueAnim>
      </OverPack>
    );
  }
}

export default CourseList;