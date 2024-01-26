import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({
  weight: ['300', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const Main = ({ children }) => {
  return <main className={openSans.className}>{children}</main>
}

export default Main
