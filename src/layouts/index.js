import React, { PureComponent } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import NavLink from 'umi/navlink'
import Link from 'umi/link';
import classNames from 'classnames';
import styles from './index.less';

const navList = [
  {
    title: '酥趣课程',
    link: '/',
    children: [
      {
        title: '线上课程',
        link: ''
      },
      {
        title: '线下课程',
        link: ''
      },
    ],
  },
  {
    title: '酥趣名师',
    link: '/',
  },
  {
    title: '酥趣咨询',
    link: '/',
  },
  {
    title: '食谱',
    link: '/',
  },
  {
    title: '研发中心',
    link: '/',
    children: [
      {
        title: '产品研发',
        link: ''
      },
      {
        title: '食谱研发',
        link: ''
      },
      {
        title: '名师书籍',
        link: ''
      },
    ],
  },
  {
    title: '关于我们',
    link: '/',
  },
]

const NavItem = ({ title, link, children }) => {
  const props = {
    // onMouseEnter: () => {

    // },
    // onMouseLeave: () => {

    // },
    className: styles.navItem,
  }
  return (
    <li className={styles.navItem}>
      <Link to={link}>{title}</Link>
      {children && children.length > 0 && (
        <ul className={styles.subNav}>
          {children.map(({ title, link }, i) => (
            <li key={i}>
              <Link to={link}>{title}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

class BasicLayout extends PureComponent {
  render() {
    const { children } = this.props;
    return (
      <StickyContainer>
        <Sticky topOffset={1}>
          {({ style, isSticky }) => (
            <header style={{...style}}>
              <div className={styles.logo}></div>
              <nav className={classNames({ [styles.isSticky]: isSticky })}>
                <ul className={styles.nav}>
                  {navList.map((x, i) => <NavItem key={i} {...x} />)}
                </ul>
              </nav>
            </header>
          )}
        </Sticky>
        <article>{children}</article>
      </StickyContainer>
    )
  }
}

export default BasicLayout;