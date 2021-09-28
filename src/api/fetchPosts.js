export const fetchPosts = () => {
  // const encodeURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:' + language + '&sort=stars&order=desc&type=Repositories');
  return fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then(response => response.json())
      .catch(error => console.error(error));
}