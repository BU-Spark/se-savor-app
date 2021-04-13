import React, { useEffect, useState,  } from 'react';
import { useSelector } from "react-redux";
import { Link, useHistory } from 'react-router-dom';
import Modal from 'react-modal';
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
    ModalClose,
    ModalTitle,
    ModalImg,
    ModalText,
    ModalContent,
    DashboardDiv,
    DashboardDivTitle,
    DashboardSettings,
    SettingsDiv,
    SettingsButton
} from './style';

function Dashboard() {
    const [recipesList, setRecipesList] = useState();
    const [modalIsOpen,setIsOpen] = useState(false);
    const [modalRecipe,setModalRecipe] = useState();
    const loginStatus = useSelector(state => state.getIn(['login','login']));
    const history = useHistory()

    let date = Date();
    date = date.split(' ');

    const modalStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          display               : 'flex',
          flexDirection         : 'column',
          alignItems            : 'center',
          height                : '75%',
          width                 : '90%',
        },
    };

    function openModal(recipe) {
        setIsOpen(true);
        setModalRecipe(recipe);
    }

    function closeModal() {
        setIsOpen(false);
    }

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
    }, [])

    return (
        <HomeWrapper>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={modalStyles}
            contentLabel="Recipe Modal"
            >
                <ModalClose onClick={closeModal}>Close</ModalClose>
                {modalRecipe ?
                <ModalContent>
                    <ModalTitle>{modalRecipe.recipeName}</ModalTitle>
                    <ModalImg src={modalRecipe.imageLink} />
                    <ModalText>{modalRecipe.instructions}</ModalText>
                </ModalContent>
                : <div></div>}
            </Modal>
            <PageInfo>
                <PageNav>
                    <Link to="/dashboard"><DashLogo /></Link>
                    <Link to="/mealplan"><MealLogo /></Link>
                    <Link to="/recommendations"><RecommendationLogo /></Link>
                    <Link to=""><BudgetLogo /></Link>
                    <Link to=""><GroupLogo /></Link>
                    <Link to=""><DietLogo /></Link>
                </PageNav>
                <PageTitle>Dashboard</PageTitle>
            </PageInfo>
            <MainDiv>
                <DashboardDiv>
                    <DashboardDivTitle>Meal Plan</DashboardDivTitle>
                    <CurrentDate>{date[0]}, {date[2]} {date[1]}</CurrentDate>
                    <ListTitle>Breakfast</ListTitle>
                    <RecipeList>
                        {recipesList && recipesList.length > 0 &&
                        recipesList.slice(0,5).map((recipe) =>
                        <RecipeWrapper onClick={() => openModal(recipe)}>
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
                        <RecipeWrapper onClick={() => openModal(recipe)}>
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
                        <RecipeWrapper onClick={() => openModal(recipe)}>
                            <RecipeImg src={recipe.imageLink}/>
                            <RecipeText>
                                <RecipeTitle>{recipe.recipeName}</RecipeTitle>
                                Servings {recipe.estimatedServings}
                            </RecipeText>
                        </RecipeWrapper>)}
                    </RecipeList>
                </DashboardDiv>
                <DashboardDiv>
                    <DashboardDivTitle>Ingredients</DashboardDivTitle>
                </DashboardDiv>
                <DashboardSettings>
                    <SettingsDiv>
                        <DashboardDivTitle>Budget</DashboardDivTitle>
                        <SettingsButton>Current budget</SettingsButton>
                    </SettingsDiv>
                    <SettingsDiv>
                        <DashboardDivTitle>Group Size</DashboardDivTitle>
                        <SettingsButton>Current group size</SettingsButton>
                    </SettingsDiv>
                    <SettingsDiv>
                        <DashboardDivTitle>Dietary Restrictions</DashboardDivTitle>
                        <SettingsButton>Current dietary restrictions</SettingsButton>
                    </SettingsDiv>
                </DashboardSettings>
            </MainDiv>
        </HomeWrapper>
    )
}

export default Dashboard;