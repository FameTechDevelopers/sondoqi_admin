import { Button, Card, CardBody, Col } from "reactstrap";
import SweetAlert from "sweetalert2";
import { PikachuAlerts, Pikachu } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { PikachuAlertData } from "@/Data/BonusUi/SweetAlert";

const PikachuAlert = () => {
  const displayAlert = () => {
    SweetAlert.fire({
      text: "A wild Pikachu appeared! What do you want to do?",
      showCancelButton: true,
      cancelButtonText: "Run away!",
      confirmButtonText: "Throw Pokeball!",
      confirmButtonColor: "#1194a8",
      denyButtonText: "Defeat",
      denyButtonColor: "#1194a8",
      showDenyButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        SweetAlert.fire({
          icon: "success",
          title: "Yeah!",
          text: "Pikachu was caught!",
          confirmButtonColor: "#1194a8",
        });
      } else if (result.dismiss) {
        SweetAlert.fire({
          text: "Got away safely!",
          confirmButtonColor: "#1194a8",
        });
      } else if (result.isDenied) {
        SweetAlert.fire({
          text: "Pikachu fainted! You gained 500 XP!",
          confirmButtonColor: "#1194a8",
        });
      }
    });
  };

  return (
    <Col xxl="3" lg="4" sm="6" xs="12">
      <Card className="height-equal">
        <CommonCardHeader title={PikachuAlerts} span={PikachuAlertData} />
        <CardBody className="btn-showcase">
          <Button color="warning" className="sweet-12" onClick={displayAlert}>
            {Pikachu}
          </Button>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PikachuAlert;
