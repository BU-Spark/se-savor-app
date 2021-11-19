import styled from 'styled-components';
import dashLogo from '../../statics/dashboardlogos/dashboard.png';
import mealLogo from '../../statics/dashboardlogos/mealplan.png';
import recommendationLogo from '../../statics/dashboardlogos/recommendations.png';
import budgetLogo from '../../statics/dashboardlogos/budget.png';
import groupLogo from '../../statics/dashboardlogos/groupsize.png';
import dietLogo from '../../statics/dashboardlogos/dietaryrestrictions.png';
import thumbsUpLogo from '../../statics/thumbsUp.png';
import editLogo from '../../statics/editLogo.png';

export const HomeWrapper = styled.div`
width: 100%;
height: 100%;
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
font-family: Avenir LT Std;
font-style: normal;
font-weight: 750;
font-size: 45px;
line-height: 58px;

color: #000000;

width: 79%;
height: 5%;
margin-bottom: 20px;
`;

export const CurrentDate = styled.div`
color: #635E5A;
font-family: Avenir LT Std;
font-weight: 750;
font-style: normal;
font-size: 32px;
line-height: 43.2px;
margin-bottom: 10px;
width: 100%;
`;

export const MainDiv = styled.div`
width: 65%;
min-width: 350px;
background: #F8F7F7;
margin-left: 17%;
margin-right: 18%;
padding: 1rem;
border-radius: 5px;
display: flex;
flex-direction: row;
flex-wrap: wrap;
`;

export const MealType = styled.div`
color: #E2DFDC;
font-family: Avenir LT Std;
font-weight: 400;
font-style: normal;
font-size: 24px;
line-height: 28.8px;
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
margin-top: 1rem;
height: 50px;
width: 300px;
padding: 0;
border: 0;
text-align: left;
background-color: transparent;
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
color: #635E5A;
font-family: Avenir LT Std;
font-weight: 750;
font-style: normal;
font-size: 15px;
font-weight: bold;
line-height: 21.6px;
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

export const Meal = styled.div`
width: 21%;
height: 11%;
margin-top: 10px;
margin-right: 11%;
margin-bottom: 20px;
`;

export const ThumbsUpLogo = styled.div`
width: 15px;
height: 15px;
background:url(${thumbsUpLogo});
background-repeat: no-repeat;
`;

export const EditMealPlan = styled.button`
width: 21%;
height: 25px;
border-top: 20px;
border-right: 10px;
background: #FF7613;
border-radius: 22px;
display: flex;
flex-direction: row;
`;

export const EditLogo = styled.img`
width: 18%;
height 100%;
background: url(${editLogo});
background-repeat: no-repeat;
vertical-align: middle;
object-fit: contain;
`;

export const EditMealPlanText = styled.div`
width: 80%;
height: 100%
font-family: Avenir LT Std;
font-style: normal;
font-weight: 750;
font-size: 85%;
color: #FFFFFF;
padding-top: 3px;
`;

