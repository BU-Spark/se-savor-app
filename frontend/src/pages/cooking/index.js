import React from 'react';
import { 
    CookingWrapper, 
    HeaderBar, 
    ArrowContainer, 
    SearchBarContainer, 
    SearchBar, 
    SearchBarText, 
    UserInfoContainer,
    FoodImage,
    PageWrapper,
    FoodHeader,
    HeadlineContainer,
    BylineContainer,
    HeadlineText,
    Label,
    LikesContainer,
    LikesText,
    InfoContainer,
    InfoNameText,
    InfoValueText,
    InfoItemContainer,
    FoodBody,
    FoodBodyItemTitle,
    TextContainer,
    IngredientsContainer,
    IngredientsText,
    DirectionsContainer,
    DirectionsText,
    DirectionsListItem,
} from './style';

function LeftArrow(props) {
    return (
        <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
                d="M0.61811 10.2047L9.72827 1.09504C10.1675 0.65582 10.88 0.65582 11.3192 1.09504L12.3819 2.1577C12.8206 2.59645 12.8211 3.30707 12.3837 3.74676L5.16358 11.0002L12.3833 18.2541C12.8211 18.6938 12.8201 19.4044 12.3814 19.8432L11.3187 20.9058C10.8795 21.345 10.167 21.345 9.7278 20.9058L0.61811 11.7957C0.178892 11.3564 0.178892 10.6439 0.61811 10.2047Z" 
                fill={props.active ? "black" : "#E2DFDC"}
            />
        </svg>
    )
    
}

function RightArrow(props) {
    return (
        <svg width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
                d="M12.3817 11.795L3.27183 20.9048C2.83247 21.3442 2.12016 21.3442 1.68084 20.9048L0.618327 19.8423C0.179718 19.4037 0.178874 18.6928 0.616452 18.2532L7.83619 10.9995L0.616452 3.74579C0.178874 3.30615 0.179718 2.59529 0.618327 2.15668L1.68084 1.09417C2.1202 0.654809 2.83251 0.654809 3.27183 1.09417L12.3817 10.204C12.821 10.6433 12.821 11.3556 12.3817 11.795Z" 
                fill={props.active ? "black" : "#E2DFDC"}
            />
        </svg>

    )
}

function SearchIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.6719 20.7516L18.9984 16.0781C18.7875 15.8672 18.5016 15.75 18.2016 15.75H17.4375C18.7313 14.0953 19.5 12.0141 19.5 9.75C19.5 4.36406 15.1359 0 9.75 0C4.36406 0 0 4.36406 0 9.75C0 15.1359 4.36406 19.5 9.75 19.5C12.0141 19.5 14.0953 18.7313 15.75 17.4375V18.2016C15.75 18.5016 15.8672 18.7875 16.0781 18.9984L20.7516 23.6719C21.1922 24.1125 21.9047 24.1125 22.3406 23.6719L23.6672 22.3453C24.1078 21.9047 24.1078 21.1922 23.6719 20.7516ZM9.75 15.75C6.43594 15.75 3.75 13.0688 3.75 9.75C3.75 6.43594 6.43125 3.75 9.75 3.75C13.0641 3.75 15.75 6.43125 15.75 9.75C15.75 13.0641 13.0688 15.75 9.75 15.75Z" fill="black"/>
        </svg>
    )
}

function BellIcon() {
    return (
        <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.5964 16.9823C19.6908 16.0092 17.9963 14.5453 17.9963 9.75C17.9963 6.10781 15.4425 3.19219 11.9991 2.47688V1.5C11.9991 0.671719 11.3278 0 10.5 0C9.67222 0 9.00097 0.671719 9.00097 1.5V2.47688C5.55753 3.19219 3.00378 6.10781 3.00378 9.75C3.00378 14.5453 1.30925 16.0092 0.403626 16.9823C0.122376 17.2847 -0.00231134 17.6461 3.24088e-05 18C0.00518866 18.7687 0.60847 19.5 1.50472 19.5H19.4953C20.3916 19.5 20.9953 18.7687 21 18C21.0024 17.6461 20.8777 17.2842 20.5964 16.9823ZM3.1655 17.25C4.16019 15.9389 5.24769 13.7658 5.25284 9.77719C5.25284 9.76781 5.25003 9.75937 5.25003 9.75C5.25003 6.85031 7.60034 4.5 10.5 4.5C13.3997 4.5 15.75 6.85031 15.75 9.75C15.75 9.75937 15.7472 9.76781 15.7472 9.77719C15.7524 13.7662 16.8399 15.9394 17.8346 17.25H3.1655ZM10.5 24C12.1557 24 13.4986 22.657 13.4986 21H7.50144C7.50144 22.657 8.84441 24 10.5 24Z" fill="black"/>
        </svg>
    )
}

