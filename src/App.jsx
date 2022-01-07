// JSX & Javascript code separated out from index.html

/** 
	-- Create React element with JSX (Here, JSX code is exactly the same as HTML) --
	---- JSX is converted to JavaScript with Babel compiler----
	---- Rendering : Transform virtual DOM (i.e. React elements) to real DOM ----
*/

const issues = [
  {
    id: 1, status: 'New', owner: 'Ravan', effort: 5,
    created: new Date('2018-08-15'), due: undefined,    // due: optional
    title: 'Error in console when clicking Add',
    },

  {
    id: 2, status: 'Assigned', owner: 'Eddie', effort: 14,
    created: new Date('2018-08-16'), due: new Date('2018-08-30'),
    title: 'Missing bottom border on panel',
    }
]

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
    const issueRows = issues.map(issue => 
      <IssueRow key={issue.id} issue={issue}/>);
    /* 
    Keys help React identiy which items have changed, are added or are removed.
    Keys should be given to the elements inside the array
    to give the elements a stable identity.
    */
    return (
      <table className="bordered-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Status</th>
            <th>Owner</th>
            <th>Created</th>
            <th>Effort</th>
            <th>Due Date</th>
            <th>Title</th>
          </tr>
        </thead>

        <tbody>
          {issueRows}
        </tbody>
      </table>
    );
  }
}


class IssueRow extends React.Component{
  render(){
    const issue = this.props.issue;
    return (
      <tr>
        <td>{issue.id}</td>
        <td>{issue.status}</td>
        <td>{issue.owner}</td>
        <td>{issue.created.toDateString()}</td>
        <td>{issue.effort}</td>
        <td>{issue.due ? issue.due.toDateString() : ''}</td>
        <td>{issue.title}</td>
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