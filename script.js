window.onload = function () {
    const IMG_POKEMON = document.querySelector('#img_pokemon');
    const NEXT_BUTTON = document.querySelector("#next");
    const PREVIOUS_BUTTON = document.querySelector("#previous");
    const POKEMON_NAME = document.querySelector("#nom_pokemon");

    var i = 0, id = 0;

    function NavPokemon()
    {
        if (i.toString().length == 1)
        id = "00" + i;
        else if (i.toString().length == 2)
        id = "0" + i;
        else
        id = "" + i;
        
        const xhr = new XMLHttpRequest();
        xhr.open("GET", `../medias/${id}.jpg`, true);
        xhr.send();

        const htmlrequest = new XMLHttpRequest();
        htmlrequest.open("GET", `https://pokeapi.co/api/v2/pokemon/${i}`, true);
        htmlrequest.send();
        
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4)
            IMG_POKEMON.src = xhr.responseURL;
        }

        htmlrequest.onreadystatechange = function () {
            if (htmlrequest.readyState === 4) {
                let response = htmlrequest.responseText;
                let dataResponse = JSON.parse(response);
                POKEMON_NAME.innerHTML = dataResponse.name;
            }
        }
    }

    NEXT_BUTTON.addEventListener('click', function(e)
    {
        if (i <= 150)
        {
            i += 1;
            e.preventDefault();
            NavPokemon();
        }
    })
    PREVIOUS_BUTTON.addEventListener('click', function(e)
    {
        if (i > 1)
        {
            i -= 1;
            e.preventDefault();
            NavPokemon();
        }
    })
}