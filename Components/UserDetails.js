import React from "react";

function UserDetails({Student_id, Name}) {
  return (
    <div className="row">
      <div className="col-xl-4 col-lg-5">
        <UserCard sid={Student_id} name={Name} />
      </div>
      <div className="col-xl-8 col-lg-7">
        <Details />
      </div>
    </div>
  );
}

const UserCard = ({sid, name}) => {
  return (
    <div className="card mb-4">
      <div className="card-body text-center">
        <img
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
          alt="avatar"
          className="rounded-circle img-fluid"
          style={{ width: "150px" }}
        />
        <h5 className="my-3">{name}</h5>
        <p className="text-muted mb-1">{sid}</p>
      </div>
    </div>
  );
};

const Details = () => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <div className="row">
          <div className="col-sm-3">
            <p className="mb-0">Full Name</p>
          </div>
          <div className="col-sm-9">
            <p className="text-muted mb-0">Johnatan Smith</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <p className="mb-0">Email</p>
          </div>
          <div className="col-sm-9">
            <p className="text-muted mb-0">example@example.com</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <p className="mb-0">Phone</p>
          </div>
          <div className="col-sm-9">
            <p className="text-muted mb-0">(097) 234-5678</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <p className="mb-0">Mobile</p>
          </div>
          <div className="col-sm-9">
            <p className="text-muted mb-0">(098) 765-4321</p>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <p className="mb-0">Address</p>
          </div>
          <div className="col-sm-9">
            <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
