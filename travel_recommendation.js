const data = {
    countries: [
        {
            id: 1,
            name: "Australia",
            cities: [
                {
                    name: "Sydney, Australia",
                    imageUrl: "dan-freeman-7Zb7kUyQg1E-unsplash.jpg",
                    description: "A vibrant city known for its iconic landmarks like the Sydney Opera House and Sydney Harbour Bridge."
                },
                {
                    name: "Melbourne, Australia",
                    imageUrl: "dan-freeman-7Zb7kUyQg1E-unsplash.jpg",
                    description: "A cultural hub famous for its art, food, and diverse neighborhoods."
                }
            ]
        },
        {
            id: 2,
            name: "Japan",
            cities: [
                {
                    name: "Tokyo, Japan",
                    imageUrl: "istockphoto-532202743-612x612.jpg",
                    description: "A bustling metropolis blending tradition and modernity, famous for its cherry blossoms and rich culture."
                },
                {
                    name: "Kyoto, Japan",
                    imageUrl: "512px-Kinkaku3402CBcropped.jpg",
                    description: "Known for its historic temples, gardens, and traditional tea houses."
                }
            ]
        },
        {
            id: 3,
            name: "Brazil",
            cities: [
                {
                    name: "Rio de Janeiro, Brazil",
                    imageUrl: "OIP (1).jpeg",
                    description: "A lively city known for its stunning beaches, vibrant carnival celebrations, and iconic landmarks."
                },
                {
                    name: "São Paulo, Brazil",
                    imageUrl: "OSK.jpeg",
                    description: "The financial hub with diverse culture, arts, and a vibrant nightlife."
                }
            ]
        }
    ],
    temples: [
        {
            id: 1,
            name: "Angkor Wat, Cambodia",
            imageUrl: "Angkor-Wat-Cambodia-entrance-1.jpg",
            description: "A UNESCO World Heritage site and the largest religious monument in the world."
        },
        {
            id: 2,
            name: "Taj Mahal, India",
            imageUrl: "Taj Mahal.jpg",
            description: "An iconic symbol of love and a masterpiece of Mughal architecture."
        }
    ],
    beaches: [
        {
            id: 1,
            name: "Bora Bora, French Polynesia",
            imageUrl: "dan-freeman-7Zb7kUyQg1E-unsplash.jpg",
            description: "An island known for its stunning turquoise waters and luxurious overwater bungalows."
        },
        {
            id: 2,
            name: "Copacabana Beach, Brazil",
            imageUrl: "cobacabana-safety-6.jpg",
            description: "A famous beach in Rio de Janeiro, Brazil, with a vibrant atmosphere and scenic views."
        }
    ]
};

document.getElementById('searchButton').addEventListener('click', function() {
    document.getElementById('hh').style.visibility='visible';
    var keyword = document.getElementById('searchInput').value.toLowerCase();
    var recommendations = [];
    
    if (keyword === 'beach') {
        recommendations = data.beaches;
    } else if (keyword === 'city') {
        data.countries.forEach(country => {
            recommendations = recommendations.concat(country.cities);
        });
    } else if (keyword === 'temple') {
        recommendations = data.temples;
    }
    
    displayResults(recommendations);
});

document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('hh').style.visibility='hidden';
    document.getElementById('searchInput').value = '';
    document.getElementById('results').innerHTML = '';
});

function displayResults(recommendations) {
    var resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    
    recommendations.forEach(item => {
        var itemDiv = document.createElement('div');
        itemDiv.className = 'recommendation-item';
        
        var img = document.createElement('img');
        img.src = item.imageUrl;
        img.alt = item.name;
        
        var name = document.createElement('h3');
        name.textContent = item.name;
        
        var description = document.createElement('p');
        description.textContent = item.description;
        
        itemDiv.appendChild(img);
        itemDiv.appendChild(name);
        itemDiv.appendChild(description);
        
        resultsDiv.appendChild(itemDiv);
    });
}
