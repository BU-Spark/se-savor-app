import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { Link, useHistory } from 'react-router-dom';
import {
    HomeWrapper,
    PageInfo,
    PageNav,
    DashLogo,
    MealLogo,
    RecommendationLogo,
    BudgetLogo,
    GroupLogo,
    DietLogo,
    PageTitle,
    MainDiv,
    RecipeList,
    RecipeWrapper,
    RecipeImg,
    RecipeText,
    RecipeTitle,
    Like,
    Bookmark,
    RecipeActionsBox,
    DisplayActionsBox,
    Button,
} from './style';

function Recommendations() {
    const [recipesList, setRecipesList] = useState();
    const loginStatus = useSelector(state => state.getIn(['login','login']));
    const history = useHistory();

    const getData = async () => {
        // Get our dummy data from the public/api folder
        const data = await fetch('./api/dummy.json',
                                {
                                    headers: {
                                        'Content-Type': 'application/json',
                                        'Accept': 'application/json'
                                }});

        // Turn the response object back into json
        const dataJson = await data.json();
        setRecipesList(dataJson.recipes);

    }

    // When the page is first loaded, this function will fire
    useEffect(() => {
        if (!loginStatus) {
            history.push("/login")
            return
        }
        getData();
    }, [history, loginStatus])

    return (
        <HomeWrapper>
            <PageInfo>
                <PageNav>
                    <Link to="/dashboard"><DashLogo /></Link>
                    <Link to="/mealplan"><MealLogo /></Link>
                    <Link to="/recommendations"><RecommendationLogo /></Link>
                    <Link to=""><BudgetLogo /></Link>
                    <Link to=""><GroupLogo /></Link>
                    <Link to=""><DietLogo /></Link>
                </PageNav>
            </PageInfo>
            <MainDiv>
                <PageTitle>Recommendations</PageTitle>
                <DisplayActionsBox>
                    <Button>Filter</Button>
                    <Button>Sort</Button>
                </DisplayActionsBox>
                <RecipeList>
                    {recipesList && recipesList.length > 0 &&
                    recipesList.slice(0,5).map((recipe) =>
                    <RecipeWrapper>
                        <RecipeImg src={recipe.imageLink}/>
                        <RecipeText>
                            <RecipeTitle>{recipe.recipeName}</RecipeTitle>
                            {recipe.instructions.slice(0,50)}
                            <RecipeActionsBox>
                                <Link to=""><Like /></Link>
                                <Link to=""><Bookmark /></Link>
                            </RecipeActionsBox>
                        </RecipeText>
                    </RecipeWrapper>)}
                </RecipeList>
            </MainDiv>
        </HomeWrapper>
    )
}

export default Recommendations;