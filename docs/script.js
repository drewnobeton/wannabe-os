document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.menu nav ul li a');
    const articleContainer = document.querySelector('.article');
    const titleBar = document.querySelector('.article .title-bar h2');
    let currentArticle = null;

    links.forEach(link => {
        link.addEventListener('click', async (event) => {
            event.preventDefault();

            const articleUrl = link.getAttribute('data-article');

            // Remove the expanded class to start the collapse animation
            if (currentArticle) {
                articleContainer.classList.remove('expanded');
                
                // Clear old content after the collapse animation completes
                setTimeout(() => {
                    document.querySelector('.article-content').innerHTML = '';
                    
                    // Fetch and display the new article content
                    fetch(articleUrl)
                        .then(response => response.text())
                        .then(htmlContent => {
                            // Update article content
                            document.querySelector('.article-content').innerHTML = htmlContent;

                            // Set the article title
                            titleBar.textContent = link.textContent;

                            // Force reflow to restart the expansion animation
                            articleContainer.style.display = 'none'; // Hide the container
                            articleContainer.offsetHeight; // Trigger reflow
                            articleContainer.style.display = ''; // Show the container

                            // Add class to trigger the expansion animation
                            articleContainer.classList.add('expanded');
                        })
                        .catch(error => {
                            console.error('Error fetching the article:', error);
                        });
                }, 500); // Match the duration of the collapse animation

                currentArticle = articleUrl; // Update current article
            } else {
                // For the first load
                articleContainer.classList.add('expanded');
                document.querySelector('.article-content').innerHTML = await fetch(articleUrl).then(response => response.text());
                titleBar.textContent = link.textContent;
                currentArticle = articleUrl;
            }
        });
    });
});
