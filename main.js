// ~Define our data~

// ~Be able to iterate over our data~

const articles = [
  {
    tag: 'Learn to code',
    publishedAt: 'Oct 13 2020',
    title: 'Intro to CSS',
    description: 'The lazy dog jumped over the quick brown fox.',
    author: 'Nick Basile',
    image: 'images/article-1.jpg',
    alt: 'A beautiful sunset in Chicago',
  },
  {
    tag: 'Learn to code',
    publishedAt: 'Oct 13 2020',
    title: 'CSS Foundations',
    description: 'The lazy dog jumped over the quick brown fox.',
    author: null,
    image: 'images/article-1.jpg',
    alt: 'A beautiful sunset in Chicago',
  },
  {
    tag: 'Learn to code',
    publishedAt: 'Oct 13 2020',
    title: 'PHP Today',
    description: 'The lazy dog jumped over the quick brown fox.',
    author: null,
    image: 'images/article-1.jpg',
    alt: 'A beautiful sunset in Chicago',
  },
];

console.log(articles);

// ~Create our html in JS~

function createArticle(articleData) {
  const article = document.createElement('article');
  
  const image = document.createElement('img');
  image.src = articleData.image;
  image.alt = articleData.alt;
  article.appendChild(image);

  const section = document.createElement('section');
  const h2 = document.createElement('h2');
  h2.textContent = articleData.title;
  section.appendChild(h2);

  const description = document.createElement('p');
  description.textContent = articleData.description;
  section.appendChild(description);

  const author = document.createElement('p');
  author.textContent = articleData.author;
  section.appendChild(author);

  article.appendChild(section);

  return article;
}

// Add it to the page
const main = document.querySelector('main');

for(let i = 0; i < articles.length; i++) {
  main.appendChild(createArticle(articles[i]))
}