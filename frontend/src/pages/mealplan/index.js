import React, { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import { Link, useHistory } from 'react-router-dom';
import Modal from 'react-modal';
import {
    HomeWrapper,
    PageTitle,
    MainDiv,
    MealType,
    Meal,
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
    ThumbsUpLogo,
    EditMealPlan,
    EditLogo,
    EditMealPlanText,
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
            <MainDiv>
                <PageTitle>Meal Plan</PageTitle>
                <EditMealPlan>
                    <EditLogo/>
                    <EditMealPlanText>Edit/Change Meal Plan</EditMealPlanText>
                </EditMealPlan>
                <CurrentDate>Tuesday</CurrentDate>
                <Meal>
                    <MealType>Breakfast</MealType>
                    {breakfastRecipes && breakfastRecipes.length > 0 &&
                    <RecipeWrapper onClick={() => openModal(breakfastRecipes[0])}>
                        <RecipeImg src={breakfastRecipes[0].imageLink}/>
                        <RecipeText>
                            <RecipeTitle>{breakfastRecipes[0].recipeName}</RecipeTitle>
                            <ThumbsUpLogo></ThumbsUpLogo>
                        </RecipeText>
                    </RecipeWrapper>}
                </Meal>

                <Meal>
                    <MealType>Lunch</MealType>
                    {lunchRecipes && lunchRecipes.length > 0 &&
                    <RecipeWrapper onClick={() => openModal(lunchRecipes[0])}>
                        <RecipeImg src={lunchRecipes[0].imageLink}/>
                        <RecipeText>
                            <RecipeTitle>{lunchRecipes[0].recipeName}</RecipeTitle>
                        </RecipeText>
                    </RecipeWrapper>}
                </Meal>

                <Meal>
                    <MealType>Dinner</MealType>
                    {dinnerRecipes && dinnerRecipes.length > 0 &&
                    <RecipeWrapper onClick={() => openModal(dinnerRecipes[0])}>
                        <RecipeImg src={dinnerRecipes[0].imageLink}/>
                        <RecipeText>
                            <RecipeTitle>{dinnerRecipes[0].recipeName}</RecipeTitle>
                        </RecipeText>
                    </RecipeWrapper>}
                </Meal>

                <CurrentDate>Wednesday</CurrentDate>
                <Meal>
                    <MealType>Breakfast</MealType>
                    {breakfastRecipes && breakfastRecipes.length > 0 &&
                    <RecipeWrapper onClick={() => openModal(breakfastRecipes[1])}>
                        <RecipeImg src={breakfastRecipes[1].imageLink}/>
                        <RecipeText>
                            <RecipeTitle>{breakfastRecipes[1].recipeName}</RecipeTitle>
                        </RecipeText>
                    </RecipeWrapper>}
                </Meal>

                <Meal>
                    <MealType>Lunch</MealType>
                    {lunchRecipes && lunchRecipes.length > 0 &&
                    <RecipeWrapper onClick={() => openModal(lunchRecipes[1])}>
                        <RecipeImg src={lunchRecipes[1].imageLink}/>
                        <RecipeText>
                            <RecipeTitle>{lunchRecipes[1].recipeName}</RecipeTitle>
                        </RecipeText>
                    </RecipeWrapper>}
                </Meal>

                <Meal>
                    <MealType>Dinner</MealType>
                    {dinnerRecipes && dinnerRecipes.length > 0 &&
                    <RecipeWrapper onClick={() => openModal(dinnerRecipes[1])}>
                        <RecipeImg src={dinnerRecipes[1].imageLink}/>
                        <RecipeText>
                            <RecipeTitle>{dinnerRecipes[1].recipeName}</RecipeTitle>
                        </RecipeText>
                    </RecipeWrapper>}
                </Meal>

                <CurrentDate>Thursday</CurrentDate>
                <Meal>
                    <MealType>Breakfast</MealType>
                    {breakfastRecipes && breakfastRecipes.length > 0 &&
                    <RecipeWrapper onClick={() => openModal(breakfastRecipes[2])}>
                        <RecipeImg src={breakfastRecipes[2].imageLink}/>
                        <RecipeText>
                            <RecipeTitle>{breakfastRecipes[2].recipeName}</RecipeTitle>
                        </RecipeText>
                    </RecipeWrapper>}
                </Meal>

                <Meal>
                    <MealType>Lunch</MealType>
                    {lunchRecipes && lunchRecipes.length > 0 &&
                    <RecipeWrapper onClick={() => openModal(lunchRecipes[2])}>
                        <RecipeImg src={lunchRecipes[2].imageLink}/>
                        <RecipeText>
                            <RecipeTitle>{lunchRecipes[2].recipeName}</RecipeTitle>
                        </RecipeText>
                    </RecipeWrapper>}
                </Meal>

                <Meal>
                    <MealType>Dinner</MealType>
                    {dinnerRecipes && dinnerRecipes.length > 0 &&
                    <RecipeWrapper onClick={() => openModal(dinnerRecipes[2])}>
                        <RecipeImg src={dinnerRecipes[2].imageLink}/>
                        <RecipeText>
                            <RecipeTitle>{dinnerRecipes[2].recipeName}</RecipeTitle>
                        </RecipeText>
                    </RecipeWrapper>}
                </Meal>
                    
            </MainDiv>
        </HomeWrapper>
    )
}

export default MealPlan;