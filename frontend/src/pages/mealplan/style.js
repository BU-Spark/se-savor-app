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
font-size: 2rem;
color: #FFFFFF;
min-width: 100px;
width: 60%;
padding-left: 15%;
`;

export const MainDiv = styled.div`
width: 60%;
min-width: 350px;
background: #F8F8F8;
align-self: center;
margin: 15px;
padding: 2rem;
`;

export const ListTitle = styled.div`
color: #757575;
font-size: 1.25rem;
`;

export const RecipeList = styled.div`
border: 1px solid black;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
margin: 5px 0px 20px;
padding: 0;
`;

export const RecipeWrapper = styled.div`
border: 1px solid blue;
display: flex;
margin: 1rem;
width: 300px;
`;

export const RecipeImg = styled.img`
width: 50px;
height: 50px;
border: 1px solid black;
`;

export const RecipeText = styled.div`
border: 2px solid red;
margin-left: 10px;
`;
