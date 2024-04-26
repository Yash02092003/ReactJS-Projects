import React from 'react'
import styles from './NavBar.module.css'

function NavBar() {
  return (
    <nav className = {`${styles.nav} ${styles.container}`}>
        <div className={`${styles.logo}`}>
            <img src="/images/Frame 2 1.png" alt="do some coding logo" />
        </div>

        <ul>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
        </ul>

    </nav>
  )
}

export default NavBar