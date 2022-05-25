import pokemonCardTpl from "../template/pokemon-card.hbs";
import Notiflix from 'notiflix';
import API from "./api-service";
import getRefs from "./get-refs";

// рефы тоже вынесены в отдельный файл
const refs = getRefs();

 
refs.searchForm.addEventListener("submit", onSearch)



function onSearch(event) {
    event.preventDefault();
    const searchId = event.currentTarget.elements.query.value;
    if (searchId) {
        // а здесь мы уже создаем разметку на основании возвращенных данных (по сабмиту формы)
        API.fetchPokemon(searchId).then(renderPokemonCard)
            .catch(onFetchError)
            .finally(refs.searchForm.reset());
    }
        // }).finally(refs.searchForm.reset()); - // так тоже работает 
}


    // Рендер разметки по 1 покемону - в отдельной функции,
    // которая вставляется во второй then (если вернулся response из первого then)
function renderPokemonCard(pokemon) {
        const markup = pokemonCardTpl(pokemon);
        refs.cardContainer.innerHTML = markup;
}
    // отдельная функция для catch, если покемон не найден
function onFetchError() {
       Notiflix.Notify.failure(`❌ Покемон не найден!!!`);

}