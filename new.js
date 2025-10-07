async function nothing () {
    try{
        let PokimonName = document.getElementById('PokimonName').value.toLowerCase();
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${PokimonName}`);

        if(!response.ok){
            throw new Error('could not fetch the data');
        }

        let data = await response.json();
        let PokimonSprites = data.sprites.front_default;
        let img = document.getElementById('Pokimonsprites');
        img.src = PokimonSprites;
        img.style.display = 'block';
    }catch(error){
        console.error(error);
    }
}

nothing();;

