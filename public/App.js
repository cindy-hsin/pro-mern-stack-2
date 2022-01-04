// JSX & Javascript code separated out from index.html

/** 
	-- Create React element with JSX (Here, JSX code is exactly the same as HTML) --
	---- JSX is converted to JavaScript with Babel compiler----
	---- Rendering : Transform virtual DOM (i.e. React elements) to real DOM ----
*/
const element = /*#__PURE__*/React.createElement("div", {
  title: "Outer div"
}, /*#__PURE__*/React.createElement("h1", {
  className: "greeting"
}, "Hello World!")); // JSX

ReactDOM.render(element, document.getElementById('contents'));