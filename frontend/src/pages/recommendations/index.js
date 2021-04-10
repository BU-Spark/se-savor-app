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
                                <Like/>
                                <Bookmark/>
                            </RecipeActionsBox>
                        </RecipeText>
                    </RecipeWrapper>)}
                </RecipeList>
            </MainDiv>
        </HomeWrapper>
    )
}

export default Recommendations;