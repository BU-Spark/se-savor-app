import React, { useEffect, useState, useCallback  } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from 'react-router-dom';
import { auth, firestoredb } from '../../firebase'
import { actionCreators} from '../login/store';
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
    SettingsButton,
    Ingredient
} from './style';

function Dashboard() {
    const [breakfastRecipes, setBreakfastRecipes] = useState();
    const [lunchRecipes, setLunchRecipes] = useState();
    const [dinnerRecipes, setDinnerRecipes] = useState();
    const [ingredientsList, setIngredientsList] = useState();
    const [budget, setBudget] = useState();
    const [groupSize, setGroupSize] = useState();
    const [dietaryRestriction, setDietaryRestriction] = useState();
    const [modalIsOpen,setIsOpen] = useState(false);
    const [modalRecipe,setModalRecipe] = useState();
    const loginStatus = useSelector(state => state.getIn(['login','login']));
    const history = useHistory();
    const dispatch = useDispatch();

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

    // Memoize function to avoid doing multiple fetches for the data
    const getData = useCallback(async () => {
        // Get the recipes from Firestore
        const recipesRef = await firestoredb.collection("Recipes");
        const recipes = await recipesRef.get();
        const breakfast = [];
        const lunch = [];
        const dinner = [];
        recipes.forEach(doc => {
            let data = doc.data()
            let type = data.recipeCategory;
            switch (type) {
                case "Breakfast":
                    breakfast.push(data);
                    break;
                case "Lunch":
                    lunch.push(data);
                    break;
                case "Dinner":
                    dinner.push(data);
                    break;
                default:
                    break;
            }
        });
        setBreakfastRecipes(breakfast);
        setLunchRecipes(lunch);
        setDinnerRecipes(dinner);

        // Get this user's info from Firestore and the update state variables
        const docRef = await firestoredb.collection("Users").doc(auth.currentUser.uid);
        const doc = await docRef.get()
        if (doc.exists) {
            setBudget(doc.data().budget)
            setGroupSize(doc.data().size)
            setDietaryRestriction(doc.data().dietary)
        }

        // At the moment, the app is using dummy data for the ingredients list.
        const data = await fetch('./api/dummy.json',
                                {
                                    headers: {
                                        'Content-Type': 'application/json',
                                        'Accept': 'application/json'
                                }});
        const dataJson = await data.json();
        setIngredientsList(dataJson.grocery.items);
        
        // Store fetched data so other components can use it
        dispatch(actionCreators.setData(breakfastRecipes, lunchRecipes, dinnerRecipes, budget, groupSize, dietaryRestriction))

    // Don't put breakfastRecipes or any of the other lists in the dependencies!
    // I'm not sure why but it'll make getData reload and do unnecessary fetches.
    // Currently, with just budget in the dependencies this is what happens:
    // page loads -> useEffect fires for the first time -> getData is called ->
    // recipe and user data are fetched -> recipe and user state variables are updated ->
    // since budget is updated, getData is updated ->
    // useEffect fires again because getData is a dependency ->
    // memoized getData is called since budget has not changed since it was first updated
    // eslint-disable-next-line
    }, [budget])

    // When the page is first loaded, this function will fire
    useEffect(() => {
        if (!loginStatus) {
            history.push("/login")
            return
        }
        getData();
    }, [history, loginStatus, getData])

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
                <PageTitle>Dashboard</PageTitle>
            </PageInfo>
            <MainDiv>
                <DashboardDiv>
                    <DashboardDivTitle>Meal Plan</DashboardDivTitle>
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
                </DashboardDiv>
                <DashboardDiv>
                    <DashboardDivTitle>Ingredients</DashboardDivTitle>
                    {ingredientsList && ingredientsList.length > 0 &&
                    ingredientsList.map((ingredient) =>
                    <Ingredient> {ingredient} </Ingredient>)}
                </DashboardDiv>
                <DashboardSettings>
                    <SettingsDiv>
                        <DashboardDivTitle>Budget</DashboardDivTitle>
                        {budget && <SettingsButton>{budget}</SettingsButton>}
                    </SettingsDiv>
                    <SettingsDiv>
                        <DashboardDivTitle>Group Size</DashboardDivTitle>
                        {groupSize && <SettingsButton>{groupSize}</SettingsButton>}
                    </SettingsDiv>
                    <SettingsDiv>
                        <DashboardDivTitle>Dietary Restrictions</DashboardDivTitle>
                        {dietaryRestriction && <SettingsButton>{dietaryRestriction}</SettingsButton>}
                    </SettingsDiv>
                </DashboardSettings>
            </MainDiv>
        </HomeWrapper>
    )
}

export default Dashboard;