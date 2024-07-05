import React from 'react'
import styles from './sidebar.module.css'
import { MdDashboard, MdLogout, MdShoppingBag, MdSupervisedUserCircle } from 'react-icons/md'
import MenuLink from './menuLink/menuLink'
import Image from 'next/image'

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <MdDashboard />
      },
      {
        title: 'Users',
        path: '/dashboard/users',
        icon: <MdSupervisedUserCircle />
      },
      {
        title: 'Movies',
        path: '/dashboard/movies',
        icon: <MdShoppingBag />
      },
    ]
  }
]

const SideBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image src="/noavatar.png" alt ="" height="50" width="50"  className={styles.userImage}/>
        <div className={styles.userDetail}>
          <span className={styles.userName}>John Doe</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map(cat => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map(item => (
              <MenuLink item = {item} key = {item.title}/>
            ))}
          </li>
        ))}
      </ul>
      <button className={styles.logout}>
        <MdLogout />
        Logout</button>
    </div>
  )
}

export default SideBar