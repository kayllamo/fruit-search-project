
const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// searching if user input matches with our fruit array
function search(str) {

	let results = fruit.filter(dictFruit => dictFruit.toLowerCase().includes(str.toLowerCase()));

	showSuggestions(results, str);

	return results;
}

// adding event listener for search input value
function searchHandler(e) {
	let input = e.target.value;

	return search(input);
}

// displaying suggestions against dictionary within drop down menu
function showSuggestions(results, inputVal) {
	let input = inputVal.toLowerCase();
	suggestions.innerHTML = ""; // clear existing results

	for (let i = 0; i < results.length; i++){
			if (results[i].toLowerCase().includes(input)) {
				const createLi = document.createElement('li');
				console.log(input)
				createLi.innerHTML = results[i];
				suggestions.appendChild(createLi);
			}
		}
		return suggestions;
	}	


// replacing user typed value with chosen dictionary value upon click
function useSuggestion(e) {
	let selectedValue = e.target.innerHTML;
	input.value = selectedValue;
	suggestions.innerHTML = ""; // clear existing results

}

function hoverHighlight(e){
	let input = e.target.innerHTML;
	input.style.backgroundColor = 'orangered';

		setTimeout(() => {
			e.target.style.backgroundColor = '';
		}, 700)
	}


//event listener for hover state on results
suggestions.addEventListener('mouseover', hoverHighlight)
// event handler for every keyboard input
input.addEventListener('keyup', searchHandler);
// event handler when user clicks on option from suggestions
suggestions.addEventListener('click', useSuggestion);