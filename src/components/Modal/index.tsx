import { ReactNode } from "react";
import { BodyModal, ModalContent } from "./style";
type Props = {
    children: ReactNode
  }
export default function Modal({ children }: Props) {
    return (
        <BodyModal>
            <ModalContent>
                {children}
            </ModalContent>
        </BodyModal>
    )
}