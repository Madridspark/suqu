import React, { PureComponent } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import NavLink from 'umi/navlink'
import Link from 'umi/link';
import classNames from 'classnames';
import logo from '@/assets/logo.png';
import styles from './index.less';

const navList = [
  {
    title: '酥趣课程',
    children: [
      {
        title: '线上课程',
        link: '/online-courses'
      },
      {
        title: '线下课程',
        link: '/underline-courses'
      },
    ],
  },
  {
    title: '酥趣名师',
    link: '/teachers',
  },
  {
    title: '酥趣资讯',
    link: '/news',
  },
  {
    title: '食谱',
    link: '/books',
  },
  {
    title: '研发中心',
    children: [
      {
        title: '产品研发',
        link: '/dev-production'
      },
      {
        title: '食谱研发',
        link: '/dev-book'
      },
      {
        title: '名师书籍',
        link: 'dev-publish'
      },
    ],
  },
  {
    title: '关于我们',
    link: '/about-us',
  },
]

const NavItem = ({ title, link, children }) => (
  <li className={styles.navItem}>
    {children ? <a href='javascript:void(0);'>{title}</a> : <NavLink activeClassName={styles.active} to={link}>{title}</NavLink>}
    {children && children.length > 0 && (
      <ul className={styles.subNav}>
        {children.map(({ title, link }, i) => (
          <li key={i}>
            <NavLink activeClassName={styles.active} to={link}>{title}</NavLink>
          </li>
        ))}
      </ul>
    )}
  </li>
)

class BasicLayout extends PureComponent {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    const { children, location: { pathname } } = this.props;
    const isIndex = pathname === '/';
    return (
      <StickyContainer>
        <Sticky topOffset={1}>
          {({ style, isSticky }) => (
            <header className={classNames({ [styles.isSticky]: isSticky || !isIndex })} style={{...style}}>
              <nav>
                <Link to='/' className={styles.logo}>
                  <img alt='logo' src={logo} />
                </Link>
                <ul className={styles.nav}>
                  {navList.map((x, i) => <NavItem key={i} {...x} />)}
                </ul>
              </nav>
            </header>
          )}
        </Sticky>
        <article className={classNames({[styles.subPage]: !isIndex})}>{children}</article>
        <footer>
          <div className={styles.copy}>&copy; 2018 - 酥趣 - 版权所有</div>
          <div>北京公安网安备 11010502008968 京 ICP 备 10214630</div>
        </footer>
      </StickyContainer>
    )
  }
}

export default BasicLayout;