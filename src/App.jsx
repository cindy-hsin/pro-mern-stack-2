// JSX & Javascript code separated out from index.html

/** 
	-- Create React element with JSX (Here, JSX code is exactly the same as HTML) --
	---- JSX is converted to JavaScript with Babel compiler----
	---- Rendering : Transform virtual DOM (i.e. React elements) to real DOM ----
*/
const element = (
    <div title='Outer div'>
        <h1 className='greeting'>Hello World!</h1>
    </div>
);				// JSX

ReactDOM.render(element, document.getElementById('contents'));