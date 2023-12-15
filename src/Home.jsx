import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "./UserReducer";

function Home() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteUser({ id: id }));
  };
  return (
    <div className="container">
      <h2>Crud with Redux Toolkit</h2>
      <Link to={"/create"} className="btn btn-success my-3">
        Create +
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>User ID</th>
            <th>User Name</th>
            <th>User Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((elem) => {
            return (
              <tr key={elem.id}>
                <td>{elem.id}</td>
                <td>{elem.name}</td>
                <td>{elem.email}</td>
                <td>
                  <Link
                    to={`/edit/${elem.id}`}
                    className="btn btn-sm btn-primary"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(elem.id)}
                    className="btn btn-sm btn-danger ms-2"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
