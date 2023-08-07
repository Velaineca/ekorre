window.onload=SGlicznik;

function SGlicznik() {
    setTimeout(function() { SG_narysujSekcja1() }, 10);
    setTimeout(function() { SG_narysujSekcja2() }, 1000);
    setTimeout(function() { SG_narysujSekcja3() }, 2000);
}

// ---------------------------------------------------------------------------------------------RYSOWANIE WEKTORÓW
//SEKCJA 1
function SG_narysujSekcja1() {
    let SGdomek = document.querySelector('.SG_vectorDomek');
    let SGdomekBiale = document.querySelector('.SG_vectorDomekBiale');
    let SGmPasek = document.querySelector('.SG_m_pasek');
    let SGtekstS1 = document.querySelector('#SG_S1_tytul');

    SGrysujVector(SGdomek,'pasek');
    setTimeout(function() { SGrysujVector(SGdomekBiale,'biale') }, 700);
    SGrysujVector(SGmPasek,'pasek');
    setTimeout(function() { SGrysujVector(SGtekstS1,'tekst') }, 600);
}

//https://www.w3schools.com/js/js_htmldom_animate.asp
//SEKCJA 2
function SG_narysujSekcja2() {
    let SGzarowka = document.querySelector('.SG_vectorPasek');
    let SGzarowkaBiale = document.querySelector('.SG_vectorPasekBiale');
    let SGtekstS2 = document.querySelector('#SG_S2_tekst');
    SGrysujVector(SGzarowka,'pasek');

    //vector żarówka
    document.querySelectorAll('.SG_vectorZarowka').forEach(function(element) {
        element.style.background = 'rgba(255, 255, 255, 1)';element.style.transition='all 3s ease';
    });

    //zapalenie żarówki
    document.querySelectorAll('.SG_zarowkaBlur').forEach(function(element) {
        element.style.opacity='1';element.style.transition='all 4s ease';
    });

    setTimeout(function() { SGrysujVector(SGzarowkaBiale,'biale') }, 100);
    setTimeout(function() { SGrysujVector(SGtekstS2,'tekst') }, 300);

    //SEKCJA 3 - pasek+białe
    let SGvectorZdjecie = document.querySelector('.SG_vectorZdjecie');
    let SGvectorZdjecieBiale = document.querySelector('.SG_vectorZdjecieBiale');

    setTimeout(function() { SGrysujVector(SGvectorZdjecie,'pasek') }, 300);
    setTimeout(function() { SGrysujVector(SGvectorZdjecieBiale,'biale2') }, 100);

}

//SEKCJA 3
function SG_narysujSekcja3(){
    let SGZdjecie = document.querySelector('.SG_zdjecie');
    let SGtekstS3 = document.querySelector('#SG_S3_przycisk');
    let SGpasek = document.querySelector('.SG_vectorPasek2');
    let SGvectorZdjecieBiale = document.querySelector('.SG_vectorZdjecieBiale');
    let SGaktualnosci = document.querySelector('#SG_AK_sekcja');
    let SGpasekBiale = document.querySelector('.SG_vectorPasekBiale2');

    SGrysujVector(SGZdjecie,'zdjecie');
    setTimeout(function() { SGrysujVector(SGtekstS3,'tekst') }, 300);
    SGrysujVector(SGpasek,'pasek');
    setTimeout(function() { SGrysujVector(SGvectorZdjecieBiale,'biale3') }, 600);
    setTimeout(function() { SGrysujVector(SGpasekBiale,'biale2') }, 600);
    setTimeout(function() { SGrysujVector(SGaktualnosci,'tekst') }, 1000);
}

// ---------------------------------------------------------------------------------------------FUNKCJE GŁÓWNE

function SGrysujVector(nazwaVectora,typ)
{
    nazwaVectora.style.transition='all 2s ease';

    if(typ=='pasek'){
        nazwaVectora.style.background = 'rgba(255, 255, 255, 1)';
    }

    if(typ=='biale'){
        nazwaVectora.style.background = 'rgba(255, 255, 255, 0.2)';
    }

    if(typ=='biale3'){
        nazwaVectora.style.clipPath = 'polygon(0% 0%, 37% 0%, 37% 3%, 27% 3%, 27% 54%, 100% 54%,100% 100%, 26% 100%, 0% 100%)';
        //clip-path: polygon(0% 0%, 37% 0%, 37% 3%, 27% 3%, 27% 39%,  0% 39%);
        //(0% 0%, 37% 0%, 37% 3%, 27% 3%, 27% 54%, 100% 54%,100% 100%, 26% 100%, 0% 100%)
        //(0% 0%, 37% 0%, 37% 3%, 27% 3%, 27% 39%, 100% 54%,100% 100%, 26% 100%, 0% 39%)
    }

    else{
        nazwaVectora.style.opacity='1';
    }
}

// ---------------------------------------------------------------------------------------------