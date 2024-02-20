import { ClothsDetailsTabContentProp } from "@/Types/EcommerceType";
import { Col, Row, TabContent, TabPane } from "reactstrap";

const ClothsDetailsTabContent: React.FC<ClothsDetailsTabContentProp> = ({
  activeTab,
  dimensions,
  engineMotor,
  transmission,
  steering,
  suspension,
  wheelTyre,
  fuelEconomy,
  safety,
  exterior,
  instrument,
  info,
  comfort,
}) => {
  return (
    <TabContent activeTab={activeTab}>
      <TabPane tabId={1}>
        <h4 className=" faq-title">Dimensions</h4>
        <Row>
          <Col md="3">
            <p className="fw-bold txt-primary">Boot Space (L)</p>
            <p className="fw-bold txt-primary">Ground Clearance</p>
            <p className="fw-bold txt-primary">Kerb Weight (KG)</p>
            <p className="fw-bold txt-primary">No. Of Doors</p>
          </Col>

          <Col md="3">
            <p>{dimensions?.bootSpaceL}</p>
            <p>{dimensions?.groundClearance}</p>
            <p>{dimensions?.kerbWeight}</p>
            <p>{dimensions?.noOfDoors}</p>
          </Col>

          <Col md="3">
            <p className="fw-bold txt-primary">Overall Length (MM)</p>
            <p className="fw-bold txt-primary">Overall Width (MM)</p>
            <p className="fw-bold txt-primary">Seating Capacity</p>
            <p className="fw-bold txt-primary">Wheel Base (MM)</p>
          </Col>

          <Col md="3">
            <p>{dimensions?.overallLength}</p>
            <p>{dimensions?.overallWidth}</p>
            <p>{dimensions?.seatingCapacity}</p>
            <p>{dimensions?.wheelBase}</p>
          </Col>
        </Row>

        <h4 className=" faq-title">Transmission</h4>
        <Row>
          <Col md="3">
            <p className="fw-bold txt-primary">Transmission Type</p>
          </Col>

          <Col md="3">
            <p>{transmission?.transmission}</p>
          </Col>

          <Col md="3">
            <p className="fw-bold txt-primary">Gear Box</p>
          </Col>

          <Col md="3">
            <p>{transmission?.gearBox}</p>
          </Col>
        </Row>
      </TabPane>

      <TabPane tabId={2}>
        <h4 className=" faq-title">Engine / Motor</h4>
        <Row>
          <Col md="3">
            <p className="fw-bold txt-primary">Engine Type</p>
            {engineMotor?.engineType !== "Electric" && (
              <>
                <p className="fw-bold txt-primary">Displacement</p>
                <p className="fw-bold txt-primary">Fuel System</p>
              </>
            )}
            <p className="fw-bold txt-primary">Horse Power</p>
            {engineMotor?.engineType === "Electric" && (
              <>
                <p className="fw-bold txt-primary">Battery type</p>
                <p className="fw-bold txt-primary">Battery Capacity</p>
              </>
            )}
            <p className="fw-bold txt-primary">Max Speed</p>
          </Col>

          <Col md="3">
            <p>{engineMotor?.engineType}</p>
            {engineMotor?.engineType !== "Electric" && (
              <>
                <p>{engineMotor?.displacement}</p>
                <p>{engineMotor?.fuelSystem}</p>
              </>
            )}
            <p>{engineMotor?.horsePower}</p>
            {engineMotor?.engineType === "Electric" && (
              <>
                <p>{engineMotor?.battery_type}</p>
                <p>{engineMotor?.battery_capacity}</p>
              </>
            )}
            <p>{engineMotor?.max_speed}</p>
          </Col>

          <Col md="3">
            {engineMotor?.engineType !== "Electric" && (
              <>
                <p className="fw-bold txt-primary">RPM</p>
                <p className="fw-bold txt-primary">No Of Cylinder</p>
                <p className="fw-bold txt-primary">Turbo Charger</p>
                <p className="fw-bold txt-primary">Valves Per Cylinder</p>
              </>
            )}
            {engineMotor?.engineType === "Electric" && (
              <>
                <p className="fw-bold txt-primary">Charging time</p>
                <p className="fw-bold txt-primary">Range</p>
              </>
            )}
          </Col>

          <Col md="3">
            {engineMotor?.engineType !== "Electric" && (
              <>
                <p>{engineMotor?.rpm}</p>
                <p>{engineMotor?.noOfCylinders}</p>
                <p>{engineMotor?.turboCharger}</p>
                <p>{engineMotor?.valvesPerCylinder}</p>
              </>
            )}
            {engineMotor?.engineType === "Electric" && (
              <>
                <p>{engineMotor?.charging_time}</p>
                <p>{engineMotor?.range}</p>
              </>
            )}
          </Col>
        </Row>

        <h4 className=" faq-title">Steering</h4>
        <Row>
          <Col md="3">
            <p className="fw-bold txt-primary">Steering Type</p>
          </Col>

          <Col md="3">
            <p>{steering?.steeringType}</p>
          </Col>

          <Col md="3">
            <p className="fw-bold txt-primary">Power Assisted</p>
          </Col>

          <Col md="3">
            <p>{steering?.powerAssisted}</p>
          </Col>
        </Row>

        <h4 className=" faq-title">Fuel Economy</h4>
        <Row>
          <Col md="3">
            <p className="fw-bold txt-primary">Fuel Tank Capacity (L)</p>
            <p className="fw-bold txt-primary">Mileage Highway (KM/L)</p>
          </Col>

          <Col md="3">
            <p>{fuelEconomy?.fuelTankCapacity}</p>
            <p>{fuelEconomy?.mileageHighway}</p>
          </Col>

          <Col md="3">
            <p className="fw-bold txt-primary">Mileage City (KM/L)</p>
          </Col>

          <Col md="3">
            <p>{fuelEconomy?.mileageCity}</p>
          </Col>
        </Row>
      </TabPane>

      <TabPane tabId={3}>
        <h4 className=" faq-title">Suspension / Brakes</h4>
        <Row>
          <Col md="3">
            <p className="fw-bold txt-primary">Front Suspension</p>
            <p className="fw-bold txt-primary">Front Brakes</p>
          </Col>

          <Col md="3">
            <p>{suspension?.frontSuspension}</p>
            <p>{suspension?.frontBrakes}</p>
          </Col>

          <Col md="3">
            <p className="fw-bold txt-primary">Rear Suspension</p>
            <p className="fw-bold txt-primary">Rear Brakes</p>
          </Col>

          <Col md="3">
            <p>{suspension?.rearSuspension}</p>
            <p>{suspension?.rearBrakes}</p>
          </Col>
        </Row>

        <h4 className=" faq-title">Wheels & Tyres</h4>
        <Row>
          <Col md="3">
            <p className="fw-bold txt-primary">Wheel Type</p>
            <p className="fw-bold txt-primary">Wheel Size</p>
            <p className="fw-bold txt-primary">Tyre Size Width</p>
            <p className="fw-bold txt-primary">Tyre Size diameter</p>
          </Col>

          <Col md="3">
            <p>{wheelTyre?.wheelType}</p>
            <p>{wheelTyre?.wheelSize}</p>
            <p>{wheelTyre?.tyreSizeWidth}</p>
            <p>{wheelTyre?.tyreSizeDiameter}</p>
          </Col>

          <Col md="3">
            <p className="fw-bold txt-primary">Spare Tyre</p>
            <p className="fw-bold txt-primary">Spare Tyre Size</p>
            <p className="fw-bold txt-primary">Tyre Size Ratio</p>
          </Col>

          <Col md="3">
            <p>{wheelTyre?.spareTyre}</p>
            <p>{wheelTyre?.spareTyreSize}</p>
            <p>{wheelTyre?.tyreSizeRatio}</p>
          </Col>
        </Row>

        <h4 className=" faq-title">Instrumentation</h4>
        <Row>
          <Col md="3">
            <p className="fw-bold txt-primary">Info Cluster</p>
            <p className="fw-bold txt-primary">Tachometer</p>
          </Col>

          <Col md="3">
            <p>{instrument?.infoCluster}</p>
            <p>{instrument?.tachometer}</p>
          </Col>

          <Col md="3">
            <p className="fw-bold txt-primary">Multi Info</p>
          </Col>

          <Col md="3">
            <p>{instrument?.multiInfo}</p>
          </Col>
        </Row>
      </TabPane>

      <TabPane tabId={4}>
        <h4 className=" faq-title">Exterior</h4>
        <Row>
          <Col md="3">
            <p className="fw-bold txt-primary">Alloy Wheels</p>
            <p className="fw-bold txt-primary">Adjustable Headlights</p>
            <p className="fw-bold txt-primary">DRLs</p>
            <p className="fw-bold txt-primary">Side Mirror Indicators</p>
            <p className="fw-bold txt-primary">Sun Roof</p>
            <p className="fw-bold txt-primary">Roof Rails</p>
          </Col>

          <Col md="3">
            <p>{exterior?.alloyWheels}</p>
            <p>{exterior?.adjustableHeadlights}</p>
            <p>{exterior?.DRLs}</p>
            <p>{exterior?.sideMirrorIndicators}</p>
            <p>{exterior?.sunRoof}</p>
            <p>{exterior?.roofRails}</p>
          </Col>

          <Col md="3">
            <p className="fw-bold txt-primary">Dual Exhaust</p>
            <p className="fw-bold txt-primary">Fog Lights</p>
            <p className="fw-bold txt-primary">Panaromic</p>
            <p className="fw-bold txt-primary">Rear Spoiler</p>
            <p className="fw-bold txt-primary">Side Steps</p>
          </Col>

          <Col md="3">
            <p>{exterior?.dualExhaust}</p>
            <p>{exterior?.fogLights}</p>
            <p>{exterior?.panaromic}</p>
            <p>{exterior?.rearSpoiler}</p>
            <p>{exterior?.sideSteps}</p>
          </Col>
        </Row>

        <h4 className=" faq-title">Infotainment</h4>
        <Row>
          <Col md="3">
            <p className="fw-bold txt-primary">Display Size (Inch)</p>
            <p className="fw-bold txt-primary">Voice Control</p>
            <p className="fw-bold txt-primary">DVD Player</p>
            <p className="fw-bold txt-primary">Front Speakers</p>
            <p className="fw-bold txt-primary">No. Of Speakers</p>
            <p className="fw-bold txt-primary">Android Auto</p>
          </Col>

          <Col md="3">
            <p>{info?.displaySize}</p>
            <p>{info?.voiceControl}</p>
            <p>{info?.dvdPlayer}</p>
            <p>{info?.frontSpeakers}</p>
            <p>{info?.noOfSpeakers}</p>
            <p>{info?.androidAuto}</p>
          </Col>

          <Col md="3">
            <p className="fw-bold txt-primary">USB Auxilary Cable</p>
            <p className="fw-bold txt-primary">CD Player</p>
            <p className="fw-bold txt-primary">Rear Seat Entertainment</p>
            <p className="fw-bold txt-primary">Rear Speakers</p>
            <p className="fw-bold txt-primary">Apple Car Play</p>
          </Col>

          <Col md="3">
            <p>{info?.usbAuxilaryCable}</p>
            <p>{info?.cdPlayer}</p>
            <p>{info?.rearSeatEntertainment}</p>
            <p>{info?.rearSpeakers}</p>
            <p>{info?.appleCarPlay}</p>
          </Col>
        </Row>
      </TabPane>

      <TabPane tabId={5}>
        <h4 className=" faq-title">Safety</h4>
        <Row>
          <Col md="3">
            <p className="fw-bold txt-primary">Airbags</p>
            <p className="fw-bold txt-primary">
              Anti-Lock Braking System (ABS)
            </p>
            <p className="fw-bold txt-primary">Door Opening Warning</p>
            <p className="fw-bold txt-primary">Downhill Assist Control</p>
            <p className="fw-bold txt-primary">Hill Start Assist Control</p>
            <p className="fw-bold txt-primary">Immobilizer</p>
            <p className="fw-bold txt-primary">Passenger SeatBelt Warning</p>
            <p className="fw-bold txt-primary">Speed Sensing Door Lock</p>
            <p className="fw-bold txt-primary">vehicle Stability Control</p>
          </Col>

          <Col md="3">
            <p>{safety?.airbags}</p>
            <p>{safety?.antiLockBrakingSystem}</p>
            <p>{safety?.doorOpeningWarning}</p>
            <p>{safety?.downHillAssistControl}</p>
            <p>{safety?.hillStartAssistControl}</p>
            <p>{safety?.immobilizer}</p>
            <p>{safety?.passengerSeatBeltWarning}</p>
            <p>{safety?.speedSensingDoorLock}</p>
            <p>{safety?.vehicleStabilityControl}</p>
          </Col>

          <Col md="3">
            <p className="fw-bold txt-primary">Anti-Theft Alarm System</p>
            <p className="fw-bold txt-primary">
              Autonomous Emergency Braking (AEB)
            </p>
            <p className="fw-bold txt-primary">Blind Spot Detection</p>
            <p className="fw-bold txt-primary">Driver Seatbelt Warning</p>
            <p className="fw-bold txt-primary">Electric Brake Force</p>
            <p className="fw-bold txt-primary">Lane Keep Assist System</p>
            <p className="fw-bold txt-primary">Seat Belts</p>
            <p className="fw-bold txt-primary">Traction Control</p>
          </Col>

          <Col md="3">
            <p>{safety?.antiTheftAlarmSystem}</p>
            <p>{safety?.autonomousEmergencyBraking}</p>
            <p>{safety?.blindSpotDetection}</p>
            <p>{safety?.driverSeatBeltWarning}</p>
            <p>{safety?.electricBrakeForce}</p>
            <p>{safety?.laneKeepAssistSystem}</p>
            <p>{safety?.seatbelts}</p>
            <p>{safety?.tractionControl}</p>
          </Col>
        </Row>

        <h4 className=" faq-title">Comfort and Convenience</h4>
        <Row>
          <Col md="3">
            <p className="fw-bold txt-primary">Seat Material Type</p>
            <p className="fw-bold txt-primary">Air Conditioner (AC)</p>
            <p className="fw-bold txt-primary">Arm Rest</p>
            <p className="fw-bold txt-primary">Auto Brake Hold</p>
            <p className="fw-bold txt-primary">Auto Parking System</p>
            <p className="fw-bold txt-primary">Driver Seat Lumbar Support</p>
            <p className="fw-bold txt-primary">driver Seat Memory Function</p>
            <p className="fw-bold txt-primary">Driving Modes</p>
            <p className="fw-bold txt-primary">HandBrake</p>
            <p className="fw-bold txt-primary">Camera 360</p>
            <p className="fw-bold txt-primary">front Parking Sensors</p>
            <p className="fw-bold txt-primary">Front Power Outlet</p>
            <p className="fw-bold txt-primary">Headlight Reminder</p>
            <p className="fw-bold txt-primary">Heated Seats</p>
            <p className="fw-bold txt-primary">Heater</p>
            <p className="fw-bold txt-primary">Key Type</p>
            <p className="fw-bold txt-primary">Keyless Entry</p>
            <p className="fw-bold txt-primary">Rear Folding Seat</p>
            <p className="fw-bold txt-primary">Rear Head Rest</p>
            <p className="fw-bold txt-primary">Rear Parking Sensors</p>
            <p className="fw-bold txt-primary">Rear Wiper</p>
            <p className="fw-bold txt-primary">Rear Power Outlet</p>
            <p className="fw-bold txt-primary">Remote Engine Start</p>
          </Col>

          <Col md="3">
            <p>{comfort?.seatMaterialType}</p>
            <p>{comfort?.airconditioning}</p>
            <p>{comfort?.armRest}</p>
            <p>{comfort?.autoBrakeHold}</p>
            <p>{comfort?.autoParkingSystem}</p>
            <p>{comfort?.driverSeatLumbarSupport}</p>
            <p>{comfort?.driverSeatMemoryFunction}</p>
            <p>{comfort?.drivingModes}</p>
            <p>{comfort?.handBrake}</p>
            <p>{comfort?.Camera360}</p>
            <p>{comfort?.frontParkingSensors}</p>
            <p>{comfort?.frontPowerOutlet}</p>
            <p>{comfort?.headlightReminder}</p>
            <p>{comfort?.heatedSeats}</p>
            <p>{comfort?.heater}</p>
            <p>{comfort?.keyType}</p>
            <p>{comfort?.keylessEntry}</p>
            <p>{comfort?.rearFoldingSeat}</p>
            <p>{comfort?.rearHeadRest}</p>
            <p>{comfort?.rearParkingSensors}</p>
            <p>{comfort?.rearWiper}</p>
            <p>{comfort?.reartPowerOutlet}</p>
            <p>{comfort?.remoteEngineStart}</p>
          </Col>

          <Col md="3">
            <p className="fw-bold txt-primary">Auto Retractable Side Mirror</p>
            <p className="fw-bold txt-primary">Automatic Head Lamps</p>
            <p className="fw-bold txt-primary">Boss Seat Switch</p>
            <p className="fw-bold txt-primary">Central Locking</p>
            <p className="fw-bold txt-primary">Climate Control</p>
            <p className="fw-bold txt-primary">Cool Box</p>
            <p className="fw-bold txt-primary">Cruise Control</p>
            <p className="fw-bold txt-primary">
              Driver Seat Electric Adjustment
            </p>
            <p className="fw-bold txt-primary">Front Camera</p>
            <p className="fw-bold txt-primary">Navigation</p>
            <p className="fw-bold txt-primary">Paddle Shifter</p>
            <p className="fw-bold txt-primary">
              Passenger Seat Electric Adjustment
            </p>
            <p className="fw-bold txt-primary">Power Door Locks</p>
            <p className="fw-bold txt-primary">Power Mirrors</p>
            <p className="fw-bold txt-primary">Power Windows</p>
            <p className="fw-bold txt-primary">Push Start</p>
            <p className="fw-bold txt-primary">Rain Sensing Wiper</p>
            <p className="fw-bold txt-primary">Rear AC Vents</p>
            <p className="fw-bold txt-primary">Rear Camera</p>
            <p className="fw-bold txt-primary">Steering Adjustment</p>
            <p className="fw-bold txt-primary">Steering Switches</p>
            <p className="fw-bold txt-primary">
              Tyre Pressure Monitoring System
            </p>
            <p className="fw-bold txt-primary">Wireless Charger</p>
          </Col>

          <Col md="3">
            <p>{comfort?.autoRetractableSideMirror}</p>
            <p>{comfort?.automaticHeadLamps}</p>
            <p>{comfort?.bossSeatSwitch}</p>
            <p>{comfort?.centralLocking}</p>
            <p>{comfort?.climateControl}</p>
            <p>{comfort?.coolBox}</p>
            <p>{comfort?.cruiseControl}</p>
            <p>{comfort?.driverSeatElectricAdjustment}</p>
            <p>{comfort?.frontCamera}</p>
            <p>{comfort?.navigation}</p>
            <p>{comfort?.paddleShifter}</p>
            <p>{comfort?.passengerSeatElectricAdjustment}</p>
            <p>{comfort?.powerDoorLocks}</p>
            <p>{comfort?.powerMirrors}</p>
            <p>{comfort?.powerWindows}</p>
            <p>{comfort?.pushStart}</p>
            <p>{comfort?.rainSensingWiper}</p>
            <p>{comfort?.rearACVents}</p>
            <p>{comfort?.rearCamera}</p>

            <p>{comfort?.steeringAdjustment}</p>
            <p>{comfort?.steeringSwitches}</p>
            <p>{comfort?.tyrePressureMonitoringSystem}</p>
            <p>{comfort?.wirelessCharger}</p>
          </Col>
        </Row>
      </TabPane>
    </TabContent>
  );
};

export default ClothsDetailsTabContent;
