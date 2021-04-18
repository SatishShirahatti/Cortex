import React from "react";
import { ApiClient, User } from "../../api/api-client";
import { LoaderLarge } from "../../Core/spinner/spinner";
import "../../styles/common/global.css";
import sortData from "../../Core/sort-data";
import { SORT_ORDER, SortParams } from "../../Core/constants";

function UserPage() {
  const [users, setUsers] = React.useState<User[]>([]);
  const [sortParams, setSortParams] = React.useState<SortParams>({});
  const [Loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  React.useEffect(() => {
    const fetchData = async () => {
      const apiClient = new ApiClient();
      const data = await apiClient.requestUsers();
      setUsers(data);
      //	console.log(data);
    };
    fetchData();
  }, []);

    const sortIt = React.useCallback(
    (key, order = 1) => {
      const toggleOrder =
        sortParams.property === key && sortParams.order === SORT_ORDER.ASCENDING
          ? SORT_ORDER.DESCENDING
          : SORT_ORDER.ASCENDING;
      const sortedCampaigns = sortData(users, key, toggleOrder);
      setUsers(sortedCampaigns);
      setSortParams({
        property: key,
        order: toggleOrder,
      });
    },
    [users, setUsers, sortParams, setSortParams]
  );

  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Users Details</h1>
          <p className="lead">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis culpa est repellendus vero, similique optio omnis
            placeat aliquid minima earum dolorum quidem nihil, unde ex dolorem
            iure, ratione asperiores laudantium.
          </p>
        </div>
      </div>
      <div className="table-container">
        <table className="users" aria-label="simple table">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Profile Picture</th>
              <th onClick={() => sortIt("name")}>User Name
               &nbsp;
                {sortParams.property === "name" &&
                sortParams.order === SORT_ORDER.ASCENDING ? (
                  <span>&uarr;</span>
                ) : (
                  <span>&darr;</span>
                )}
              </th>
              <th>User Email</th>
            </tr>
          </thead>
          {Loading === false ? (
            <tbody>
              {users.map((user) => (
                <tr key={user.name}>
                  <td>{user.id}</td>
                  <td>
                    <img
                      src={user.profile}
                      alt={user.name}
                      width="auto"
                      height="40"
                    />
                  </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              <tr>
                <td colSpan={7}>
                  <LoaderLarge />
                </td>
              </tr>
            </tbody>
          )}
        </table>
      </div>
    </>
  );
}

export default UserPage;
