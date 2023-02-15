import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import InputDate from '@/components/InputDate'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-row ">
        <InputDate />
        <InputDate />
        <InputDate />
      </div>
    </div>
  )
}
