import React, { PureComponent } from 'react';
import { connect } from 'dva';
import BannerAnim, { Element, Thumb } from 'rc-banner-anim';
import TweenOne from 'rc-tween-one';
import classNames from 'classnames';
import 'rc-banner-anim/assets/index.css';
import CourseList from './components/CourseList';
import NewsList from './components/NewsList';
import PartnerList from './components/PartnerList';
import styles from './index.less';

const BgElement = Element.BgElement;
const Section = ({ title, children, gray, fullScreen = false }) => (
  <section className={classNames({
    [styles.wrap]: !fullScreen,
    [styles.gray]: gray,
  })}>
    <div className={styles.content}>
      {title && <h2><span>{title}</span></h2>}
      <div>{children}</div>
    </div>
  </section>
)

@connect(({ model }) => ({ data: model }))
class IndexPage extends PureComponent {
  render() {
    const { data: {
      courses = [],
      news = [],
      partners = [],
    } } = this.props;
    return (
      <div>
        <Section fullScreen>
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
        </Section>
        <Section title='酥趣课程' gray>
          <CourseList>{courses}</CourseList>
        </Section>
        <Section title='酥趣名师'>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Section>
        <Section title='学员作品' gray>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Section>
        <Section title='酥趣资讯'>
          <NewsList>{news}</NewsList>
        </Section>
        <Section title='合作单位' gray>
          <PartnerList>{partners}</PartnerList>
        </Section>
        <Section title='联系我们'>
          <div>
            <h3>酥趣学院</h3>
            <p>地址：北京市西城区大栅栏街道廊坊头条21号院 前门北京坊 W3 号楼 2 层 02 号</p>
            <p>电话：18518752626</p>
            <p>邮箱：zhangxiaobai@suqu.com</p>
            <p>微信：suqu20181101</p>
          </div>
        </Section>
      </div>
    )
  }
}

export default IndexPage;