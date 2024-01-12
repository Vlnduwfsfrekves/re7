import styled from "styled-components";
export const Div = styled.div`
    background:cornsilk;
    padding-bottom:20px
`
export const Ul = styled.ul`
    list-style:none;
    display: flex;
    justify-content: center;
`
export const Li = styled.li`
    &:not(:last-child){
        margin-right:20px;
    }
`
export const Button = styled.button`
    color: black;
    border-radius: 20px;
    padding: 10px;
`
export const Input = styled.input`
    padding: 10px 20px;
    box-shadow: 3px 3px #00000040;
`
export const Div1 = styled.div`
display:flex;
justify-content:center;
&:not(:last-child){
    margin-bottom:20px;
}

`