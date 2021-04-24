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
@media (max-width: 750px) {
    flex-direction: column;
}
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
color: #fff;
margin: 0 0 15px 15px;
`;

export const MainDiv = styled.div`
display: flex;
justify-content: center;
border-radius: 5px;
@media (max-width: 990px) {
    flex-direction: column;
    align-items: center;
    padding: 0 2rem;
}
`;

export const CurrentDate = styled.div`
margin-bottom: 15px;
font-weight: bold;
`;

export const ListTitle = styled.div`
color: #757575;
text-transform: uppercase;
`;

export const RecipeList = styled.div`
display: flex;
flex-wrap: wrap;
margin: 5px 0px 20px;
`;

export const RecipeWrapper = styled.button`
display: flex;
margin: 1rem 0;
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

export const DashboardDiv = styled.div`
width: 30%;
min-width: 300px;
max-height: 500px;
background: #E5E5E5;
margin: 15px;
padding: 1rem;
border-radius: 5px;
overflow: auto;

@media (max-width: 990px) {
    width: 100%
}
`;

export const DashboardDivTitle = styled.div`
color: #ED7D21;
font-size: 1.5rem;
margin-bottom: 1rem;
`

export const DashboardSettings = styled.div`
width: 30%;
min-width: 300px;
max-height: 500px;
margin: 15px;
border-radius: 5px;

@media (max-width: 990px) {
    width: 100%
}
display: flex;
flex-direction: column;
justify-content: space-between;
`;

export const SettingsDiv = styled.div`
background: #E5E5E5;
padding: 1rem;
border-radius: 5px;
`;

export const SettingsButton = styled.button`
background: #000;
color: #fff;
border: none;
border-radius: 5px;
padding: 0.5rem 1rem;
`;

export const Ingredient = styled.div`
margin: 0 0 1rem 0;
color: #757575;
font-size: 0.75rem;
`;
