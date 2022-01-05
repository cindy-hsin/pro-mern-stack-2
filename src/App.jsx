// JSX & Javascript code separated out from index.html

/** 
	-- Create React element with JSX (Here, JSX code is exactly the same as HTML) --
	---- JSX is converted to JavaScript with Babel compiler----
	---- Rendering : Transform virtual DOM (i.e. React elements) to real DOM ----
*/

class IssueList extends React.Component{
  render() {
    return (
      <React.Fragment>
        <h1>Issue Tracker</h1>
        <IssueFilter />
        <hr />
        <IssueTable />
        <hr />
        <IssueAdd />
      </React.Fragment>
    );
  }
}

class IssueFilter extends React.Component{
  render() {
    return (
      <div>Placeholder for the issue filter</div>
    );
  }
}

class IssueTable extends React.Component{
  render() {
    return (
      <div>Placeholder for the a table of issues</div>
    );
  }
}

class IssueAdd extends React.Component{
  render() {
    return (
      <div>Placeholder for a form to add an issue</div>
    );
  }
}

const element = <IssueList />;

// Still use ReactDOM.render to transform Virtual DOM to real DOM
ReactDOM.render(element, document.getElementById('contents'));