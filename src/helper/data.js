import Joi from "joi";

export const recipeCategories = [
  {
    id: 1,
    label: "Breakfast",
    path: "breakfast",
    images: ["/images/breakfast.jpeg"],
  },
  {
    id: 2,
    label: "Salads",
    path: "salads",
    images: ["/images/breakfast.jpeg"],
  },
  {
    id: 3,
    label: "Soups",
    path: "soups",
    images: ["/images/breakfast.jpeg"],
  },
  {
    id: 4,
    label: "Desserts",
    path: "desserts",
    images: ["/images/breakfast.jpeg"],
  },
  {
    id: 5,
    label: "Main Dishes",
    path: "main-dishes",
    images: ["/images/breakfast.jpeg"],
  },
];
export const defaultRecipes = [
  {
    id: 0,
    title: "Salad-Stuffed Peppers",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2021/05/07/0/FNK_SALAD_STUFFED_PEPPERS_H_f_s4x3.jpg.rend.hgtvcom.826.620.suffix/1620410536567.jpeg",
    description:
      "Stuffed peppers are a comfort food classic. My lightened-up version keeps everything you love — the tender peppers, the flavorful cheese and the aroma that floods your kitchen — while putting a fresh twist on this timeless dish. It all pays tribute to my time living in Spain, with ingredients that will transport you to the Mediterranean. Serve with a glass of Tempranillo for the perfect dinner.",
    category: "salads",
  },
  {
    id: 1,
    title: "Air Fryer Parmesan Chicken with Broccoli",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/11/16/0/FNK_Air-Fryer-Parmesan-Chicken-Broccoli_H1_s4x3.jpg.rend.hgtvcom.826.620.suffix/1605561210481.jpeg",
    description:
      "This chicken gets incredibly crunchy, thanks to a light coating of panko and Parmesan and a quick cook in the air fryer! Serve it with charred broccoli and a tangy yogurt sauce for a healthy and complete meal you can throw together any day of the week.",
    category: "main-dishes",
  },
  {
    id: 2,
    title: "Berry Crisp Dump Cake",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/3/1/0/KC1211H_Berry-Crisp-Dump-Cake_s4x3.jpg.rend.hgtvcom.966.725.suffix/1488386581758.jpeg",
    description:
      "When you need a no-fuss dessert there’s nothing better than a one-pan, dump-and-bake recipe like Katie’s berry crisp. Just layer a few simple ingredients, bake, and then serve warm with a scoop of ice cream.",
    category: "desserts",
  },
  {
    id: 3,
    title: "Tater Tot Breakfast Casserole",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/12/10/0/WU1711H_Tater-Tot-Breakfast-Casserole_s4x3.jpg.rend.hgtvcom.1280.720.suffix/1568222165812.jpeg",
    description:
      "Line up the tater tots in a buttered 9-by-13-inch baking dish.",
    category: "breakfast",
  },
  {
    id: 4,
    title: "Breakfast Garbage Bread",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/8/11/0/FNK_Garbage-Breads-Breakfast_s4x3.jpg.rend.hgtvcom.1280.720.suffix/1471068327945.jpeg",
    description:
      "Crumbled bacon and breakfast sausage mingle with potato tots, eggs and melted American cheese in this garbage bread, which is reminiscent of a breakfast sandwich or burrito. Serve it with lots of hot sauce or ketchup for early-morning tailgating or for a portable breakfast on a camping trip.",
    category: "breakfast",
  },
  {
    id: 5,
    title: "Minestrone Soup",
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/11/1/2/FNM_120110-Ask-Ellie-001_s4x3.jpg.rend.hgtvcom.826.620.suffix/1580138506301.jpeg",
    description:
      "Heat the olive oil in a large pot over medium-high heat. Add the onion and cook until translucent, about 4 minutes. Add the garlic and cook 30 seconds. Add the celery and carrot and cook until they begin to soften, about 5 minutes. Stir in the green beans, dried oregano and basil, 3/4 teaspoon salt, and pepper to taste; cook 3 more minutes.",
    category: "soups",
  },
];

export const schema = Joi.object({
  title: Joi.string()
    .min(3)
    .required()
    .error(new Error("Please enter recipe title.")),
  image: Joi.string()
    .regex(/^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/)
    .required()
    .messages({
      "string.pattern.base": "Please enter a valid image url of your recipe.",
    }),
  description: Joi.string()
    .min(10)
    .required()
    .error(
      new Error(
        "Please enter well described recipe description.Minimum description length is 10 characters."
      )
    ),
  category: Joi.string()
    .required()
    .error(new Error("Please select a recipe category.")),
});

export const loginSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: {} })
    .required()
    .error(new Error("Please enter your email.")),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .error(new Error("Please enter your password.")),
});
