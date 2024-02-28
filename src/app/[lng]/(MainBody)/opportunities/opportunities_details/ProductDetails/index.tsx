import { Card, CardBody, Col } from "reactstrap";
import { ProductTittle } from "@/Constant";
import { ProductColor } from "./ProductColor";
import { ProductDetailButton } from "./ProductDetailButton";
import { ProductRating } from "./ProductRating";
import { ProductSocial } from "./ProductSocial";
import { ProductTable } from "./ProductTable";
import { useAppSelector } from "@/Redux/Hooks";

const ProductDetails = ({ data }: { data: any }) => {
  return (
    <Col className="box-col-6 order-xxl-0 order-1">
      <Card>
        <CardBody>
          <div className="product-page-details">
            <h3 className="f-w-600">
              {data?.make} {data?.model_name} {data?.year}
            </h3>
          </div>
          <div className="product-price"> {data?.package_name}</div>
          {/* <ProductColor color={data?.newcarpost_color} /> */}

          <hr />
          <ProductTable data={data} />
          {/* <ProductSocial /> */}
          <ProductRating data={data} />
          {/* <ProductDetailButton /> */}
        </CardBody>
      </Card>
    </Col>
  );
};
export default ProductDetails;
