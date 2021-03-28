import React, { Component } from 'react';
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
    MainDiv
} from './style';

class MealPlan extends Component {
    render() {
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
                <MainDiv />
            </HomeWrapper>
        )
    }
}

export default MealPlan;