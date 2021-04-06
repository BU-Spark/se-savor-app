import React, { Component, useEffect, useState } from 'react';
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
    RecipeText
} from './style';

function MealPlan() {
    const [recipesList, setRecipesList] = useState();

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
                    <DashLogo />
                    <MealLogo />
                    <RecommendationLogo />
                    <BudgetLogo />
                    <GroupLogo />
                    <DietLogo />
                </PageNav>
                <PageTitle>Meal Plan</PageTitle>
            </PageInfo>
            <MainDiv>
                <ListTitle>Breakfast</ListTitle>
                <RecipeList>
                    {recipesList && recipesList.length > 0 &&
                    recipesList.map((recipe) =>
                    <RecipeWrapper>
                        <RecipeImg href=""/>
                        <RecipeText>
                            {recipe}
                        </RecipeText>
                    </RecipeWrapper>)}
                </RecipeList>
                
                <ListTitle>Lunch</ListTitle>
                <RecipeList>
                    {recipesList && recipesList.length > 0 &&
                    recipesList.map((recipe) =>
                    <RecipeWrapper>
                        <RecipeImg href=""/>
                        <RecipeText>
                            {recipe}
                        </RecipeText>
                    </RecipeWrapper>)}
                </RecipeList>
                
                <ListTitle>Dinner</ListTitle>
                <RecipeList>
                    {recipesList && recipesList.length > 0 &&
                    recipesList.map((recipe) =>
                    <RecipeWrapper>
                        <RecipeImg href=""/>
                        <RecipeText>
                            {recipe}
                        </RecipeText>
                    </RecipeWrapper>)}
                </RecipeList>
            </MainDiv>
        </HomeWrapper>
    )
}

export default MealPlan;