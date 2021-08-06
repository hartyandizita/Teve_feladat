function jatek() {
    // "más esetben ne látszódjon... feladatrészhez"
    document.getElementById("eredmeny").innerText = "";

    // Olvassuk ki és tároljuk el a beviteli mezők tartalmát:
    // var -> változó deklaráció indítása (használat előtt deklarálni kella változókat)
    // teve_db -> változó azonosítója (neve)
    // = -> értékadó operátor
    // document -> aktuális HTML oldal (teve.html), ahonnan hívtuk a függvényt
    // getElementById("inputTeve") -> beviteli mező, mint objektum
    // getElementById("inputTeve").value -> beviteli mezőben lévő SZÖVEG
    // ; -> utasítást lezáró operátor (karakter)
    var teve_db_szoveg = document.getElementById("inputTeve").value;
    // szöveg átalakítása számra a paseInt() függvénnyel:
    var teve_db = parseInt(teve_db_szoveg);

    // Teszt:
    // console.log(typeof teve_db_szoveg);
    //console.log(typeof teve_db);
    var strucc_db_szoveg = document.getElementById("inputStrucc").value;
    // szöveg átalakítása számra a paseInt() függvénnyel:
    var strucc_db = parseInt(strucc_db_szoveg);

    // Vezérlési szekezet: Egyágú elágazás: if (feltétel) {utasítás(ok) ha a feltétel igaz}
    // isNaN(teve_db) -> igaz értéket ad vissza, ha a teve_db változó értéke NaN (Not a Number)
    // || -> vagy logikai operátor
    if (isNaN(teve_db) || isNaN(strucc_db)) {
        alert("Hibás adat");
    }
    if (teve_db < 5) {
        alert("Ettől több teve van!");
    }
    if (teve_db > 5) {
        alert("Ettől kevesebb teve van!");
    }

    if (teve_db == 5 && strucc_db == 19) {
        document.getElementById("eredmeny").innerText = "Helyes! 5 teve és 19 strucc";
    }
}