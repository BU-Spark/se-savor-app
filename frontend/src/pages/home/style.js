import styled from 'styled-components';
import backgroundPic from '../../statics/homePage.jpeg';
export const HomeWrapper = styled.div`
min-height:calc(100vh - 368px);
//height: 900px;
width: 100%;
background:url(${backgroundPic});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
`;

export const TextWrapper = styled.div`
text-align:center;
padding-top:150px;

`
export const BodyText = styled.div`
font-size: 55px;
color: #FFFFFF;
`

export const Button = styled.button`
font-size: 28px;
border-radius: 10px;
border: 1px solid #EE7B22;
color: #fff;
background:#EE7B22;
margin: 100px auto;
padding: 20px 20px;

`