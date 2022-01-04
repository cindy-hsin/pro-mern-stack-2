// JSX & Javascript code separated out from index.html

/** 
	-- Create React element with JSX (Here, JSX code is exactly the same as HTML) --
	---- JSX is converted to JavaScript with Babel compiler----
	---- Rendering : Transform virtual DOM (i.e. React elements) to real DOM ----
*/


class HelloWorld extends React.Component {
  render() {
    const continents = ['Africa', 'America', 'Asia', 'Australia', 'Europe'];
    const helloContinents = Array.from(continents, c=> `Hello ${c}!`);
    const message = helloContinents.join(' ');

    return (
      <div title='Outer div'>
        <h1 className='greeting'>{message}</h1>
      </div>
    )
  }
}

// Instantiate an instance of HelloWorld, i.e. a React element
const element = <HelloWorld />;

// Still use ReactDOM.render to transform Virtual DOM to real DOM
ReactDOM.render(element, document.getElementById('contents'));