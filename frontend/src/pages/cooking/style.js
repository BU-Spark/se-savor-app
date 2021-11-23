import styled from 'styled-components';
import backgroundPic from '../../statics/pasta.png';
export const CookingWrapper = styled.div`
background-color: #F8F7F7;
display: flex;
width: 100%;
flex-direction: column;
align-items: flex-start;
box-sizing: border-box;
justify-content: center;
`;
export const HeaderBar = styled.div`
display: flex;
width: 100%;
min-height: 5rem;
padding: 1rem;
flex-direction: row;
align-items: center;
box-sizing: border-box;
justify-content: center;
`;
export const ArrowContainer = styled.div`
display: flex;
padding: 0.2rem;
flex-direction: row;
width: 10%;
height: 64px;
box-sizing: border-box;
align-items: center;
justify-content: space-around;
`;
export const SearchBarContainer = styled.div`
display: flex;
padding-left: 0.5rem;
padding-right: 0.5rem;
box-sizing: border-box;
width: 70%;
align-items: center;
justify-content: center;
`;
export const SearchBar = styled.div`
display: flex;
background: #FFFFFF;
height: 64px;
border: 2px solid #000000;
box-sizing: border-box;
border-radius: 12px;
width: 100%;
align-items: center;
padding: 0.5rem;
justify-content: space-around;
`;
export const SearchBarText = styled.input`
width: calc(90% - 24px);
box-sizing: border-box;
border: none;
&:focus {
    outline: none;
}
font-family: Avenir LT Std;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 22px;
`;
export const UserInfoContainer = styled.div`
display: flex;
width: 20%;
align-items: center;
justify-content: center;
box-sizing: border-box;
`;
export const PageWrapper = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
flex-direction: column;
padding-top: 1rem;
padding-bottom: 4rem;
padding-left: 2rem;
padding-right: 2rem;
box-sizing: border-box;
width: 100%;
`;
export const FoodImage = styled.div`
display: flex;
background: linear-gradient(0deg, rgba(0, 0, 0, 0.12), rgba(0, 0, 0, 0.12)), url(${backgroundPic});
height: 450px;
border-radius: 12px;
width: 100%;
box-sizing: border-box;
`;
export const FoodHeader = styled.div`
display: flex;
width: 100%;
box-sizing: border-box;
justify-content: space-between;
align-items: center;
flex-direction: row;
margin-top: 3rem;
`;
export const HeadlineContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
min-width: 25%;
box-sizing: border-box;
align-items: center;
`;
export const HeadlineText = styled.h1`
text-align: left;
font-family: Avenir LT Std;
font-style: normal;
font-weight: 750;
font-size: 48px;
line-height: 58px;
box-sizing: border-box;
color: #635E5A;
`;
export const BylineContainer = styled.div`
display: flex;
flex-flow: row wrap;
justify-content: flex-start;
align-items: center;
text-align: center;
box-sizing: border-box;
width: 100%;
`;
export const Label = styled.h2`
background: rgba(118, 94, 71, 0.7);
border-radius: 12px;
color: white;
width: 158px;
height: 32px;

text-align: center;
font-family: Avenir LT Std;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 32px;
color: #F8F7F7;
box-sizing: border-box;
`;
export const LikesContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
box-sizing: border-box;
padding-left: 1rem;
padding-right: 1rem;
`;
export const LikesText = styled.h3`
display: block;
font-family: Avenir LT Std;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 29px;
text-align: center;
color: #97918C;
margin-left: 0.75rem;
margin-right: 0.75rem;
box-sizing: border-box;
`;
export const InfoContainer = styled.div`
display: flex;
flex-direction: row;
height: 100%;
justify-content: center;
align-items: center;
box-sizing: border-box;
padding-left: 8rem;
padding-right: 8rem;
`;
export const InfoItemContainer = styled.div`
display: flex;
flex-direction: column;
height: 100%;
justify-content: center;
align-items: center;
box-sizing: border-box;
padding-left: 2rem;
padding-right: 2rem;
`;
export const InfoNameText = styled.h3`
font-family: Avenir LT Std;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 29px;
text-align: center;
text-transform: uppercase;
color: #E2DFDC;
box-sizing: border-box;
`;
export const InfoValueText = styled.h2`
font-family: Avenir LT Std;
font-style: normal;
font-weight: 750;
font-size: 64px;
line-height: 77px;
text-align: center;
color: #FF7613;
`;
export const FoodBody = styled.div`
display: flex;
flex-direction: row;
width: 100%;
box-sizing: border-box;
margin-top: 2rem;
`;
export const FoodBodyItemTitle = styled.h2`
font-family: Avenir LT Std;
font-style: normal;
font-weight: 750;
font-size: 36px;
line-height: 43px;
color: #97918C;
text-align: left;
`;

export const TextContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
text-align: left;
margin-top: 1rem;
margin-bottom: 1rem;
`;
export const IngredientsContainer = styled.div`
display: flex;
flex-direction: column;
width: 35%;
text-align: left;
`;
export const IngredientsText = styled.p`
font-family: Avenir LT Std;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 42px;
color: #635E5A;
`;
export const DirectionsContainer = styled.div`
display: flex;
flex-direction: column;
width: 65%;
text-align: left;
`;
export const DirectionsText = styled.p`
font-family: Avenir LT Std;
font-style: normal;
font-weight: normal;
font-size: 18px;
color: #635E5A;
margin-top: 0.5rem;
margin-bottom: 0.5rem;
`;
export const DirectionsListItem = styled.span`
font-family: Avenir LT Std;
font-size: 36px;
font-style: bold;
font-weight: 750;
`;