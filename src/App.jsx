// JSX & Javascript code separated out from index.html

/** 
	-- Create React element with JSX (Here, JSX code is exactly the same as HTML) --
	---- JSX is converted to JavaScript with Babel compiler----
	---- Rendering : Transform virtual DOM (i.e. React elements) to real DOM ----
*/

class IssueList extends React.Component{
  render() {
    return (
      <React.Fragment>  {/* Fragment: alternative for <div> to enclose multiple elements*/}
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
    const rowStyle = {border: "1px solid silver", padding:4};
    return (
      // <div>Placeholder for the a table of issues</div>
      <table style={{borderCollapse: "collapse"}}>
        <thead>
          <tr>
            <th style={rowStyle}>ID</th>
            <th style={rowStyle}>Title</th>
          </tr>
        </thead>

        <tbody>
          <IssueRow rowStyle={rowStyle} issue_id={1}>
            Error in console when clicking Add
          </IssueRow>
          <IssueRow rowStyle={rowStyle} issue_id={2}>
            <div>Missing <b>bottom</b> border on panel</div>
          </IssueRow>


          {/* <IssueRow rowStyle={rowStyle} issue_id={1} 
            issue_title="Error in console when clicking Add"/> */}
          {/* <IssueRow rowStyle={rowStyle} issue_id={2} 
            issue_title="Missing bottom border on panel"/> */}
        </tbody>
      </table>
    );
  }
}

class IssueRow extends React.Component{
  render(){
    const style = this.props.rowStyle; 
    // Since it's the value for <td> component's 'style' attribute, 
    // it should be a Javascript object.
    return (
      <tr>
        <td style={style}>{this.props.issue_id}</td>
        <td style={style}>{this.props.children}</td>
      </tr>
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