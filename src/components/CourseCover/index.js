import React, { PureComponent } from 'react';
import router from 'umi/router';
import styles from './index.less';

class CourseCover extends PureComponent {
  handleClick = () => {
    const { id } = this.props;
    router.push(`underline-courses/${id}`);
  }

  render() {
    const { title, cover } = this.props;
    return (
      <li title={title} className={styles.card}>
        <div onClick={this.handleClick} className={styles.image}>
          <img title={title} alt={title} src={cover} />
        </div>
        <h3 className={styles.title}>{title}</h3>
      </li>
    );
  }
}

export default CourseCover;