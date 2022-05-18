// Делаем fetch переиспользуемым и оборачиваем его в функцию,
// разделяем действия: забрать данные и нарисовать по этим данным разметку в разные места
    // т.е. выносим второй then и catch из функции fetchPokemon и return первый fetch
    // (теперь фунция только возвращает данные с сервера и парсит их ( response.json()))
    // и выносим функцию fetch, связанную с сервером в отдельный файл!!!

    // наш корневой адрес для запроса
    const BASE = "https://pokeapi.co/api/v2/"
function fetchPokemon(id) {
    const url = `${BASE}/pokemon/${id}`;
    return fetch(url)
        .then(response => {
            return response.json();
        })
}

export default { fetchPokemon };