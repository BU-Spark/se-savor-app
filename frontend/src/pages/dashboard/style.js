import styled from 'styled-components';
import backgroundPic from '../../statics/mealplanPage.png';
import dashLogo from '../../statics/dashboardlogos/dashboard.png';
import mealLogo from '../../statics/dashboardlogos/mealplan.png';
import reccommendationLogo from '../../statics/dashboardlogos/recommendations.png';
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
 background:url(${reccommendationLogo});
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

export const MainDiv = styled.div`
width: 60%;
min-width: 350px;
background: #E5E5E5;
align-self: center;
margin: 15px;
padding: 3rem;
border-radius: 5px;
`;
