import Link from "next/link";
import styles from './styles.module.scss'

export default function ({text, link}) {
  return (
    <Link href={link}>
      <span className={styles.linkText}>{text}</span>
    </Link>
  )
}