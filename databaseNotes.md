# Database Notes

- [ ] All fields are stored as single strings; it would be better to have fields like "ingredients" stored as a list of strings, where each ingredient is a separate string:<br/>
`"ingredients": "1 orange 1.25 cups all-purpose flour 3/4 cup powdered sugar 2 tsp baking powder 1/2 tsp salt 1/3 cup dried cranberries 1 cup heavy cream 1/2 tsp vanilla extract "`<br/>
change to something like:<br/>
`"ingredients": ["1 orange", "1.25 cups all-purpose flour", "3/4 cup powdered sugar", "2 tsp baking powder", "1/2 tsp salt", "1/3 cup dried cranberries", "1 cup heavy cream", "1/2 tsp vanilla extract"]`

- [ ] Inconsistent numbers, eg. sometimes values are given in decimal (0.5), other times in fractions (1/2)

- [ ] Might be better to separate units from ingredient name to make the data easier to work with<br/>
`"1/2 tsp vanilla extract"` to `[0.5, "tsp", "vanilla extract"]`

- [ ] These recipes have the field name "ingredients " instead of "ingredients":
    * Homemade Crepes
    * Tortilla Baked Eggs
    * Homemade BBQ Chicken Pizza
    * Tomato Herb Soup
    * Spinach Rice with Feta
    * Ground Beef Hummus Bowl
    * Slow Cooker Hamburger Stew
    * Herb Butter Chicken Thighs
    * Creamy Tomato Pasta with Sausage
    * Pineapple Orange Julius
    * Tuna Salad
    * Tofu Stir Fry
    * Garlic Butter Shrimp
    * French Toast Mug
    * Yogurt Banana Bread
    * Baked Beef and Black Bean Tacos
    * Cumin Lime Coleslaw
    * White Bean Salad
    * Creamy Sun Dried Tomato Pasta
    * Salmon with Zucchini
    * Turkey and Rice Skillet
    * Protein Pineapple Smoothie
    * Chocolate Banana Muffins
    * Scrambled Eggs with Vegetables
    * Honey Vanilla Cottage Cheese Fruit Dip