
import { InputDate, Label } from "./style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    faCalendarDays
} from "@fortawesome/free-solid-svg-icons";

export default function InputComponent() {
    return (
        <>
            <InputDate>
                <FontAwesomeIcon icon={faCalendarDays} />
                <Label>
                    Selecione sua data
                </Label>
            </InputDate>
        </>
    )
}