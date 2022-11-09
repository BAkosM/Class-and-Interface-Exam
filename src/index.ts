import { Artwork } from "./Artwork";
import { Statue } from "./Statue";

let lista: Artwork[]=[];
let ar = 0;
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementById("add")!.addEventListener("click", ()=>{
        const tit = (document.getElementById("title") as HTMLInputElement).value;
        const yea = parseInt((document.getElementById("year") as HTMLInputElement).value);
        const pri = parseInt((document.getElementById("price") as HTMLInputElement).value);
        const hei = parseInt((document.getElementById("height") as HTMLInputElement).value);  
        var conditions = /^[a-z ,]{1,}$/gmi;
        if (tit.match(conditions)) {
            const now = new Date();
            const currentYear = now.getFullYear();
            if (yea <= currentYear) {
                if (pri > 0) {
                    if (hei >= 10) {
                            lista = [new Statue(tit,yea,pri,hei)];
                            ar += pri;
                            (document.getElementById("title") as HTMLInputElement).value= "";
                            (document.getElementById("year") as HTMLInputElement).value= "";
                            (document.getElementById("price") as HTMLInputElement).value= "";
                            (document.getElementById("height") as HTMLInputElement).value= "";
                       } else {
                          alert("Hiba a magasságal(min 10 cm)");
                       }
                   } else {
                      alert("Hiba az árral(min 1Ft)");
                   }
           } else {
              alert("Hiba az évvel(eltelt év)");
           }
        } else {
            alert("Hiba a nével(csak A-tól Z-ig space vagy vesző)");
        }
        
        (document.getElementById("result") as HTMLInputElement).textContent= lista.length +" db mű van a rendszerben az össz áruk pedig: "+ar+"FT";     
    });
});