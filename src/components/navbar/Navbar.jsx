import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Themetoggle from '../themeToggle/ThemeToggle'
import AuthLinks from '../authLinks/AuthLinks'

const Navbar = () => {
  return (
    <div className={styles.container}>

         <div className={styles.social}>
        <Image src="/images/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/images/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/images/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/images/youtube.png" alt="youtube" width={24} height={24} />
      </div>

      <div className={styles.logo}>lamablog</div>

      <div className={styles.links}>
         <Themetoggle />
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/" className={styles.link}>Contact</Link>
        <Link href="/" className={styles.link}>About</Link>
        <AuthLinks />
      </div>
    </div>
  )
}

export default Navbar