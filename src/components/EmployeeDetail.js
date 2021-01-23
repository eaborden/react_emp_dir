import React from "react";

function EmployeeDetail(props) {
  return (
    
    
<div className="row text-left">
    <div className="col-sm-2"><img alt={props.picture} className="img-fluid" src={props.picture} style={{ margin: "0 auto" }}></img></div>
    <div className="col-sm-2">{props.first}</div>
    <div className="col-sm-2">{props.last}</div>
    <div className="col-sm-2">{props.email}</div>
    <div className="col-sm-2">{props.phone}</div>
    <div className="col-sm-2">{props.dob}</div>
 </div>
  )}
export default EmployeeDetail;