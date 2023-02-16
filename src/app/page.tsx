"use client"
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import CalendarComponent from '@/components/Calendar'
import InputComponent from '@/components/Input'
import Modal from '@/components/Modal'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div >
      <div className="flex flex-row ">
        <InputComponent />
        <InputComponent />
        <InputComponent />
      </div>

      <Modal>
        <CalendarComponent />
      </Modal>
    </div>
  )
}
