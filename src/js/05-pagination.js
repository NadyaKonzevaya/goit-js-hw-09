const refs = {
    searchForm: document.querySelector(".js-search-form"),
    articlesContainer: document.querySelector(".js-articles-container"),
    loadMoreBtn: document.querySelector('data-action="load-more"'),
}

const API_KEY = "5925640d1da1416faa3864d7a9bc0a8c";
const options = {
  headers: {
    Authorization: API_KEY,
  },
};
const querySearch = "";



refs.searchForm.addEventListener("submit", onSearch);
refs.loadMoreBtn.addEventListener("click", onLoadMore);

function onSearch(event) {
    event.preventDefault();
    querySearch = event.currentTarget.elements.query.value;
    const url = `https://newsapi.org/v2/everything?q=${querySearch}&pageSize=5&page=1`;
    fetch(url, options).then(response => response.json).then(console.log);

}

function onLoadMore() {
    
    const url = `https://newsapi.org/v2/everything?q=${querySearch}&pageSize=5&page=1`;
    fetch(url, options).then(response => response.json).then(console.log);

}