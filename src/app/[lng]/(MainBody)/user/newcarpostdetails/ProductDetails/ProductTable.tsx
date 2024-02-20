import { ABC, Availability, Brand, Cotton, Fabric, InStock, PixelStrap, Seller } from "@/Constant";

export const ProductTable = ({post}:{post:any}) => {
  return (
    <>
      <div>
        <table className="product-page-width">
          <tbody className="mb-3">
            <tr>
              <td>
                <b>Make &nbsp;&nbsp;&nbsp;:</b>
              </td>
              <td>{post?.make}</td>
            </tr>
            <tr>
              <td>
                <b>Model &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b>
              </td>
              <td>{post?.model_name}</td>
            </tr>
            <tr>
              <td>
                <b>Year &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b>
              </td>
              <td>{post?.year}</td>
            </tr>
            <tr>
              <td>
                <b>Varient &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b>
              </td>
              <td>{post?.newcarpost_variants}</td>
            </tr>
            <tr>
              <td>
                <b>Body Type &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b>
              </td>
              <td>{post?.bodytype_name}</td>
            </tr>
            <tr>
              <td>
                <b>Launch Date &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b>
              </td>
              <td>{post?.newcarpost_date}</td>
            </tr>

          </tbody>
        </table>
      </div>
      <hr />
    </>
  );
};
