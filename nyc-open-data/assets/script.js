const nycURL = 'https://data.cityofnewyork.us/resource/nu7n-tubp.json?$limit=50000';

const collectionList = document.getElementById('collection');
const newList = document.getElementById('new');
const otherList = document.getElementById('other');


const workWithData = data => {
    const uniqueAnimalNamesWithValues = data.reduce((newArray, object) => {
        const animalname = object.animalname;
        newArray[animalname]
            ? newArray[animalname] += 1
            : newArray[animalname] = 1;
        return newArray;
    }, {});

    const result = Object.keys(uniqueAnimalNamesWithValues)
        .map(key => [key, uniqueAnimalNamesWithValues[key]])
        .sort((a, b) => b[1] - a[1])
        .slice(2, 19);

    result.forEach(item => {
        const itemDetails = `
            <div class="name">${item[0]}</div>
            <div class="graph" style="width: ${item[1]/7}vw"></div>
        `;
        collectionList.insertAdjacentHTML('beforeend', itemDetails);
    });
}

//breeds
//changing name of dog breeds
const workWithDifferentData = data => {
    data.forEach(item => {
        if (item.breedname === "American Pit Bull Terrier/Pit Bull") {
            item.breedname = "Pit Bull";
        }
    });
    data.forEach(item => {
        if (item.breedname === "Poodle, Miniature") {
            item.breedname = "Poodle";
        }
    });
    data.forEach(item => {
        if (item.breedname === "Jack Russel Terrier") {
            item.breedname = "Jack Russel";
        }
    });
    data.forEach(item => {
        if (item.breedname === "German Shepherd Dog") {
            item.breedname = "German Shepherd";
        }
    });

    const uniqueBreedNamesWithValues = data.reduce((newArray, object) => {
        const breedname = object.breedname;
        newArray[breedname]
            ? newArray[breedname] += 1
            : newArray[breedname] = 1;
        return newArray;
    }, {});

    const result = Object.keys(uniqueBreedNamesWithValues)
        .map(key => [key, uniqueBreedNamesWithValues[key]])
        .sort((a, b) => b[1] - a[1])
        .slice(1, 11)
        .filter((_, index) => index !== 6 && index !== 7); //ignore number 6




        
    result.forEach(item => {
        const itemDetails =
        `
            <div class="breeds">
                <img src="assets/${item[0]}.png" style="height: ${item[1]/10}px">
                <p>${item[0]}</p>
            </div>
        `;
        newList.insertAdjacentHTML('beforeend', itemDetails);
    });
}


//zipcodes



const workWithAnotherData = data => {
    const manhattanZipCodes = ["10001", "10003", "10005", "10007", "10010", "10012", "10014", "10017", "10019", "10022", "10024", "10026", "10028", "10030", "10032", "10036", "10038", "10040", "10069", "10119", "10162", "10170", "10199", "10280", "10002", "10004", "10006", "10009", "10011", "10013", "10016", "10018", "10021", "10023", "10025", "10027", "10029", "10031", "10033", "10035", "10037", "10039", "10044", "10103", "10128", "10165", "10173", "10279", "10282"];
    
    data.forEach(item => {
        if (manhattanZipCodes.includes(item.zipcode)) {
            item.zipcode = "Manhattan";
        }
    });

    const thebronxZipCodes = ["10467", "10456", "10458", "10453", "10468", "10457", "10452", "10469", "10462", "10466", "10463", "10472", "10460", "10473", "10451", "10461", "10459", "10465", "10475", "10455", "10454", "10471", "10474", "10470", "10803", "10464", "10499"];
    
    data.forEach(item => {
        if (thebronxZipCodes.includes(item.zipcode)) {
            item.zipcode = "The Bronx";
        }
    });

    const brooklynZipCodes = [
        "11201", "11203", "11204", "11205", "11206", "11207", "11208", 
        "11209", "11210", "11211", "11212", "11213", "11214", "11215", 
        "11216", "11217", "11218", "11219", "11220", "11221", "11222", 
        "11223", "11224", "11225", "11226", "11228", "11229", "11230", 
        "11231", "11232", "11233", "11234", "11235", "11236", "11237", 
        "11238", "11239"
    ];    
    data.forEach(item => {
        if (brooklynZipCodes.includes(item.zipcode)) {
            item.zipcode = "Brooklyn";
        }
    });

    const queensZipCodes = [
        "11001", "11004", "11005", "11101", "11102", "11103", "11104", 
        "11105", "11106", "11354", "11355", "11356", "11357", "11358", 
        "11359", "11360", "11361", "11362", "11363", "11364", "11365", 
        "11366", "11367", "11368", "11369", "11370", "11371", "11372", 
        "11373", "11374", "11375", "11377", "11378", "11379", "11385", 
        "11411", "11412", "11413", "11414", "11415", "11416", "11417", 
        "11418", "11419", "11420", "11421", "11422", "11423", "11426", 
        "11427", "11428", "11429", "11430", "11432", "11433", "11434", 
        "11435", "11436", "11691", "11692", "11693", "11694", "11697"
    ];
        data.forEach(item => {
        if (queensZipCodes.includes(item.zipcode)) {
            item.zipcode = "Queens";
        }
    });

    const statenislandZipCodes = [
        "10301", "10302", "10303", "10304", "10305", "10306", "10307", 
        "10308", "10309", "10310", "10311", "10312", "10313", "10314"
    ];        data.forEach(item => {
        if (statenislandZipCodes.includes(item.zipcode)) {
            item.zipcode = "Staten Island";
        }
    });

    const uniqueZipCodesWithValues = data.reduce((newArray, object) => {
        const zipcode = object.zipcode;
        newArray[zipcode]
            ? newArray[zipcode] += 1
            : newArray[zipcode] = 1;
        return newArray;
    }, {});
    
    const result = Object.keys(uniqueZipCodesWithValues)
        .map(key => [key, uniqueZipCodesWithValues[key]])
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);
    
    // Extracting labels and data for the chart
    const labels = result.map(item => item[0]);
    const dataValues = result.map(item => item[1]);
    
    // Creating a canvas element for the chart
    const canvas = document.createElement('canvas');
    canvas.classList.add('pie-chart'); // Add a class for styling
    canvas.width = 525; // Adjust the width as needed
    canvas.height = 525; // Adjust the height as needed
    canvas.style.margin = '0 auto'; // Center the canvas horizontally

    
    // Get the slide4 div
    const slide4 = document.querySelector('.slide4');

    // Append the canvas to the slide4 div
    slide4.appendChild(canvas);

    // Drawing the pie chart
    new Chart(canvas, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: 'Zip Code Distribution',
                data: dataValues,
                backgroundColor: [
                    'rgb(236, 240, 250)',
                    'rgb(174, 190, 231)',
                    'rgb(123, 144, 195)',
                    'rgb(76, 97, 150)',
                    'rgb(37, 51, 85)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Top 5 Zip Code Distribution'
            },
            plugins: {
                legend: {
                    labels: {
                        font: {
                            family: 'Space Grotesk', // Set font family to Space Grotesk
                            size: 20, // Set font size (optional)
                        },
                        color: '#ECF0FA' // Set font color to #ECF0FA
                    }
                }
            }
        }
    });
}

fetch(nycURL)
    .then(response => response.json())
    .then(json => {
        workWithData(json); // names
        workWithDifferentData(json); // breeds
        workWithAnotherData(json); // zipcodes
    });
