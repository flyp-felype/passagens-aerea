
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
        <InputDate onClick={onClick}>
            <FontAwesomeIcon icon={faCalendarDays} />
            {children}
        </InputDate>
    )
}