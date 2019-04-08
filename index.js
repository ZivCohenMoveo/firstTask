var key = "djDdijXrKTFHTW8A0psaRsAgZu6ECAqv1qctjz9O";
$.get("https://api.nasa.gov/neo/rest/v1/feed?&api_key=" + key, function(data) {
    const starList = $('.stars-list');
    const { near_earth_objects } = data;
    Object.keys(near_earth_objects).forEach(key => {
        const items = near_earth_objects[key];
        const starsElements = items.map(item => {
            const {name, nasa_jpl_url} = item;
            return starTemplate({name, nasa_jpl_url});
        });

        if (starList.length > 0) {
            starsElements.forEach(starElement => {
                $(starList).append(starElement);
            });
        }
    });
})

const starTemplate = (star) => {
    const {name, nasa_jpl_url} = star;
    return `<div class="star">
            <img class="star-pic" src="logo.png" alt="" height="132" width="160">
            <a href="${nasa_jpl_url}" class="star-link"><h3 class="star-name">${name}</h3></a>
        </div>`;
}