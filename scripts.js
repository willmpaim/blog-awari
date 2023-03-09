const posts = [
    {
        title: "Google Chrome",
        content: "Google Chrome is a web browser developed by Google, released in 2008. Chrome is the world's most popular web browser today!"
    },

    {
        title: "Mozila Firefox",
        content: "Mozilla Firefox is an open-source web browser developed by Mozilla. Firefox has been the second most popular web browser since January, 2018"
    },

    {
        title: "Microsoft Edge",
        content: "Microsoft Edge is a web browser developed by Microsoft, released in 2015. Microsoft Edge replaced Internet Explorer."
    }
];

const wrapper = document.getElementById("posts");

///for (let i = 0; i < posts.length; i++) 

    posts.forEach(createArticle);

function createArticle(post) {

    const article = document.createElement("article");
    const title = document.createElement("h1");
    const titleText = document.createTextNode(post.title);
    title.appendChild(titleText);
    article.appendChild(title);;
    const content = document.createElement("p");
    const contentText = document.createTextNode(post.content);
    content.appendChild(contentText);
    article.appendChild(content);
    wrapper.appendChild(article);
}