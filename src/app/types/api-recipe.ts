
export type ApiRecipe = {
    recipes: Recipe[];
    total: number;
    skip: number;
    limit: number;
}

export type Recipe = {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    cookTimeMinutes: number;
    image: string;
    tags: string[];
}