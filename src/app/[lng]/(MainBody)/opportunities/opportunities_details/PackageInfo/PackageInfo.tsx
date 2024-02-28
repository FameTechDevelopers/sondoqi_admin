export const PackageInfo = ({ data }: { data: any }) => {
  return (
    <>
      <div>
        <table className="product-page-width">
          <tbody className="mb-3">
            <tr>
              <td>
                <b>Unit &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b>
              </td>
              <td>{data?.package_unit}</td>
            </tr>
            <tr>
              <td>
                <b>Target &nbsp;&nbsp;&nbsp;:</b>
              </td>
              <td>{data?.package_target}</td>
            </tr>
            <tr>
              <td>
                <b>Collected &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b>
              </td>
              <td>{data?.package_target - data?.package_remaining}</td>
            </tr>
            <tr>
              <td>
                <b>Remaining &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b>
              </td>
              <td>{data?.package_remaining}</td>
            </tr>

            <tr>
              <td>
                <b>Box Type &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b>
              </td>
              <td>{data?.package_box_type}</td>
            </tr>
            <tr>
              <td>
                <b>Risk Level &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b>
              </td>
              <td>{data?.package_risk_level}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr />
    </>
  );
};
