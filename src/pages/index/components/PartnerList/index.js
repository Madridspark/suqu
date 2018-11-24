import React, { PureComponent } from 'react';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import moment from 'moment';
import styles from './index.less';

const itemHeight = 90;

class PartnerList extends PureComponent {
  render() {
    const { children } = this.props;
    const items = children.map(({ title, link, image }, i) => (
      <li className={styles.item} key={i}>
        <a
          style={{ lineHeight: `${itemHeight}px`, height: itemHeight}}
          href={link}
          target='_blank'
          rel='noopener noreferrer'
        ><img alt={title} src={image} />
        </a>
      </li>
    ));
    return (
      <OverPack always={false}>
        <QueueAnim
          className={styles.list}
          component='ul'
          duration={700}
          interval={200}
          style={{ height: children.length * (itemHeight + 1) - 1 }}
        >
          {items}
        </QueueAnim>
      </OverPack>
    );
  }
}

export default PartnerList;