import Link from 'next/link'
import './Nav.css'

export default function Nav() {

  return (
    <nav className='nav container'>

      <ul className={`flex`}>
        <li> <Link href='/#about'>about</Link> </li>
        <li> <Link href='/#experience'>experience</Link> </li>
        <li> <Link href='/#contact'>contact</Link> </li>
      </ul>

    </nav>
  )
}