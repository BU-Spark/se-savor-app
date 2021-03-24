import styled from 'styled-components';
import backgroundPic from '../../statics/homePage2.jpeg';

export const LoginWrapper = styled.div`
 z-index:0;
 position:aboslute;
//  left:0;
//  right: 0;
//  bottom: 0;
// top: 56px;
 padding-top:170px;
 min-height:calc(100vh - 368px);
 width: 100%;
 background:url(${backgroundPic});
 background-size: cover;
 background-repeat: no-repeat;
 background-position: center;
`;
export const LoginBox = styled.div`
 width: 500px;
 height: 600px;
 top: 300px;
 margin: 0 auto;
 padding-top:20px;
 background: #fff;
 box-shadow:0 0 8px rgba(0,0,0,.1);
 opacity: 0.88;
`;

export const Text = styled.div`
 font-size:35px;
 margin: 0 auto;
 padding:20px 0;
 color: #EE7B22;
 text-align: center;
 
`;

export const Input = styled.input`
 display: block;
 width: 380px;
 height: 40px;
 line-height:40px;
 padding:10px 10px;
 margin 20px auto;
 color: #777;
`;

export const Nav = styled.div`
 width: 380px;
 height: 40px;
 margin: 0 auto;
`;

export const NavCheckbox = styled.input.attrs({ type: 'checkbox' })`
 width: 20px;
 height: 20px;
 float:left;
 margin-right:5px;
`;

export const NavItem = styled.div`
line-height:20px;
&.left{
    float : left;
    color:#757575;
    font-size:12px;
}
&.right{
    float : right;
    color:#002ABD;
    font-size:12px;
}
&.or{
    margin: 30px auto;
    text-align: center;
    color:#757575;
}
`;

export const Button2 = styled.div`

 width: 380px;
 height: 40px;
 line-height:40px;
 border-radius: 15px;
 background: #EE7B22;
 color: #fff;
 margin: 10px auto;
 text-align: center;
 font-size:25px;
`;