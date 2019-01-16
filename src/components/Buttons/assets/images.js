import beth from "./images/beth.PNG";
import birdman from "./images/birdman.PNG";
import evilMorty from "./images/evil-morty.PNG";
import goldFace from "./images/gold-face.PNG";
import goldenford from "./images/goldenford.PNG";
import jerry from "./images/jerry.PNG";
import jessica from "./images/jessica.PNG";
import misterMeseeks from "./images/mister-meseeks.PNG";
import morty from "./images/morty.PNG";
import mr from "./images/mr.PNG";
import rick from "./images/rick.PNG";
import summer from "./images/summer.PNG";

const images = [
    {
        src: beth,
        alt: beth.substr(beth.indexOf("beth"), 4)
    },
    {
        src: birdman,
        alt: birdman.substr(birdman.indexOf("birdman"), 7)
    },
    {
        src: evilMorty,
        alt: evilMorty.substr(evilMorty.indexOf("evil-morty"), 10)
    },
    {
        src: goldFace,
        alt: goldFace.substr(goldFace.indexOf("gold-face"), 9)
    },
    {
        src: goldenford,
        alt: goldenford.substr(goldenford.indexOf("goldenford"), 10)
    },
    {
        src: jerry,
        alt: jerry.substr(jerry.indexOf("jerry"), 5)
    },
    {
        src: jessica,
        alt: jessica.substr(jessica.indexOf("jessica"), 7)
    },
    {
        src: misterMeseeks,
        alt: misterMeseeks.substr(misterMeseeks.indexOf("mister-meseeks"), 14)
    },
    {
        src: morty,
        alt: morty.substr(morty.indexOf("morty"), 5)
    },
    {
        src: mr,
        alt: mr.substr(mr.indexOf("mr"), 2)
    },
    {
        src: rick,
        alt: rick.substr(rick.indexOf("rick"), 4)
    },
    {
        src: summer,
        alt: summer.substr(summer.indexOf("summer"), 6)
    }
];

export default images;