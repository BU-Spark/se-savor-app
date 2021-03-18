import styled from 'styled-components';
import logoPic from '../../statics/savorLogo.png';

export const HeaderWrapper = styled.div`
 position: relative;
 height: 88px;
 border-bottom: 1px solid #f0f0f0;
`;
export const Logo = styled.a.attrs({
    href: '/'
})`
 position: absolute;
 top:5px;
 left:20px;
 display:block;
 width: 75px;
 height: 75px;
 background:url(${logoPic});
 background-size: contain;
`;

export const Nav = styled.div`
 width: 1260px;
 height: 100%;
 margin: 0 auto;

`;

export const NavItem = styled.div`
 line-height: 88px;
 padding: 0 19px;
 font-size: 19px;
 color: #757575;
 &.left{
     float : left;
 }
`;

export const Addition = styled.div`
 position: absolute;
 right: 0;
 top: 0;
 hegiht: 88px;
`;

export const Button = styled.div`
 float: right;
 margin-top: 18px;
 margin-right: 25px;
 line-height:44px;
 padding: 0 20px;
 &.sign{
    border-radius: 19px;
    border: 1px solid #EE7B22;
    color: #fff;
    background:#EE7B22;
 }
 &.log{
    color:#EE7B22;
 }
 
`

