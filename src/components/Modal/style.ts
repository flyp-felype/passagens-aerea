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
    z-index:9;
    flex:1
    display: flex;
    align-items: center;
    justify-content: center;

`

export const ModalContent = styled.div`
    flex: 1; 
    align-items: center;  
    flex-direction: column;
    display: flex;
    padding-top:50px;
    z-index: 9999
`