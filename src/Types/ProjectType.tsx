export type ProjectListData = {
  id?: number;
  title: string;
  badge: string;
  image: string;
  sites: string;
  description: string;
  issue: string;
  resolved: string;
  comment: string;
  like: string;
  progress: number;
  customers_img1: string;
  customers_img2: string;
  customers_img3: string;
};

export interface ProjectType {
  activeTab: string;
  createdFormData: ProjectListData[];
}

export interface CommonProjectInterFace {
  item: ProjectListData;
}

export interface ProjectInitialValue {
  coverImage:any,
  make:string | null,
  model:string | null,
  year:number | null,
  varient:string,
  bodyType:string,
  color:string,
  exFactoryPrice:number | null,
  launchDate:string | null,
  description: string | null;
  overallLengthMM:number | null,
  kerbWeightKG:number | null,
  overallWidthMM:number | null,
  bootSpaceL:number | null,
  wheelBaseMM:number | null,
  noOfDoors:number | null,
  groundClearenceMM:number | null,
  seatingCapacity:number | null,
  engineType:string,
  turboCharger:string,
  Displacement:number | null,
  noOfCylinders:number | null,
  hpHorsePower:number | null,
  rpmHorsePower:number | null,
  valvesPerCylinder:number | null,
  fuelSystem:string,
  maxSpeedKMH:number | null,
  transmissionType:string,
  gearboxspeed:number | null,
  steeringType:string,
  powerAssisted:string,
  frontSuspension:string,
  frontBrakes:string,
  rearSuspension:string,
  rearBrakes:string,
  wheelType:string,
  wheelSizeInch:number | null,
  spareTyre:string,
  spareTyreSizeInch:number | null,
  tyreSizewidth:number | null,
  tyreSizeratio:number | null,
  tyreSizediameter:number | null,
  fuelTankCapacityL:string,
  mileageCityKML:string,
  mileageHighwayKML:string,
  noOfAirbags:number | null,
  noOfSeatbelts:number | null,
  speedSensingAutoDoorLock:boolean,
  antiTheftAlarmSystem:boolean,
  driverSeatBeltWarning:boolean,
  downHillAssistControl:boolean,
  passengerSeatBeltWarning:boolean,
  hillStartAssistControl:boolean,
  immobilizer:boolean,
  tractionControl:boolean,
  vehicleStabilityControl:boolean,
  blindSpotDetectionBSD:boolean,
  antiLockBrakingSystemABS:boolean,
  doorOpeningWarning:boolean,
  laneKeepAssistSystemLKAS:boolean,
  electronicBrakeForceDistributionEBD:boolean,
  autonomousEmergencyBrakingAEB:boolean,
  alloyWheels:boolean,
  adjustableHeadlights:boolean,
  rearSpoiler:boolean,
  sideMirrorswithIndicators:boolean,
  sunRoof:boolean,
  panaromic:boolean,
  fogLights:boolean,
  drls:boolean,
  roofRails:boolean,
  sideSteps:boolean,
  dualExhaust:boolean,
  tachometer:boolean,
  multiInfo:boolean,
  informationCluster:boolean,
  usbAndAuxillaryCable:boolean,
  displaySizeinch:number | null,
  cdPlayer:boolean,
  dvdPlayer:boolean,
  noOfSpeakers:number | null,
  frontSpeakers:boolean,
  rearSpeakers:boolean,
  rearSeatEntertainment:boolean,
  voiceControl:boolean,
  androidAuto:boolean,
  appleCarPlay:boolean,
  seatMaterialType:string,
  keyType:string,
  airConditioner:boolean,
  rainSensingWipers:boolean,
  climateControl:boolean,
  cruiseControl:boolean,
  rearACVents:boolean,
  drivingModes:boolean,
  paddleShifter:boolean,
  heater:boolean,
  heatedSeats:boolean,
  keylessEntry:boolean,
  pushStart:boolean,
  coolBox:boolean,
  remoteEngineStart:boolean,
  navigation:boolean,
  centralLocking:boolean,
  powerDoorLocks:boolean,
  frontCamera:boolean,
  rearCamera:boolean,
  camera360:boolean,
  powerWindows:boolean,
  powerMirrors:boolean,
  autoRetractableSideMirrors:boolean,
  frontParkingSensors:boolean,
  rearParkingSensors:boolean,
  armRest:boolean,
  rearFoldingSeat:boolean,
  handbrake:string,
  rearHeadrest:boolean,
  autoBrakeHold:boolean,
  rearWiper:boolean,
  autoParkingSystem:boolean,
  driverSeatElectricAdjustment:boolean,
  driverSeatLumbarSupport:boolean,
  driverSeatMemoryFunction:boolean,
  frontPowerOutlet:boolean,
  rearPowerOutlet:boolean,
  steeringAdjustment:boolean,
  steeringSwitches:boolean,
  wirelessCharger:boolean,
  headlightOnReminder:boolean,
  bossSeatSwitch:boolean,
  automaticHeadLamps:boolean,
  tyrePressureMonitoringSystemTPMS:boolean,
  passengerSeatElectricAdjustment:boolean,
}

export interface CommonFileUploadProp {
  maxFiles?: number;
  multiple?: boolean;
  body?: boolean;
}