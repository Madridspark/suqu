import React, { PureComponent } from 'react';
import { connect } from 'dva';
import NewsCover from '@/components/NewsCover';
import styles from './index.less';

@connect(({ news: { list } }) => ({ list }))
class NewsPage extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <div className={styles.list}>
        <ul>
          {list.map(({ content, ...x }, i) => (
            <div key={i} className={styles.item}>
              <NewsCover {...x} />
            </div>
          ))}
        </ul>
      </div>
    )
  }
}

export default NewsPage;