import React, { PureComponent } from 'react';
import { connect } from 'dva';
import CourseCover from '@/components/CourseCover';
import styles from './index.less';

@connect(({
  course: {
    underline: {
      categories,
      list
    }
  }
}) => ({ categories, list }))
class UnderlineCoursesPage extends PureComponent {
  render() {
    const { list, children } = this.props;
    return (
      <div className={styles.list}>
        <ul>
          {list.map(({ content, ...x }, i) => (
            <div key={i} className={styles.item}>
              <CourseCover {...x} />
            </div>
          ))}
        </ul>
        {children}
      </div>
    )
  }
}

export default UnderlineCoursesPage;