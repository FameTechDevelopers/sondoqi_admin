export const UserInfo = ({ data }: { data: any }) => {
  return (
    <>
      <div>
        <table className="product-page-width">
          <tbody className="mb-3">
            <tr>
              <td>
                <b>Registration No &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b>
              </td>
              <td>{data?.commercial_registration_no || "-"}</td>
            </tr>
            <tr>
              <td>
                <b>Email &nbsp;&nbsp;&nbsp;:</b>
              </td>
              <td>{data?.user_email}</td>
            </tr>
            <tr>
              <td>
                <b>Role &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b>
              </td>
              <td>{data?.role_name}</td>
            </tr>
            <tr>
              <td>
                <b>Phone &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b>
              </td>
              <td>{data?.user_phone}</td>
            </tr>

            <tr>
              <td>
                <b>Wallet Balance &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b>
              </td>
              <td>
                {"SAR "}
                {data?.wallet_balance || "0"}
              </td>
            </tr>
            <tr>
              <td>
                <b>Total Balance &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b>
              </td>
              <td>
                {"SAR "}
                {data?.total_balance || "0"}
              </td>
            </tr>
            <tr>
              <td>
                <b>Total Spend &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b>
              </td>
              <td>
                {"SAR "}
                {data?.total_spend || "0"}
              </td>
            </tr>
            <tr>
              <td>
                <b>Account Status &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b>
              </td>
              <td>{data?.account_status}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr />
    </>
  );
};
