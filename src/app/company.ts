import { Category } from "./category";

export interface Company {
    name: string;
    overallScore: number;
    improvedScore: number;
	categories: Category[]
}