import styled from "styled-components";

export const HeaderRightWrap = styled.div`
flex: 1;
display: flex;
justify-content: flex-end;
align-items: center;
color: ${props => props.theme.text.primaryColor};

/* 字体大小已经在common.js中设置了 */
/* font-size: 14px; */

font-weight: 600;
position: relative;

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
.panel{
    /* 不用给高度，高度由内容撑起来 */
    width: 240px;
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 0 0 1px 1px rgba(0,0,0,.1);
    border-radius: 10px;
    position: absolute;
    top: 50px;
    right: 24px;

    .top,.bottom{
        padding: 10px 0;

        .item{
            height: 40px;
            line-height: 40px;
            padding: 0 16px;

            &:hover{
                background-color: #f5f5f5;
            }
        }
    }
    .top{
        border-bottom: 1px solid #ccc;
    }
}
`