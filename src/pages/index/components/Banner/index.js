import React, { PureComponent } from 'react';
import Link from 'umi/link';
import BannerAnim, { Element, Thumb } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import styles from './index.less';

const BgElement = Element.BgElement;

class Banner extends PureComponent {
  render() {
    const { children } = this.props;
    const items = children.map(({ image, title, description, link }, i) => (
      <Element
        key={i}
        prefixCls={styles.elem}
      >
        <BgElement
          key="bg"
          className={styles.bg}
          style={{ background: `url(${image})` }}
        />
        <TweenOne
          className={styles.link}
          animation={{ opacity: 0, type: 'from' }}
        >
          <a href={link}>
            <TweenOne
              className={styles.title}
              animation={{ y: 30, opacity: 0, type: 'from' }}
            >{title}
            </TweenOne>
            <TweenOne
              className={styles.description}
              animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
            >{description}
            </TweenOne>
          </a>
        </TweenOne>
      </Element>
    ))
    return (
      <BannerAnim
        autoPlay
        arrow={false}
        prefixCls={styles.banner}
      >
        {items}
        <Thumb key="thumb" prefixCls={styles.thumb}>
          {children.map((_, i) => <span key={i} className={styles.thumbChild}></span>)}
        </Thumb>
      </BannerAnim>
    );
  }
}

export default Banner;