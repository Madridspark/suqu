import React, { PureComponent } from 'react';
import { connect } from 'dva';
import classNames from 'classnames';
import Banner from '@/components/IndexPage/Banner';
import TeacherList from '@/components/IndexPage/TeacherList';
import WorkList from '@/components/IndexPage/WorkList';
import CourseList from '@/components/IndexPage/CourseList';
import NewsList from '@/components/IndexPage/NewsList';
import PartnerList from '@/components/IndexPage/PartnerList';
import styles from './index.less';
import 'element-theme-default';

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
      heros = [],
      courses = [],
      teachers = [],
      works = [],
      news = [],
      partners = [],
    } } = this.props;
    return (
      <div>
        <Section fullScreen>
          <Banner>{heros}</Banner>
        </Section>
        <Section title='酥趣课程' gray>
          <CourseList>{courses}</CourseList>
        </Section>
        <Section title='酥趣名师'>
          <TeacherList>{teachers}</TeacherList>
        </Section>
        <Section title='学员作品' gray>
          <WorkList>{works}</WorkList>
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