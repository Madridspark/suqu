import React, { PureComponent } from 'react';
import { OverPack } from 'rc-scroll-anim';
import QueueAnim from 'rc-queue-anim';
import moment from 'moment';
import styles from './index.less';

const itemHeight = 150;
const margin = 20;

class PartnerList extends PureComponent {
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
      <OverPack always={false}>
        <QueueAnim
          type='bottom'
          className={styles.list}
          component='ul'
          duration={700}
          interval={200}
          style={{ height: Math.ceil(children.length / 4) * (itemHeight + margin * 2) }}
        >{items}
        </QueueAnim>
      </OverPack>
    );
  }
}

export default PartnerList;