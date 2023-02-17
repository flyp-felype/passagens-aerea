"use client"

import CalendarComponent from '@/components/Calendar'
import InputComponent from '@/components/Input'
import Modal from '@/components/Modal'
import LogoVoopter from '../assets/logo-voopter.png'
import Image from 'next/image'
import { Label } from '@/components/Input/style'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import Tags from '@/components/Tags'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import rulesDates from '@/helper/ruleDates'

type PropsResult = {
  sucess: Boolean;
  mensagem: String
}
export default function Home() {
  const [visibleModal, setVisibleModal] = useState<Boolean>(false)
  const [visibleModalVolta, setVisibleModalVolta] = useState<Boolean>(false)
  const [tagDate, setTagDate] = useState<String[]>()
  const [tagDateVolta, setTagDateVolta] = useState<String[]>()

  function modalDateIda() {
    setVisibleModal(true)
    setVisibleModalVolta(false)
  }

  function modalDateVolta() {
    setVisibleModal(false)
    setVisibleModalVolta(true)
  }


  function formatArrayDate(value: string, arrayData: String[] | undefined) {
    let tags: String[] = [];

    const dateFormat = dayjs(value).format('DD MMM')

    if (arrayData) {
      if (arrayData.length < 4) {
        //codigo para não deixar repetir
        const index = arrayData?.findIndex(x => x === dateFormat)
        //se não existir o index 
        if (index && index < 0) {
          if (arrayData) {
            tags.push(...arrayData, dateFormat)
            return tags
          }
          else {
            tags.push(dateFormat)
            return tags
          }
        }

      } else {
        toast.error("Não é possível adicionar mais de 4 Datas");
        return arrayData
      }
    } else {
      tags.push(dateFormat)
      return tags
    }

  }

  function removeArrayDate(data: String, arrayData: String[]) {
    let newArrayData: String[] = []
    if (arrayData) {
      if (arrayData.length > 1) {
        newArrayData = arrayData.filter((x) => x !== data)

      } else {
        newArrayData = []
      }
    }
    return newArrayData
  }

  function onChangeDateIda(value: any, event: any) {
    let tags: String[] | undefined = formatArrayDate(value, tagDate);
    setTagDate(tags)
  }


  function onChangeDateVolta(value: string, event: any) {
    let tags: String[] | undefined = formatArrayDate(value, tagDateVolta);
    setTagDateVolta(tags)
  }

  function removeDate(data: String) {
    if (tagDate)
      setTagDate(removeArrayDate(data, tagDate))
  }

  function removeDateVolta(data: String) {
    if (tagDateVolta)
      setTagDateVolta(removeArrayDate(data, tagDateVolta))
  }

  function validateRules() {
    const ruleService = new rulesDates(tagDate, tagDateVolta)
    let retorno: PropsResult;
    retorno = ruleService.datasVazias()
    if (retorno.sucess === false) {
      toast.error(retorno.mensagem)
    }

    retorno = ruleService.dateVoltaMenorDateIda()
    if (retorno.sucess === false) {
      toast.error(retorno.mensagem)
    }


  }
  return (
    <div>
      <div className="flex flex-row">
        <ToastContainer />
        <Image
          src={LogoVoopter}
          alt={"Logo Voopter"}
        />
        <div className="flex flex-row" style={{ marginTop: 15 }}>
          <InputComponent onClick={modalDateIda}>
            <Label>
              {tagDate && tagDate.length !== 0 ?
                <div className="flex flex-row">
                  {tagDate.map((item, index) => {
                    return <Tags key={index} onClick={removeDate} value={item} />
                  })}
                </div>
                : <Label onClick={modalDateIda}>Até 4 Datas</Label>}
            </Label>
          </InputComponent>
          <InputComponent onClick={modalDateVolta}>
            {tagDateVolta && tagDateVolta.length !== 0 ?
              <div className="flex flex-row">
                {tagDateVolta.map((item, index) => {
                  return <Tags key={index} onClick={removeDate} value={item} />
                })}
              </div>
              : <Label onClick={modalDateIda}>Até 4 Datas</Label>}

          </InputComponent>
          <button onClick={validateRules} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Pesquisar
          </button>
        </div>
      </div>
      {visibleModal &&
        <Modal>
          <div style={{ width: 350 }}>

            <CalendarComponent
              setVisibleModal={setVisibleModal}
              onChangeDate={onChangeDateIda}
              tags={tagDate}
              removeDate={removeDate} />

          </div>
        </Modal>
      }
      {visibleModalVolta &&
        <Modal>
          <div style={{ width: 350 }}>

            <CalendarComponent
              setVisibleModal={setVisibleModalVolta}
              onChangeDate={onChangeDateVolta}
              tags={tagDateVolta}
              removeDate={removeDateVolta} />

          </div>
        </Modal>
      }


    </div>
  )
}
