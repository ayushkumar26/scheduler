import React from 'react';
import EmployeeRosterItem from '../containers/EmployeeRosterItem.jsx';
import _ from 'underscore';

const EmployeeRoster = (props) => {
  return (
    <div>
      {/* <div className="mdl-list__item">
      <span className="mdl-list__item-primary-content">
        <i className="material-icons mdl-list__item-avatar">account_circle</i>
        <span>Add an employee</span>
      </span>
      <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
        <i className="material-icons">add</i>
      </button>
    </div> */}
    <div className="list-item clear-fix clickable">
      <div className="ratio-col-4-3" >
        <div>
          <i className="material-icons employee-edit-profile">account_circle</i>
          <span>Add new employee</span> 
        </div>
      </div>
      <div className="ratio-col-4" >
      <div className="employee-edit">
        <i className="material-icons employee-edit-button">add_circle</i>
      </div>
    </div>
    </div>
      {_.map(props.employees, (employee) => {
        return <EmployeeRosterItem key={employee.id} employee={employee} selectEmployee={props.selectEmployee}/>;
      })}
    </div>
  );
};

export default EmployeeRoster;