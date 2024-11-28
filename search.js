// search.js

document.getElementById('searchBtn').addEventListener('click', function () {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const resultsContainer = document.getElementById('searchResults');
    
    // Sample data to simulate search results
    const data = [
        { title: 'App One', description: 'Description of App One' },
        { title: 'App Two', description: 'Description of App Two' },
        { title: 'Article One', description: 'Description of Article One' },
        { title: 'Article Two', description: 'Description of Article Two' },
    ];

    // Filter data based on the search query
    const filteredResults = data.filter(item => 
        item.title.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query)
    );

    // Display search results
    if (filteredResults.length > 0) {
        resultsContainer.innerHTML = '';
        filteredResults.forEach(item => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('search-result');
            resultItem.innerHTML = `
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            `;
            resultsContainer.appendChild(resultItem);
        });
    } else {
        resultsContainer.innerHTML = '<p>No results found.</p>';
    }
});
