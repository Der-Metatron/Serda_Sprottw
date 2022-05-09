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
      .get("https://backend-serdar-sprotte.herokuapp.com") /* Kein slash */
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
        .delete(`https://backend-serdar-sprotte.herokuapp.com/user/${id}`)
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
            <th>Name</th>
            <th>Alter</th>
            <th>Bearbeiten</th>
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
