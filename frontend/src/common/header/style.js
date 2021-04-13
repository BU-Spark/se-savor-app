import styled from 'styled-components';
import logoPic from '../../statics/savorLogo.png';
import avatarPic from'../../statics/avatar.png';
export const HeaderWrapper = styled.div`
 position: relative;
 height: 75px;
 border-bottom: 1px solid #f0f0f0;
 display: flex;
`;

export const Logo = styled.div`
 width: 75px;
 height: 75px;
 margin-left: 20px;
 background:url(${logoPic});
 background-size: contain;
`;

export const Nav = styled.div`
 height: 100%;
display: flex;
align-items: center;
@media (max-width: 750px) {
    flex-direction: column;
    justify-content: center;
    width: 45%;
    justify-content: space-evenly;
}
`;

export const NavItem = styled.div`
 width: 145px;
 text-align: center;
 color: #757575;
`;

export const Addition = styled.div`
 flex-grow: 1;
 align-items: center;
 justify-content:flex-end;
 display: flex;
 padding-right: 15px;
`;

export const Button = styled.div`
text-align: center;
display: flex;
align-items: center;
justify-content: center;
height:50px;
 padding: 0 20px;
 &.sign{
    border-radius: 19px;
    border: 1px solid #EE7B22;
    color: #fff;
    background:#EE7B22;
 }
 &.log{
    color:#EE7B22;
    cursor: pointer;
 }
 &.signed{
    color: #757575;
    @media (max-width: 775px) {
        display: none;
    }
 }
`;

export const Ava = styled.img.attrs({
   src: avatarPic
})`
 width: 60px;
 height: 40px;
 border-radius: 50%;
`;

export const AvaBox = styled.div`
display: flex;
align-items: center;
`;
