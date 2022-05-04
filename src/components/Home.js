import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import FontAwesome from "react-fontawesome";
import { confirm } from "react-confirm-box";
import { Link } from "react-router-dom";

export const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000") /* Kein slash */
      .then((response) => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log("error");
      });
  }, []);

  const deleteUser = async (id) => {
    const result = await confirm("Do you want delete?");
    if (result) {
      axios
        .delete(`http://localhost:4000/user/${id}`)
        .then(() => {
          setUsers((user) =>
            users.filter((user) => {
              return user._id !== id;
            })
          );
        })
        .catch((err) => {
          console.log("error");
        });
    }
  };

  return (
    <div>
      <table>
        <thead>
          <tr className="head">
            <th>name</th>
            <th>age</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr>
                <td>
                  {user.firstName} {user.lastName}
                </td>
                <td>{user.age}</td>

                <td className="td_action">
                  <FontAwesome
                    name="trash"
                    className="icon_trash"
                    onClick={() => deleteUser(user._id)}
                  />
                  <Link to={`/update/${user._id}`}>
                    <FontAwesome name="pencil" />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
