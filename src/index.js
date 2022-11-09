"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Statue_1 = require("./Statue");
let lista = [];
let ar = 0;
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("add").addEventListener("click", () => {
        const tit = document.getElementById("title").value;
        const yea = parseInt(document.getElementById("year").value);
        const pri = parseInt(document.getElementById("price").value);
        const hei = parseInt(document.getElementById("height").value);
        var conditions = /^[a-z ,]{1,}$/gmi;
        if (tit.match(conditions)) {
            const now = new Date();
            const currentYear = now.getFullYear();
            if (yea <= currentYear) {
                if (pri > 0) {
                    if (hei >= 10) {
                        lista = [new Statue_1.Statue(tit, yea, pri, hei)];
                        ar += pri;
                        document.getElementById("title").value = "";
                        document.getElementById("year").value = "";
                        document.getElementById("price").value = "";
                        document.getElementById("height").value = "";
                    }
                    else {
                        alert("Hiba a magasságal(min 10 cm)");
                    }
                }
                else {
                    alert("Hiba az árral(min 1Ft)");
                }
            }
            else {
                alert("Hiba az évvel(eltelt év)");
            }
        }
        else {
            alert("Hiba a nével(csak A-tól Z-ig space vagy vesző)");
        }
        document.getElementById("result").textContent = lista.length + " db mű van a rendszerben az össz áruk pedig: " + ar + "FT";
    });
});
