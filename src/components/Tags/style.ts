import styled from "styled-components";

export const Tag = styled.div` 
    border-radius:5px;
    background-color: blue;
    width:50px;
    margin-left:3px;
    margin-right:3px;
    padding:2px;
   cursor: pointer;
    &:hover  {

        background-color: red 
    }
`

export const Label = styled.p`
    color: white;
    font-weight: 600;
    font-size: 14px;
    text-align: center;
    padding:1px; 
    line-height: 16px;
  
`