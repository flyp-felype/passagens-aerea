
import { InputDate, Label } from "./style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    faCalendarDays
} from "@fortawesome/free-solid-svg-icons";
import { ReactNode } from "react";


type Props = {
    children: ReactNode,
    onClick: () => any
}
export default function InputComponent({ children, onClick }: Props) {
    return (
        <InputDate>

            <div className="flex flex-row">
                <FontAwesomeIcon  onClick={onClick} icon={faCalendarDays} fontSize={20} style={{marginTop:7, marginRight:10}} />
                {children}
            </div>
        </InputDate>
    )
}