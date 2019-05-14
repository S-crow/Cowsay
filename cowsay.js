/*
	COWSAYS 
	ASCII Art with a cow saying the following text in an automatically-resized speech bubble.
*/

let text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, \
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris \
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in \
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui \
officia deserunt mollit anim id est laborum.";

let width = process.argv[2];
console.log("  COWSAY  ");

// Display the fist and the last line
const firstAndLastLine = width => {

	let line = [];
	line.push("  ");
	for(let j=0; j<width; j++){
		line.push("-");
	}

	return line.join('');
}

// Display all the others lines containing the text 
const middleLines = width => {
	let array = [];
	let textArray = text.split(" ");
	let size = 0;

	for (let i=0; i<textArray.length; i++) {
	
		size+=textArray[i].length+1;

		if(size>width){

			array.push(textArray.splice(0,i).join(" "));
			textArray.slice(i);
			size = 0;
			i=-1;
		}
	}
	let remaining = textArray.join(" ");
	array.push(remaining);

	return array;
}

// Display the ASCII Art under the speech bubble
const displayCow = () => {
	let array = [];
	array.push('           \\         ');
	array.push('            \\   ^__^');
    array.push('             \\  (oo)\_______');
    array.push('                (__)\       )\/\'');
    array.push('                    ||----w |');
    array.push('                    ||     ||)');

    return array;
}

// Join all the others functions to display the cow and its bellow
const main = () => {
	console.log(firstAndLastLine(width));
	let array = middleLines(width);
	
	for(let i=0; i<array.length; i++){
		let padding = width - array[i].length;

		switch(i) {
		  case 0:
		    console.log("/ " + array[i]+' '.repeat(padding) + "\\");
		    break;
		  case array.length-1:
			console.log("\\ " + array[i]+' '.repeat(padding) + "/");
			break;
		  default:
		    console.log("| " + array[i]+' '.repeat(padding) + "|");
		}		
	}

	console.log(firstAndLastLine(width));
	console.log(displayCow().join("\n"));
}

main();
