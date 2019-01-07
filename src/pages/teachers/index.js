import React, { PureComponent } from 'react';
import { connect } from 'dva';
import Link from 'umi/link';
import styles from './index.less';

@connect(({ teacher: { list } }) => ({ list }))
class Teachers extends PureComponent {
  render() {
    const { list } = this.props;
    const items = list.map(({ name, name_en, photo, resume, courses }, i) => (
      <li className={styles.item}>
        <div className={styles.itemWrap}>
          <div className={styles.image}><img title={name} alt={name} src={photo}
          /></div>
          <div className={styles.text}>
            <h3 className={styles.title}>
              <big>{name}</big>
              <small>{name_en}</small>
            </h3>
            <div className={styles.resume}>
              <div>履历</div>
              <ol type='a'>{resume.map(x => <li>{x}</li>)}</ol>
            </div>
            <div className={styles.courses}>
              <div>课程</div>
              <ol>{courses.map(({ name, link }) => (
                <li><Link to={link}>{name}</Link></li>
              ))}</ol>
            </div>
          </div>
        </div>
      </li>
    ));
    return (
      <div>
        <ul className={styles.list}>{items}</ul>
      </div>
    );
  }
}

export default Teachers;