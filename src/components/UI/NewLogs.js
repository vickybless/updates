import React from "react";
const NewLogs = (props) => {
  return (
    <div>
      <div className='container'>
        <div className='card shadow mx-auto' style={{ width: "" }}>
          <div className='card-body '>
            <table class='table table-info table-striped table-hover table-bordered border-dark'>
              <thead>
                <tr>
                  <th scope='col'>Date</th>
                  <th scope='col'>Log One</th>
                  <th scope='col'>Log Two</th>
                  <th scope='col'>Log Three</th>
                </tr>
              </thead>
              <tbody>
                {props.logs.map((log) => (
                  <tr key={log.id}>
                    <td>{log.date}</td>
                    <td>{log.logone}</td>
                    <td>{log.logtwo}</td>
                    <td>{log.logthree}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewLogs;
