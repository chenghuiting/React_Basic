import styled from "styled-components";

export const HeaderLeftWrap = styled.div`
 flex: 1;
 display: flex;
 align-items: center;

 /* 第一种方法设置主题颜色 */
 /* color: var(--primary-color); */

 /* 第二种方法利用ThemeProvider设置主题颜色 */
 color: ${props => props.theme.color.primaryColor};

 .logo{
     /* 修改左侧svg的颜色 */
    /* color: red; */
    cursor: pointer;
    margin-left: 24px;
 }
`