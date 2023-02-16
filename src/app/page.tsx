"use client"

import CalendarComponent from '@/components/Calendar'
import InputComponent from '@/components/Input'
import Modal from '@/components/Modal'
import LogoVoopter from '../assets/logo-voopter.png'
import Image from 'next/image'
import { Label } from '@/components/Input/style'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'

export default function Home() {
  const [visibleModal, setVisibleModal] = useState<Boolean>(false)
  const [tagDate, setTagDate] = useState<String[]>()

  function modalDateIda() {
    setVisibleModal(true)
  }

  function onChangeDate(value: any, event: any) {
    let tags: String[] = [];
    const dateFormat = dayjs(value).format('DD MMM')
    const index = tagDate?.findIndex(x => x === dateFormat)
    console.log(index)
    if (index && index < 0) {
      if (tagDate)
        tags.push(...tagDate, dateFormat)
      else
        tags.push(dateFormat)
      setTagDate(tags)
    }


  }

  function removeDate(tag: String) {
    if (tagDate) {
      if (tagDate.length > 1) {
        const newTags = tagDate.filter((x) => x !== tag)
        setTagDate(newTags)
      } else {
        setTagDate([])
      }
    }
  }

  return (
    <div>
      <div className="flex flex-row">
        <Image
          src={LogoVoopter}
          alt={"Logo Voopter"}
        />
        <div className="flex flex-row" style={{ marginTop: 15 }}>
          <InputComponent onClick={modalDateIda}>
            <Label>
              Até 4 Datas
            </Label>
          </InputComponent>
          <InputComponent onClick={modalDateIda}>
            <Label>
              Até 4 Datas
            </Label>
          </InputComponent>

        </div>
      </div>
      {visibleModal &&
        <Modal>
          <div style={{ width: 350 }}>

            <CalendarComponent
              setVisibleModal={setVisibleModal}
              onChangeDate={onChangeDate}
              tags={tagDate}
              removeDate={removeDate} />


          </div>
        </Modal>
      }
    </div>
  )
}
