import React from "react";
import { ApiClient, Client } from "../../api/api-client";
import { LoaderLarge } from "../../Core/spinner/spinner";
import "../../styles/common/global.css";
import sortData from "../../Core/sort-data";
import { SORT_ORDER, SortParams } from "../../Core/constants";

function ClientPage() {
  const [clients, setClient] = React.useState<Client[]>([]);
	const [sortParams, setSortParams] = React.useState<SortParams>({});
  const [Loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const fetchData = async () => {
      const apiClient = new ApiClient();
      const data = await apiClient.requestClients();
      setClient(data);
      //console.log(data);
    };
    fetchData();
  }, []);
  React.useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

	  const sortIt = React.useCallback(
    (key, order = 1) => {
      const toggleOrder =
        sortParams.property === key && sortParams.order === SORT_ORDER.ASCENDING
          ? SORT_ORDER.DESCENDING
          : SORT_ORDER.ASCENDING;
      const sortedCampaigns = sortData(clients, key, toggleOrder);
      setClient(sortedCampaigns);
      setSortParams({
        property: key,
        order: toggleOrder,
      });
    },
    [clients, setClient, sortParams, setSortParams]
  );

  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Clients</h1>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus error
            architecto aut velit iste vero quasi quas voluptate aliquam, maxime
            adipisci obcaecati beatae? Soluta beatae cupiditate assumenda
            consequatur rerum nam.
          </p>
        </div>
      </div>
      <div className="table-container">
        <table aria-label="simple table">
          <thead>
            <tr>
              <th>Client ID</th>
              <th onClick={() => sortIt("name")}>Name
							  &nbsp;
                {sortParams.property === "name" &&
                sortParams.order === SORT_ORDER.ASCENDING ? (
                  <span>&uarr;</span>
                ) : (
                  <span>&darr;</span>
                )}
							</th>
              <th>Client Logo</th>
              <th>Manager Name</th>
              <th onClick={() => sortIt("email")}>Manager email
							  &nbsp;
                {sortParams.property === "email" &&
                sortParams.order === SORT_ORDER.ASCENDING ? (
                  <span>&uarr;</span>
                ) : (
                  <span>&darr;</span>
                )}								
							</th>
              <th>Manager Id</th>
            </tr>
          </thead>
          {Loading === false ? (
            <tbody>
              {clients.map((client) => (
                <tr key={client.id}>
                  <td>{client.id}</td>
                  <td>{client.name}</td>
                  <td>
                    <img
                      src={client.profile}
                      alt={client.name}
                      width="auto"
                      height="40"
                    />
                  </td>
                  <td>{client.defaultCampaignManager?.name}</td>
                  <td>{client.defaultCampaignManager?.email}</td>
                  <td>{client.defaultCampaignManager?.id}</td>
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

export default ClientPage;
