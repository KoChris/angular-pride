import { Year } from "./year"

export class Category {
    name: string;
    actualScore: number;
    improvedScore: number;
    yearOverYear: Year[];
    suggestions: string[];
}
