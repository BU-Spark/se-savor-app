import React, { useEffect, useState } from 'react';
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
} from './style';

Modal.setAppElement("#root");

function MealPlan() {
    const [breakfastRecipes, setBreakfastRecipes] = useState();
    const [lunchRecipes, setLunchRecipes] = useState();
    const [dinnerRecipes, setDinnerRecipes] = useState();
    const [modalIsOpen,setIsOpen] = useState(false);
    const [modalRecipe,setModalRecipe] = useState();
    const loginStatus = useSelector(state => state.getIn(['login','login']));
    const data = useSelector(state => state.getIn(['login','data']));
    const history = useHistory();

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

    // When the page is first loaded, this function will fire
    useEffect(() => {
        if (!loginStatus) {
            history.push("/login")
            return
        }
        setBreakfastRecipes(data.breakfast);
        setLunchRecipes(data.lunch);
        setDinnerRecipes(data.dinner);
    }, [history, loginStatus, data])

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
                    <ModalText>
                        <strong>Instructions:</strong>{modalRecipe.instructions} <br/>
                        <strong>Ingredients:</strong>{modalRecipe.ingredients}
                    </ModalText>
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
            </PageInfo>
            <MainDiv>
                <PageTitle>Meal Plan</PageTitle>
                <CurrentDate>{date[0]}, {date[2]} {date[1]}</CurrentDate>
                <ListTitle>Breakfast</ListTitle>
                    <RecipeList>
                        {breakfastRecipes && breakfastRecipes.length > 0 &&
                        breakfastRecipes.map((recipe) =>
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
                        {lunchRecipes && lunchRecipes.length > 0 &&
                        lunchRecipes.map((recipe) =>
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
                        {dinnerRecipes && dinnerRecipes.length > 0 &&
                        dinnerRecipes.map((recipe) =>
                        <RecipeWrapper onClick={() => openModal(recipe)}>
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