import { Artwork } from "./Artwork";


export class Statue implements Artwork {
    title: string;
    year: number;
    price: number;//FT
    height: number;//cm

    constructor(title: string, year: number, price: number, height: number) {
        this.title = title;
        this.year = year;
        this.price = price;
        this.height = height;
    }
    
}