function LikesIcon() {
    return (
        <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.69304 19.3846C3.69304 19.1346 3.60169 18.9183 3.419 18.7356C3.23631 18.5529 3.01996 18.4615 2.76996 18.4615C2.51996 18.4615 2.30362 18.5529 2.12092 18.7356C1.93823 18.9183 1.84689 19.1346 1.84689 19.3846C1.84689 19.6346 1.93823 19.851 2.12092 20.0337C2.30362 20.2163 2.51996 20.3077 2.76996 20.3077C3.01996 20.3077 3.23631 20.2163 3.419 20.0337C3.60169 19.851 3.69304 19.6346 3.69304 19.3846ZM20.3084 11.0769C20.3084 10.5865 20.1209 10.1562 19.7459 9.78606C19.3709 9.41587 18.943 9.23077 18.4623 9.23077H13.3853C13.3853 8.67308 13.6161 7.90625 14.0777 6.93029C14.5392 5.95433 14.77 5.18269 14.77 4.61538C14.77 3.67308 14.6161 2.97596 14.3084 2.52404C14.0007 2.07212 13.3853 1.84615 12.4623 1.84615C12.2123 2.09615 12.0296 2.50481 11.9142 3.07212C11.7988 3.63942 11.6522 4.24279 11.4743 4.88221C11.2964 5.52163 11.0103 6.04808 10.6161 6.46154C10.4046 6.68269 10.0344 7.12019 9.50554 7.77404C9.46708 7.82212 9.3565 7.96635 9.17381 8.20673C8.99112 8.44711 8.83967 8.64423 8.71948 8.79808C8.59929 8.95192 8.43342 9.15625 8.22189 9.41106C8.01035 9.66587 7.81804 9.8774 7.64496 10.0457C7.47189 10.2139 7.28679 10.3846 7.08967 10.5577C6.89256 10.7308 6.70025 10.8606 6.51275 10.9471C6.32525 11.0337 6.15458 11.0769 6.00073 11.0769H5.53919V20.3077H6.00073C6.12573 20.3077 6.27717 20.3221 6.45506 20.351C6.63294 20.3798 6.7916 20.4111 6.93102 20.4447C7.07044 20.4784 7.25314 20.5312 7.4791 20.6034C7.70506 20.6755 7.87333 20.7308 7.98391 20.7692C8.09448 20.8077 8.26516 20.8678 8.49592 20.9495C8.72669 21.0312 8.86612 21.0817 8.91419 21.101C10.943 21.8029 12.5873 22.1538 13.8469 22.1538H15.5921C17.4382 22.1538 18.3613 21.351 18.3613 19.7452C18.3613 19.4952 18.3373 19.226 18.2892 18.9375C18.5777 18.7837 18.806 18.5312 18.9743 18.1803C19.1426 17.8293 19.2267 17.476 19.2267 17.1202C19.2267 16.7644 19.1402 16.4327 18.9671 16.125C19.4767 15.6442 19.7315 15.0721 19.7315 14.4087C19.7315 14.1683 19.6834 13.9014 19.5873 13.6082C19.4911 13.3149 19.3709 13.0865 19.2267 12.9231C19.5344 12.9135 19.7916 12.6875 19.9983 12.2452C20.2051 11.8029 20.3084 11.4135 20.3084 11.0769ZM22.1546 11.0625C22.1546 11.9183 21.919 12.7019 21.4478 13.4135C21.5344 13.7308 21.5777 14.0625 21.5777 14.4087C21.5777 15.149 21.395 15.8413 21.0296 16.4856C21.0584 16.6875 21.0728 16.8942 21.0728 17.1058C21.0728 18.0769 20.7844 18.9327 20.2075 19.6731C20.2171 21.0096 19.8084 22.0649 18.9815 22.8389C18.1546 23.613 17.0632 24 15.7075 24H13.8469C12.9238 24 12.0128 23.8918 11.1137 23.6755C10.2147 23.4591 9.17381 23.1442 7.99112 22.7308C6.87573 22.3462 6.21227 22.1538 6.00073 22.1538H1.84689C1.33727 22.1538 0.902175 21.9736 0.541598 21.613C0.181021 21.2524 0.000732422 20.8173 0.000732422 20.3077V11.0769C0.000732422 10.5673 0.181021 10.1322 0.541598 9.77164C0.902175 9.41106 1.33727 9.23077 1.84689 9.23077H5.79881C6.14496 9 6.80362 8.25481 7.77477 6.99519C8.33246 6.27404 8.84689 5.65865 9.31804 5.14904C9.54881 4.90865 9.71948 4.4976 9.83006 3.91587C9.94064 3.33413 10.0873 2.72596 10.27 2.09135C10.4527 1.45673 10.7507 0.9375 11.1642 0.533654C11.5392 0.177885 11.9719 0 12.4623 0C13.27 0 13.9959 0.15625 14.6402 0.46875C15.2844 0.78125 15.7748 1.26923 16.1113 1.93269C16.4478 2.59615 16.6161 3.49038 16.6161 4.61538C16.6161 5.50962 16.3853 6.43269 15.9238 7.38462H18.4623C19.4623 7.38462 20.3277 7.75 21.0584 8.48077C21.7892 9.21154 22.1546 10.0721 22.1546 11.0625Z" fill="#97918C"/>
        </svg>
    )
}

