function searchImages() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim();

    if (searchTerm === '') {
        alert('Please enter a search term');
        return;
    }

    const apiKey = '7OAuj7sAfHaGiKIK1-s87g_44eM-AKS880acBaBG_CA';
    const apiUrl = `https://api.unsplash.com/search/photos?query=${searchTerm}&per_page=10&client_id=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayImages(data.results))
        .catch(error => console.log(error));

    searchInput.value = '';
}

function displayImages(images) {
    const imageResults = document.getElementById('imageResults');
    imageResults.innerHTML = '';

    images.forEach(image => {
        const imageItem = document.createElement('div');
        imageItem.classList.add('image-item');

        const img = document.createElement('img');
        img.src = image.urls.regular;
        img.alt = image.alt_description;

        imageItem.appendChild(img);
        imageResults.appendChild(imageItem);
    });
}
