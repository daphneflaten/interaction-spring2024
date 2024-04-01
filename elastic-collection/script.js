// Function to render your items
// We "call" this function once our fetch method is completed below
// (collection) here is a placeholder (usually called a "parameter") that is the json
const renderItems = (collection) => {
    // Step 1: Decide where we will be inserting HTML into the page
    // We'll store `ul` where the items will be inserted in a variable called collectionList
    const collectionList = document.getElementById('collection');

    // Step 2: Iterate through the json/payload we get from the fetch method
    // forEach loops through each item/object in the collection/array
    collection.forEach(item => {

        // Step 3: Decide how to create the HTML, pulling from the object as needed        
        // Use “template string/literal" to create a bundnle of HTML all at once
        // notice the tick marks `` wrapped around everything, with ${variable} used for dynamic content
        const itemDetails =
            `<li id="${item.id}" class="list-item" data-title="${item.title}">
                <div class="image-container">
                    <!-- Original image -->
                    <img src="${item.image ? item.image : ''}" class="original-image">
                    <!-- Flipped image -->
                    <img src="${item.flippedimage ? item.flippedimage : ''}" class="flipped-image">
                </div>
                <div class="list-item-content">
                    <div class="1">
                        <h2>${item.state}</h2>
                    </div>
                    <div class="2">
                        <p>Color Scheme: ${item.colorscheme}</p>
                    </div>
                    <div class="3">
                        <p>Current/Past Tagline: ${item.tagline}</p>
                    </div>
                    <div class="4">
                        <p>${item.description}</p>
                    </div>
                </div>

            </li>`;

        // Step 4: Insert our new HTML (stored in itemDetails) into the page (before the end the collectionList element )
        collectionList.insertAdjacentHTML('beforeend', itemDetails);

        // You can build logic from your data, too
        // if (!item.otherAttr) { // If this is `false`
        //  listItem.classList.add() // Add this class to the whole `li`
        // }
    })

    // show extra content on click (works well on mobile, unlike hover states)
    const listItems = document.querySelectorAll('.list-item');
    // loop through each item since we have to attach listeners indivudally
    listItems.forEach(item => {
        // add the event listener
        item.addEventListener('click', () => {
            // actually tell it what to do on click
            // in this case, we'll add/remove an 'is-active', a css class to hide/show its content

            // First, remove 'is-active' class from all other items
            listItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('is-active');
                }
            });

            // Toggle 'is-active' class only for the clicked item
            item.classList.toggle('is-active');
        });
    })

    // set up our filter controls
    const filterButtons = document.querySelectorAll('.filter-item');
    // loop through each item since we have to attach listeners individually
    filterButtons.forEach(button => {
        // add the event listener
        button.addEventListener('click', () => {
            // if another button already has an active class on it, remove it
            // in other words, we can only have one active filter at a time
            const previousActiveButton = document.querySelector('.filter-item.is-active');
            if (previousActiveButton) previousActiveButton.classList.remove('is-active')

            // add is-active to the latest/clicked button/filter
            button.classList.add('is-active');
            // const buttonCountry = item.dataset.country;
            const buttonCountry = button.getAttribute("data-country"); // another way to get an attribute
            const buttonState = button.classList.contains('is-active'); // true (active) or false (inactive)

            // if we are toggling off a button OR (that's what || means) the All button is clicked…
            // show all elements
            if (buttonState == false || buttonCountry == 'All') {
                const hiddenListItems = document.querySelectorAll('.list-item.is-hidden');
                hiddenListItems.forEach(item => {
                    item.classList.remove('is-hidden');
                });
                // otherwise, start filtering
            } else {
                // go through each list item again, deciding if to show or hide it
                listItems.forEach(item => {
                    if (item.dataset.country != buttonCountry) {
                        item.classList.add('is-hidden')
                    } else {
                        item.classList.remove('is-hidden')
                    }
                })
            }
        })
    })
}


// This is where we tie everything together
// Fetch gets your JSON file…
fetch('assets/collection.json')
    .then(response => response.json())
    .then(collection => {
        // And passes the data to the function, above!
        renderItems(collection)
    })
