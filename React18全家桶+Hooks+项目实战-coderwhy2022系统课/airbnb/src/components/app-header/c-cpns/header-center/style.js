import styled from "styled-components";

export const HeaderCenterWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 315px;
height: 48px;
box-sizing: border-box;
border: 1px solid #ccc;
border-radius: 24px;
padding: 0 10px;

/* 字体大小已在common.less中设置 */
/* font-size: 14px; */ 

font-weight: 600;
color: ${props => props.theme.text.primaryColor};
${props => props.theme.mixin.boxShadow};
cursor: pointer;

.icon_center{
    background-color: #ff385c;
    width: 32px;
    height: 32px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
}
`