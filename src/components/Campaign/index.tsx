import React from "react";
import { ApiClient, Campaign } from "../../api/api-client";
import { LoaderLarge } from "../../Core/spinner/spinner";
import "../../styles/common/global.css";
import sortData from "../../Core/sort-data";
import { SORT_ORDER, SortParams } from "../../Core/constants";

function CampaignPage() {
  const [campaigns, setCampaigns] = React.useState<Campaign[]>([]);
  const [sortParams, setSortParams] = React.useState<SortParams>({});
  const [Loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const fetchData = async () => {
      const apiClient = new ApiClient();
      const data = await apiClient.requestCampaigns();
      setCampaigns(data);
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
      const sortedCampaigns = sortData(campaigns, key, toggleOrder);
      setCampaigns(sortedCampaigns);
      setSortParams({
        property: key,
        order: toggleOrder,
      });
    },
    [campaigns, setCampaigns, sortParams, setSortParams]
  );

  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Campaign</h1>
          <p className="lead">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id est,
            perspiciatis culpa repudiandae obcaecati commodi aut perferendis?
            Distinctio, consequatur quibusdam. Voluptatibus, distinctio amet.
            Tempora, fuga. Consequatur deleniti ut quidem unde?
          </p>
        </div>
      </div>
      <div className="table-container">
        <table aria-label="simple table">
          <thead>
            <tr>
              <th onClick={() => sortIt("id")}>
                Campaign Id &nbsp;
                {sortParams.property === "id" &&
                sortParams.order === SORT_ORDER.ASCENDING ? (
                  <span>&uarr;</span>
                ) : (
                  <span>&darr;</span>
                )}
              </th>
              <th onClick={() => sortIt("name")}>Name
              &nbsp;
                {sortParams.property === "name" &&
                sortParams.order === SORT_ORDER.ASCENDING ? (
                  <span>&uarr;</span>
                ) : (
                  <span>&darr;</span>
                )}
              </th>
              <th>Logo</th>
              <th>Manager Name</th>
              <th onClick={() => sortIt("startDate")}>Start Date
               &nbsp;
                {sortParams.property === "startDate" &&
                sortParams.order === SORT_ORDER.ASCENDING ? (
                  <span>&uarr;</span>
                ) : (
                  <span>&darr;</span>
                )}
              </th>
              <th onClick={() => sortIt("endDate")}>End Date
              &nbsp;
                {sortParams.property === "endDate" &&
                sortParams.order === SORT_ORDER.ASCENDING ? (
                  <span>&uarr;</span>
                ) : (
                  <span>&darr;</span>
                )}
              </th>
              <th onClick={() => sortIt("budget")}>Budget
              &nbsp;
                {sortParams.property === "budget" &&
                sortParams.order === SORT_ORDER.ASCENDING ? (
                  <span>&uarr;</span>
                ) : (
                  <span>&darr;</span>
                )}
              </th>
            </tr>
          </thead>
          {Loading === false ? (
            <tbody>
              {campaigns.map((campaign) => (
                <tr key={campaign.name}>
                  <td>{campaign.id}</td>
                  <td>
                    <img
                      src={campaign?.url}
                      alt={campaign.client?.name}
                      width="auto"
                      height="40"
                    />
                  </td>
                  <td>{campaign.client?.name}</td>
                  <td>{campaign.campaignManager?.name}</td>
                  <td>{campaign.startDate}</td>
                  <td>{campaign.endDate}</td>
                  <td>{campaign.budget}</td>
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

export default CampaignPage;
