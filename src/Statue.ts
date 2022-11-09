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
    //Getter Setter try
    /*getTitle(): string { return this.title; }
    getYear(): number { return this.year; }
    getPrice(): number { return this.price; }
    getHeight(): number { return this.height; }
    setTitle(title: string) {
        var conditions = /^[a-z ,]{1,}$/gmi;
        if (this.title.length > 0 && this.title.match(conditions)) {
         this.title = title; 
        } else {
            console.log("Hiba a nével");
        }
    }
    setYear(year: number) {
        const now = new Date();
        const currentYear = now.getFullYear();
        if (this.year <= currentYear) {
            this.year = year; 
           } else {
              console.log("Hiba az évvel");
           }
    }
    setPrice(price: number){
        if (this.price > 1) {
            this.price = price; 
           } else {
              console.log("Hiba az árral");
           }
    }
    setHeight(height: number){
        if (this.height > 10) {
         this.height = height; 
        } else {
           console.log("Hiba a magasságal");
        }
    }*/
}