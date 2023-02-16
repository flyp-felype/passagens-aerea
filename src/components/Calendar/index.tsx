
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Tags from '../Tags';

type Props = {
    setVisibleModal: (visible: Boolean) => any,
    tags: String[] | undefined,
    onChangeDate: (value: any, event: any) => any,
    removeDate: (value: String) => any
}
export default function CalendarComponent({ setVisibleModal, tags, onChangeDate, removeDate }: Props) {

    return (
        <div>
            <Calendar onChange={onChangeDate} minDate={new Date()} />
            <div className="flex flex-row" style={{ marginTop: 10 }}>
                <div className="flex flex-row" style={{ width: '85%' }}>
                    {tags && tags.map((item, index) => {
                        return <Tags key={index} onClick={removeDate} value={item} />
                    })}

                </div>
                <div style={{ width: '10%', alignSelf: 'right' }}>
                    <button onClick={() => setVisibleModal(false)} className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                        OK
                    </button>
                </div>
            </div>
        </div>
    )
}