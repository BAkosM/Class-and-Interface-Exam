"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Statue = void 0;
class Statue {
    constructor(title, year, price, height) {
        this.title = title;
        this.year = year;
        this.price = price;
        this.height = height;
    }
    getTitle() { return this.title; }
    getYear() { return this.year; }
    getPrice() { return this.price; }
    getHeight() { return this.height; }
    setTitle(title) {
        var conditions = /^[a-z ,]{1,}$/gmi;
        if (this.title.length > 0 && this.title.match(conditions)) {
            this.title = title;
        }
        else {
            console.log("Hiba a nével");
        }
    }
    setYear(year) {
        const now = new Date();
        const currentYear = now.getFullYear();
        if (this.year <= currentYear) {
            this.year = year;
        }
        else {
            console.log("Hiba az évvel");
        }
    }
    setPrice(price) {
        if (this.price > 1) {
            this.price = price;
        }
        else {
            console.log("Hiba az árral");
        }
    }
    setHeight(height) {
        if (this.height > 10) {
            this.height = height;
        }
        else {
            console.log("Hiba a magasságal");
        }
    }
}
exports.Statue = Statue;