function BookmarkIcon() {
    return (
        <svg width="22" height="28" viewBox="0 0 22 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.5 23L11 19.73L3.5 23V3.5H18.5V23ZM18.5 0.5H3.5C2.70435 0.5 1.94129 0.81607 1.37868 1.37868C0.81607 1.94129 0.5 2.70435 0.5 3.5V27.5L11 23L21.5 27.5V3.5C21.5 2.70435 21.1839 1.94129 20.6213 1.37868C20.0587 0.81607 19.2956 0.5 18.5 0.5Z" fill="#97918C"/>
        </svg>
    )
}

export default function Cooking() {
        return (
            <CookingWrapper>
                <HeaderBar>
                    <ArrowContainer>
                        <LeftArrow />
                        <RightArrow />
                    </ArrowContainer>
                    <SearchBarContainer>
                        <SearchBar>
                            <SearchIcon />
                            <SearchBarText type="text" />
                        </SearchBar>
                    </SearchBarContainer>
                    <UserInfoContainer>
                        <BellIcon />
                    </UserInfoContainer>
                </HeaderBar>
                <PageWrapper>
                    <FoodImage />
                    <FoodHeader>
                        <HeadlineContainer>
                            <HeadlineText>Chicken Penne</HeadlineText>
                            <BylineContainer>
                                <Label>Tuesday Lunch</Label>
                                <LikesContainer>
                                    <LikesIcon />
                                    <LikesText>300</LikesText>
                                </LikesContainer>
                                <BookmarkIcon />
                            </BylineContainer>
                        </HeadlineContainer>
                        <InfoContainer>
                            <InfoItemContainer>
                                <InfoNameText>SERVINGS</InfoNameText>
                                <InfoValueText>4</InfoValueText>
                            </InfoItemContainer>
                            <InfoItemContainer>
                                <InfoNameText>COOKING TIME</InfoNameText>
                                <InfoValueText>25 min.</InfoValueText>
                            </InfoItemContainer>
                        </InfoContainer>
                    </FoodHeader>
                    <FoodBody>
                        <IngredientsContainer>
                            <FoodBodyItemTitle>Ingredients</FoodBodyItemTitle>
                            <TextContainer>
                                <IngredientsText>kosher salt</IngredientsText>
                                <IngredientsText>8 oz. penne</IngredientsText>
                                <IngredientsText>
                                    2 boneless skinless chicken breasts
                                </IngredientsText>
                                <IngredientsText>
                                    Freshly ground black pepper
                                </IngredientsText>
                                <IngredientsText>
                                    1 tsp. garlic powder
                                </IngredientsText>
                            </TextContainer>
                        </IngredientsContainer>
                        <DirectionsContainer>
                            <FoodBodyItemTitle>Directions</FoodBodyItemTitle>
                            <TextContainer>
                                <DirectionsText>
                                    <DirectionsListItem>
                                        1.{" "}
                                    </DirectionsListItem>
                                    In a large pot of salted boiling water,
                                    cook pasta according to package directions
                                    until al dente. Drain and return to pot.
                                </DirectionsText>
                                <DirectionsText>
                                    <DirectionsListItem>
                                        2.{" "}
                                    </DirectionsListItem>
                                    Season chicken with salt, pepper, garlic 
                                    powder, and Italian seasoning. In a large
                                    skillet over medium-high heat, heat oil,
                                    then cook chicken until browned on both
                                    sides and cooked through. Dice chicken, set
                                    aside, and cover to keep warm.
                                </DirectionsText>
                                <DirectionsText>
                                    <DirectionsListItem>
                                        3.{" "}
                                    </DirectionsListItem>
                                    Wipe skillet clean, then melt butter over 
                                    medium-high heat. Stir in garlic and cook, 1 
                                    to 2 minutes. Sprinkle flour over butter and 
                                    garlic and stir until thick.
                                </DirectionsText>
                                <DirectionsText>
                                    <DirectionsListItem>
                                        4.{" "}
                                    </DirectionsListItem>
                                    Gradually whisk in heavy cream until a 
                                    smooth sauce is formed, then add salt and 
                                    pepper and stir in Parmesan until melted.
                                </DirectionsText>
                                <DirectionsText>
                                    <DirectionsListItem>
                                        5.{" "}
                                    </DirectionsListItem>
                                    Stir in chicken and penne, then top with 
                                    pepper, thyme or parsley, and more Parmesan. 
                                    Serve immediately.
                                </DirectionsText>
                            </TextContainer>
                        </DirectionsContainer>
                    </FoodBody>
                </PageWrapper>
            </CookingWrapper>
        )
}