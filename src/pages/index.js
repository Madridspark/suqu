import React, { PureComponent } from 'react';
import BannerAnim, { Element, Thumb } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import 'rc-banner-anim/assets/index.css';
import styles from './index.less';

const BgElement = Element.BgElement;

class IndexPage extends PureComponent {
  render() {
    return (
      <div>
        <section>
          <BannerAnim arrow={false} prefixCls={styles.user}>
            <Element 
              prefixCls={styles.userElem}
              key="0"
            >
              <BgElement
                key="bg"
                className={styles.bg}
                style={{
                  background: '#364D79',
                }}
              />
              <TweenOne className={styles.userTitle} animation={{ y: 30, opacity: 0, type: 'from' }}>
                Ant Motion Banner
              </TweenOne>
              <TweenOne className={styles.userText}
                animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
              >
                The Fast Way Use Animation In React
              </TweenOne>
            </Element>
            <Element 
              prefixCls={styles.userElem}
              key="1" 
            >
              <BgElement
                key="bg"
                className={styles.bg}
                style={{
                  background: '#64CBCC',
                }}
              />
              <TweenOne className={styles.userTitle} animation={{ y: 30, opacity: 0, type: 'from' }}>
                Ant Motion Banner
              </TweenOne>
              <TweenOne className={styles.userText}
                animation={{ y: 30, opacity: 0, type: 'from', delay: 100 }}
              >
                The Fast Way Use Animation In React
              </TweenOne>
            </Element>
            <Thumb>
              
            </Thumb>
          </BannerAnim>
        </section>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    )
  }
}

export default IndexPage;