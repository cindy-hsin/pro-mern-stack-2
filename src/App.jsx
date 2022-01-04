// JSX & Javascript code separated out from index.html

/** 
	-- Create React element with JSX (Here, JSX code is exactly the same as HTML) --
	---- JSX is converted to JavaScript with Babel compiler----
	---- Rendering : Transform virtual DOM (i.e. React elements) to real DOM ----
*/
const continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe'];
const helloContinents = Array.from(continents, c=> `Hello ${c}!`);
const message = helloContinents.join(' ');

const element = (
    <div title='Outer div'>
        <h1 className='greeting'>{message}</h1>
    </div>
);				// JSX

ReactDOM.render(element, document.getElementById('contents'));