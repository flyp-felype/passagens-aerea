import styled from "styled-components";


export const BodyModal = styled.div`
    position:absolute;
    top:0px;
    right:0px;
    bottom:0px;
    left:0px;
    background-color: rgba(0,0,0,0.8);
    width: 100%;
    height: 100vh;
    z-index:999;
    flex:1
    display: flex;
    align-items: center;
    justify-content: center;

`

export const ModalContent = styled.div`
    flex: 1;
    justify-content: center;
    align-items: center;
    width:100%
    height: 100vh;
    display: flex;
    padding-top:50px
`