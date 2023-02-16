import { ReactNode } from "react"
import { Label, Tag } from "./style"

type Props = {
    value: String,
    onClick: (value: String) => any
}
export default function Tags({ value, onClick }: Props) {
    return (
        <Tag onClick={() => onClick(value)}>
            <Label>
                {value}
            </Label>
        </Tag>
    )
}