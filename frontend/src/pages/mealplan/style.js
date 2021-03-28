import styled from 'styled-components';
import backgroundPic from '../../statics/mealplan.png';
import dashLogo from '../../statics/dashboardlogos/dashboard.png';
import mealLogo from '../../statics/dashboardlogos/mealplan.png';
import reccommendationLogo from '../../statics/dashboardlogos/recommendations.png';
import budgetLogo from '../../statics/dashboardlogos/budget.png';
import groupLogo from '../../statics/dashboardlogos/groupsize.png';
import dietLogo from '../../statics/dashboardlogos/dietaryrestrictions.png';

export const HomeWrapper = styled.div`
min-height:calc(100vh - 368px);
//height: 900px;
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
background: #EE7B22;
`;

export const DashLogo = styled.a.attrs({
    href: '/'
})`
 width: 25px;
 height: 25px;
 margin-left: 35px;
 background:url(${dashLogo});
 background-size: contain;
`;

export const MealLogo = styled.a.attrs({
    href: '/'
})`
 width: 25px;
 height: 25px;
 background:url(${mealLogo});
 background-size: contain;
`;

export const RecommendationLogo = styled.a.attrs({
    href: '/'
})`
 width: 25px;
 height: 25px;
 background:url(${reccommendationLogo});
 background-size: contain;
`;

export const BudgetLogo = styled.a.attrs({
    href: '/'
})`
 width: 25px;
 height: 25px;
 background:url(${budgetLogo});
 background-size: contain;
`;

export const GroupLogo = styled.a.attrs({
    href: '/'
})`
 width: 25px;
 height: 25px;
 background:url(${groupLogo});
 background-size: contain;
`;

export const DietLogo = styled.a.attrs({
    href: '/'
})`
 width: 25px;
 height: 25px;
 background:url(${dietLogo});
 background-size: contain;
`;

export const PageTitle = styled.div`
font-size: 25px;
color: #FFFFFF;
flex-grow: 1;
border: 1px solid red;
`;

export const MainDiv = styled.div`
height: 500px;
width: 500px;
background: #FFFFFF;
align-self: center;
font-size: 25px;
margin: 15px;
`;
