import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
    ListTitle,
    RecipeList,
    RecipeWrapper,
    RecipeImg,
    RecipeText,
    RecipeTitle,
    CurrentDate,
} from './style';

function MealPlan() {
    const [recipesList, setRecipesList] = useState();
    let date = Date();
    date = date.split(' ');

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
        getData();
    }, [])

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
                <PageTitle>Meal Plan</PageTitle>
                <CurrentDate>{date[0]}, {date[2]} {date[1]}</CurrentDate>
                <ListTitle>Breakfast</ListTitle>
                <RecipeList>
                    {recipesList && recipesList.length > 0 &&
                    recipesList.slice(0,5).map((recipe) =>
                    <RecipeWrapper>
                        <RecipeImg src={recipe.imageLink}/>
                        <RecipeText>
                            <RecipeTitle>{recipe.recipeName}</RecipeTitle>
                            Servings {recipe.estimatedServings}
                        </RecipeText>
                    </RecipeWrapper>)}
                </RecipeList>

                <ListTitle>Lunch</ListTitle>
                <RecipeList>
                    {recipesList && recipesList.length > 0 &&
                    recipesList.slice(5,10).map((recipe) =>
                    <RecipeWrapper>
                        <RecipeImg src={recipe.imageLink}/>
                        <RecipeText>
                            <RecipeTitle>{recipe.recipeName}</RecipeTitle>
                            Servings {recipe.estimatedServings}
                        </RecipeText>
                    </RecipeWrapper>)}
                </RecipeList>
                
                <ListTitle>Dinner</ListTitle>
                <RecipeList>
                    {recipesList && recipesList.length > 0 &&
                    recipesList.slice(10,15).map((recipe) =>
                    <RecipeWrapper>
                        <RecipeImg src={recipe.imageLink}/>
                        <RecipeText>
                            <RecipeTitle>{recipe.recipeName}</RecipeTitle>
                            Servings {recipe.estimatedServings}
                        </RecipeText>
                    </RecipeWrapper>)}
                </RecipeList>
            </MainDiv>
        </HomeWrapper>
    )
}

export default MealPlan;