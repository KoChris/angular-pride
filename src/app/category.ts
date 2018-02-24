import { Year } from "./year"

export class Category {
    categoryName: string;
    actualScore: number;
    improvedScore: number;
    yearOverYear: Year[];
    suggestions: string[];
}
