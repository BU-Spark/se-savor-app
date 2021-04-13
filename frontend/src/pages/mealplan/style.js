import styled from 'styled-components';
import backgroundPic from '../../statics/mealplanPage.png';
import dashLogo from '../../statics/dashboardlogos/dashboard.png';
import mealLogo from '../../statics/dashboardlogos/mealplan.png';
import recommendationLogo from '../../statics/dashboardlogos/recommendations.png';
import budgetLogo from '../../statics/dashboardlogos/budget.png';
import groupLogo from '../../statics/dashboardlogos/groupsize.png';
import dietLogo from '../../statics/dashboardlogos/dietaryrestrictions.png';

export const HomeWrapper = styled.div`
min-height:calc(100vh - 368px);
// height: 100vh;
width: 100%;
background:url(${backgroundPic});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
padding-top: 15px;
display: flex;
flex-direction: column;
`;

export const PageInfo = styled.div`
display: flex;
`;

export const PageNav = styled.div`
display:flex;
justify-content:space-around;
height:35px;
width:350px;
padding: 5px;
background: #ED7D21;
`;

export const DashLogo = styled.div`
 width: 25px;
 height: 25px;
 margin-left: 35px;
 background:url(${dashLogo});
 background-size: contain;
 background-repeat: no-repeat;
`;

export const MealLogo = styled.div`
 width: 25px;
 height: 25px;
 background:url(${mealLogo});
 background-size: contain;
 background-repeat: no-repeat;
`;

export const RecommendationLogo = styled.div`
 width: 25px;
 height: 25px;
 background:url(${recommendationLogo});
 background-size: contain;
 background-repeat: no-repeat;
`;

export const BudgetLogo = styled.div`
 width: 25px;
 height: 25px;
 background:url(${budgetLogo});
 background-size: contain;
 background-repeat: no-repeat;
`;

export const GroupLogo = styled.div`
 width: 25px;
 height: 25px;
 background:url(${groupLogo});
 background-size: contain;
 background-repeat: no-repeat;
`;

export const DietLogo = styled.div`
 width: 25px;
 height: 25px;
 background:url(${dietLogo});
 background-size: contain;
 background-repeat: no-repeat;
`;

export const PageTitle = styled.div`
font-size: 2rem;
color: #ED7D21;
margin-bottom: 15px;
`;

export const CurrentDate = styled.div`
font-size: 1.5rem;
margin-bottom: 15px;
`;

export const MainDiv = styled.div`
width: 60%;
min-width: 350px;
background: #E5E5E5;
align-self: center;
margin: 15px;
padding: 3rem;
border-radius: 5px;
`;

export const ListTitle = styled.div`
color: #757575;
text-transform: uppercase;
`;

export const RecipeList = styled.div`
display: flex;
flex-wrap: wrap;
margin: 5px 0px 20px;
padding: 0 1rem;
`;

export const RecipeWrapper = styled.button`
display: flex;
margin: 1rem;
height: 50px;
width: 300px;
padding: 0;
border: 0;
background: #E5E5E5;
text-align: left;
`;

export const RecipeImg = styled.img`
width: 50px;
min-width: 50px;
height: 100%;
border-radius: 10px;
object-fit: cover;
`;

export const RecipeText = styled.div`
margin-left: 10px;
flex-grow: 1;
color: #757575;
font-size: 0.75rem;
`;

export const RecipeTitle = styled.div`
color: #000000;
font-size: 0.80rem;
font-weight: bold;
margin-bottom: 15px;
`;

export const ModalClose = styled.button`
background: #ED7D21;
color: #ffffff;
border: 0;
border-radius: 10px;
padding: 5px;
margin-bottom: 1rem;
width: 25%;
align-self: flex-end;
`;

export const ModalContent = styled.div`
display: flex;
flex-direction: column;
`

export const ModalTitle = styled.div`
font-size: 2rem;
margin-bottom: 1rem;
text-align: center;
`;

export const ModalImg = styled.img`
height: 300px;
max-width: 400px;
margin-bottom: 1rem;
align-self: center;
border-radius: 10px;
`;

export const ModalText = styled.div`
`;
