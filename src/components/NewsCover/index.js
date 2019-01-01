import React, { PureComponent } from 'react';
import router from 'umi/router';
import styles from './index.less';

class NewsCover extends PureComponent {
  handleClick = () => {
    const { id } = this.props;
    router.push(`news/${id}`);
  }

  render() {
    const { title, preview, cover } = this.props;
    return (
      <li title={title} className={styles.card}>
        <div onClick={this.handleClick} className={styles.image}>
          <img title={title} alt={title} src={cover} />
        </div>
        <div className={styles.text}>
          <h3>{title}</h3>
          <p>{preview}</p>
        </div>
      </li>
    );
  }
}

export default NewsCover;