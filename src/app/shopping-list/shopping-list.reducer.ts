import { Ingredient } from "../shared/ingredient.model";

const initialState = {
  ingredients: [
    new Ingredient("Apple", 5),
    new Ingredient("Tomatoes", 10)
  ]
}

export function shoppingListReducer(state = initialState, action) {
  switch (action.type) {}
}