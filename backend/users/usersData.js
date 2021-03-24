// Mock data until we set up the users database
const usersData = [
    {
      id: 0,
      fname: 'Some',
      lname: 'One',
      budget: 400,
      budgetCurrency: 'USD',
      groupSize: 4,
      dietaryRestrictions: [],
      groceryList: [],
      mealPlans: [],
    },
    {
        id: 1,
        fname: 'Second',
        lname: 'Person',
        budget: 250,
        budgetCurrency: 'USD',
        groupSize: 1,
        dietaryRestrictions: ['vegetarian'],
        groceryList: [],
        mealPlans: [],
      },
 ];

module.exports = usersData;
 