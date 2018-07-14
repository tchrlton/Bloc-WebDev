let url = 'https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=86f443bcb0974a47ac37832dfc7639e0';

fetch(url)
  .then(r => {
    return r.json();
  })
  .then(data => {
    let storyList = document.createElement('ul');
    let body = document.querySelector('body');
    body.appendChild(storyList);
    data.articles.map (news => {
      let newsItem = document.createElement('li');
      newsItem.innerHTML = '<a href="' + news.url + '">' + news.title + "</a>";
      storyList.appendChild(newsItem);
    });
   })
  .catch(e => {
    console.log(`An error occured: ${e}`);
  });
