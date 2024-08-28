import styled from "styled-components";

export const HeaderRightWrap = styled.div`
flex: 1;
display: flex;
justify-content: flex-end;
align-items: center;
color: ${props => props.theme.text.primaryColor};
font-size: 14px;
font-weight: 600;
.btns{
    display: flex;
    margin-right: 20px;

    .btn{
        padding: 12px 15px;
        cursor: pointer;

        &:hover{
            border-radius: 20px;
            background-color: #f5f5f5;
        }
    }
}
.profile{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    border: 1px solid #ccc;
    border-radius: 25px;
    width: 77px;
    height: 42px;
    background-color: #fff;
    margin-right: 24px;

    /* 让盒子阴影有一个动画效果，由于该动画效果在项目中多处都有，所以使用混入将它抽成一个公共的动画效果 */
    /* transition: box-shadow 200ms ease;
    &:hover{
        box-shadow: 0px 2px 4px rgba(0,0,0,.18);
    } */

    /* 在此处使用公共动画效果 */
    ${props => props.theme.mixin.boxShadow}
}
`