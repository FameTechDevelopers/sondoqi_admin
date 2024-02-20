"use client";
import { Col, FormGroup, Label, Row, Input, Button } from "reactstrap";
import { Dropzone, ExtFile, FileMosaic } from "@dropzone-ui/react";
import {
  AdjustableHeadlights,
  AirConditioner,
  AlloyWheels,
  AndroidAuto,
  AntiLockBrakingSystemABS,
  AntiTheftAlarmSystem,
  AppleCarPlay,
  ArmRest,
  AutoBrakeHold,
  AutoParkingSystem,
  AutoRetractableSideMirrors,
  AutomaticHeadLamps,
  AutonomousEmergencyBrakingAEB,
  BlindSpotDetectionBSD,
  BodyType,
  BootSpaceL,
  BossSeatSwitch,
  CDPlayer,
  CentralLocking,
  ClimateControl,
  Color,
  CoolBox,
  CoverImage,
  CruiseControl,
  drls,
  DVDPlayer,
  Description,
  Displacement,
  DisplaySizeinch,
  DoorOpeningWarning,
  DownHillAssistControl,
  DriverSeatBeltWarning,
  DriverSeatElectricAdjustment,
  DriverSeatLumbarSupport,
  DriverSeatMemoryFunction,
  DrivingModes,
  DualExhaust,
  EXFactoryPrice,
  ElectronicBrakeForceDistributionEBD,
  EngineType,
  FogLights,
  FrontBrakes,
  FrontCamera,
  FrontParkingSensors,
  FrontPowerOutlet,
  FrontSpeakers,
  FrontSuspension,
  FuelSystem,
  FuelTankCapacityL,
  Gearboxspeed,
  GroundClearenceMM,
  Handbrake,
  HeadlightOnReminder,
  HeatedSeats,
  Heater,
  HillStartAssistControl,
  HorsePower,
  Immobilizer,
  InformationCluster,
  KerbWeightKG,
  KeyType,
  KeylessEntry,
  LaneKeepAssistSystemLKAS,
  LaunchDate,
  Make,
  MaxSpeedKMH,
  MileageCityKML,
  MileageHighwayKML,
  Model,
  MultiInfo,
  Navigation,
  NoOfAirbags,
  NoOfCylinders,
  NoOfDoors,
  NoOfSeatbelts,
  NoOfSpeakers,
  OverallLengthMM,
  OverallWidthMM,
  PaddleShifter,
  Panaromic,
  PassengerSeatBeltWarning,
  PassengerSeatElectricAdjustment,
  PowerAssisted,
  PowerDoorLocks,
  PowerMirrors,
  PowerWindows,
  PushStart,
  RainSensingWipers,
  RearACVents,
  RearBrakes,
  RearCamera,
  RearFoldingSeat,
  RearHeadrest,
  RearParkingSensors,
  RearPowerOutlet,
  RearSeatEntertainment,
  RearSpeakers,
  RearSpoiler,
  RearSuspension,
  RearWiper,
  RemoteEngineStart,
  RoofRails,
  SeatMaterialType,
  SeatingCapacity,
  SideMirrorswithIndicators,
  SideSteps,
  SpareTyre,
  SpareTyreSizeInch,
  SpeedSensingAutoDoorLock,
  SteeringAdjustment,
  SteeringSwitches,
  SteeringType,
  SunRoof,
  Tachometer,
  TractionControl,
  TransmissionType,
  TurboCharger,
  TyrePressureMonitoringSystemTPMS,
  TyreSize,
  USBandAuxillaryCable,
  ValvesPerCylinder,
  Varient,
  VehicleStabilityControl,
  VoiceControl,
  WheelBaseMM,
  WheelSizeInch,
  WheelType,
  WirelessCharger,
  Year,
} from "@/Constant";
import { useQuery } from "react-query";
import axios from "axios";
import { FormEvent, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { ButtonSection } from "./ButtonSection";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import Loading from "@/app/loading";
import CommonModal from "@/Components/UiKits/Modal/Common/CommonModal";
import { useAppSelector } from "@/Redux/Hooks";
import { useRouter } from "next/navigation";
import Editor from "@/Components/Miscellaneous/Editors/Editor";

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}`;

interface ImageData {
  id: string; // Adjust the type based on your actual data structure
  filename: string; // Adjust the type based on your actual data structure
  // Add other properties as needed
}

const CreateNewCarForm = () => {
  const router = useRouter();
  const { i18LangStatus } = useAppSelector((state) => state.langSlice);

  const [submitting, setSubmitting] = useState(false);

  const [updateToken, setUpdateToken] = useState("");

  const [postToken, setPostToken] = useState("");

  const [varient, setVarient] = useState("");
  const [bodyType, setBodytype] = useState("");
  const [exFactoryPrice, setExfactoryPrice] = useState<number>();
  const [overallLength, setOverallLength] = useState<number | undefined>();
  const [kerbWeight, setKerbWeight] = useState<number | undefined>();
  const [overallWidth, setOverallWidth] = useState<number | undefined>();
  const [bootSpaceL, setBootSpaceL] = useState<number | undefined>();
  const [wheelBase, setWheelBase] = useState<number | undefined>();
  const [noOfDoors, setNoOfDoors] = useState<number | undefined>();
  const [groundClearance, setGroundClearance] = useState<number | undefined>();
  const [seatingCapacity, setSeatingCapacity] = useState<number | undefined>();
  const [engineType, setEngineType] = useState("");
  const [turboCharger, setTurboCharger] = useState("");
  const [batteryType, setBatteryType] = useState("");
  const [batteryCapacity, setBatteryCapacity] = useState("");
  const [chargingtime, setChargingtime] = useState("");
  const [range, setRange] = useState("");
  const [displacement, setDisplacement] = useState<number | undefined>();
  const [noOfCylinders, setNoOfCylinders] = useState<number | undefined>();
  const [horsePower, setHorsePower] = useState<number | undefined>();
  const [rpm, setRPM] = useState<number | undefined>();
  const [valvesPerCylinder, setValvesPerCylinder] = useState<
    number | undefined
  >();
  const [fuelSystem, setFuelSystem] = useState("");
  const [fuelTankCapacity, setFuelTankCapacity] = useState("");
  const [mileageCity, setMileageCity] = useState("");
  const [mileageHighway, setMileageHighway] = useState("");
  const [maxSpeed, setMaxSpeed] = useState<number | undefined>();
  const [gearBox, setGearBox] = useState<number | undefined>();
  const [steeringType, setSteeringType] = useState("");
  const [powerAssisted, setPowerAssisted] = useState("");
  const [frontSuspension, setFrontSuspension] = useState("");
  const [frontBrakes, setFrontBrakes] = useState("");
  const [rearSuspension, setRearSuspension] = useState("");
  const [rearBrakes, setRearBrakes] = useState("");
  const [wheelType, setWheelType] = useState("");
  const [wheelSize, setWheelSize] = useState<number | undefined>();
  const [spareTyre, setSpareTyre] = useState("");
  const [spareTyreSize, setSpareTyreSize] = useState<number | undefined>();
  const [tyreSizeWidth, setTyreSizeWidth] = useState<number | undefined>();
  const [tyreSizeRatio, setTyreSizeRatio] = useState<number | undefined>();
  const [tyreSizeDiameter, setTyreSizeDiameter] = useState("");

  // features

  const [speedSensingDoorLock, setSpeedSensingDoorLock] = useState("false");
  const [antiTheftAlarmSystem, setAntiTheftAlarmSystem] = useState("false");
  const [driverSeatBeltWarning, setDriverSeatBeltWarning] = useState("false");
  const [downHillAssistControl, setDownHillAssistControl] = useState("false");
  const [passengerSeatBeltWarning, setPassengerSeatBeltWarning] =
    useState("false");
  const [hillStartAssistControl, setHillStartAssistControl] = useState("false");
  const [immobilizer, setImmobilizer] = useState("false");
  const [tractionControl, setTractionControl] = useState("false");
  const [vehicleStabilityControl, setVehicleStabilityControl] =
    useState("false");
  const [blindSpotDetection, setBlindSpotDetection] = useState("false");
  const [antiLockBrakingSystem, setAntiLockBrakingSystem] = useState("false");
  const [doorOpeningWarning, setDoorOpeningWarning] = useState("false");
  const [laneKeepAssistSystem, setLaneKeepAssistSystem] = useState("false");
  const [electricBrakeForce, setElectricBrakeForce] = useState("false");
  const [autonomousEmergencyBraking, setAutonomousEmergencyBraking] =
    useState("false");
  const [alloyWheels, setAlloyWheels] = useState("false");
  const [adjustableHeadlights, setAdjustableHeadlights] = useState("false");
  const [rearSpoiler, setRearSpoiler] = useState("false");
  const [sideMirrorIndicators, setSideMirrorIndicators] = useState("false");
  const [panaromic, setPanaromic] = useState("false");
  const [fogLights, setFogLights] = useState("false");
  const [DRLs, setDRLs] = useState("false");
  const [roofRails, setRoofRails] = useState("");
  const [sideSteps, setSideSteps] = useState("false");
  const [dualExhaust, setDualExhaust] = useState("false");
  const [tachometer, setTachometer] = useState("false");
  const [multiInfo, setMultiInfo] = useState("false");
  const [infoCluster, setInfoCluster] = useState("false");
  const [displaySize, setDisplaySize] = useState("false");
  const [usbAuxilaryCable, setUSBAuxilaryCable] = useState("false");
  const [noOfSpeakers, setNoOfSpeakers] = useState("");
  const [voiceControl, setVoiceControl] = useState("false");
  const [androidAuto, setAndroidAuto] = useState("false");
  const [appleCarPlay, setAppleCarPlay] = useState("false");
  const [seatMaterialType, setSeatMaterialType] = useState("");
  const [keyType, setKeyType] = useState("false");
  const [cruiseControl, setCruiseControl] = useState("false");
  const [rainSensingWiper, setRainSensingWiper] = useState("false");
  const [drivingModes, setDrivingModes] = useState("false");
  const [paddleShifter, setPaddleShifter] = useState("false");
  const [heater, setHeater] = useState("false");
  const [pushStart, setPushStart] = useState("false");
  const [coolBox, setCoolBox] = useState("false");
  const [remoteEngineStart, setRemoteEngineStart] = useState("false");
  const [navigation, setNavigation] = useState("false");
  const [centralLocking, setCentralLocking] = useState("false");
  const [powerDoorLocks, setPowerDoorLocks] = useState("false");
  const [autoRetractableSideMirror, setAutoRetractableSideMirror] =
    useState("false");
  const [frontParkingSensors, setFrontParkingSensors] = useState("false");
  const [rearParkingSensors, setRearParkingSensors] = useState("false");
  const [armRest, setArmRest] = useState("false");
  const [rearFoldingSeat, setRearFoldingSeat] = useState("false");
  const [handBrake, setHandBrake] = useState("");
  const [rearHeadRest, setRearHeadRest] = useState("false");
  const [autoBrakeHold, setAutoBrakeHold] = useState("false");
  const [rearWiper, setRearWiper] = useState("false");
  const [autoParkingSystem, setAutoParkingSystem] = useState("false");
  const [driverSeatElectricAdjustment, setDriverSeatElectricAdjustment] =
    useState("false");
  const [driverSeatLumbarSupport, setDriverSeatLumbarSupport] =
    useState("false");
  const [driverSeatMemoryFunction, setDriverSeatMemoryFunction] =
    useState("false");
  const [frontPowerOutlet, setFrontPowerOutlet] = useState("false");
  const [reartPowerOutlet, setRearPowerOutlet] = useState("false");
  const [steeringAdjustment, setSteeringAdjustment] = useState("false");
  const [wirelessCharger, setWirelessCharger] = useState("false");
  const [headlightReminder, setHeadlightReminder] = useState("false");
  const [bossSeatSwitch, setBossSeatSwitch] = useState("false");
  const [automaticHeadLamps, setAutomaticHeadLamps] = useState("false");
  const [tyrePressureMonitoringSystem, setTyrePressureMonitoringSystem] =
    useState("false");
  const [passengerSeatElectricAdjustment, setPassengerSeatElectricAdjustment] =
    useState("false");

  const [coverImage, setCoverImage] = useState("-");
  const [color, setColor] = useState("");
  const [makeId, setMakeId] = useState("");
  const [modelName, setModelName] = useState("");
  const [yearName, setYearName] = useState("");
  const [transmission, setTransmission] = useState("");
  const [vehicleCondition, setVehicleCondition] = useState("");
  const [vehicleFuel, setVehicleFuel] = useState("");
  const [images, setImages] = useState<string[]>([]);

  const [price, setPrice] = useState<number | undefined>();
  const [selectedStartTime, setSelectedStartTime] = useState<string>("");
  const [selectedEndTime, setSelectedEndTime] = useState<string>("");
  const [randomString, setRandomString] = useState("");
  const [description, setDescription] = useState("");
  const [launchDate, setLaunchDate] = useState<any>(new Date());
  const [makeName, setMakeName] = useState("");
  const [vehicleColour, setVehicleColour] = useState("");
  const [startingAmount, setStartingAmount] = useState("");
  const [prevImg, setPrevImg] = useState<any>("");
  const [imageApi, setImageApi] = useState(true);
  const postDisabled = imageApi === false;
  const [imageErrorMessage, setImageErrorMessage] = useState("");
  const [open, setOpen] = useState(false);

  // features

  const [abs, setABS] = useState("false");
  const [airbags, setAirBags] = useState("");
  const [seatbelts, setSeatbelts] = useState("");
  const [airconditioning, setAirConditioning] = useState("false");
  const [fm, setFM] = useState("false");
  const [cassettePlayer, setCassettePlayer] = useState("false");
  const [cdPlayer, setCDPlayer] = useState("false");
  const [dvdPlayer, setDVDPlayer] = useState("false");
  const [climateControl, setClimateControl] = useState("false");
  const [frontCamera, setFrontCamera] = useState("false");
  const [Camera360, setCamera360] = useState("false");
  const [frontSpeakers, setFrontSpeakers] = useState("false");
  const [heatedSeats, setHeatedSeats] = useState("false");
  const [immobilizerKey, setImmobilizerKey] = useState("false");
  const [keylessEntry, setKeylessEntry] = useState("false");
  const [navigationSystem, setNavigationSystem] = useState("false");
  const [powerLocks, setPowerLocks] = useState("false");
  const [powerMirrors, setPowerMirrors] = useState("false");
  const [powerSteering, setPowerSteering] = useState("false");
  const [powerWindows, setPowerWindows] = useState("false");
  const [rearACVents, setRearACVents] = useState("false");
  const [rearCamera, setRearCamera] = useState("false");
  const [rearSeatEntertainment, setRearSeatEntertainment] = useState("false");
  const [rearSpeakers, setRearSpeakers] = useState("false");
  const [steeringSwitches, setSteeringSwitches] = useState("false");
  const [sunRoof, setSunRoof] = useState("false");
  const [usb, setUSB] = useState("false");
  const [alloyRims, setAlloyRims] = useState("false");
  const [getUpdate, setGetUpdate] = useState(false);

  const [imagesPath, setImagesPath] = useState("");
  const [uploadedImages, setUploadedImages] = useState([]);
  const [newFiles, setNewFiles] = useState([]);
  const [files, setFiles] = useState<any[]>([]);
  const [moreImages, setMoreImages] = useState<any[]>([]);
  const [id, setId] = useState<string | null>(null);

  // for parsing data

  const [dimensionsObj, setDimensionsObj] = useState<object | any>({});
  const [engineMotor, setEngineMotor] = useState<object | any>({});
  const [transmissionObj, setTransmissionObj] = useState<object | any>({});
  const [steering, setSteering] = useState<object | any>({});
  const [suspension, setsuspension] = useState<object | any>({});
  const [wheelTyre, setWheelTyre] = useState<object | any>({});
  const [fuelEconomy, setFuelEconomy] = useState<object | any>({});
  const [safety, setSafety] = useState<object | any>({});
  const [exterior, setExterior] = useState<object | any>({});
  const [instrument, setInstrument] = useState<object | any>({});
  const [info, setInfo] = useState<object | any>({});
  const [comfort, setComfort] = useState<object | any>({});

  const generateToken = () => {
    const newToken = uuidv4().replace(/-/g, "").slice(0, 12);
    setPostToken(newToken);
  };

  const getPostDetil = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/newcarpostdetails`, {
        params: {
          newcarpost_id: id,
        },
      });
      setMakeName(response?.data?.data?.make);

      setUpdateToken(response?.data?.data?.newcarpost_token);
      setDimensionsObj(JSON.parse(response?.data?.data?.newcarpost_dimensions));
      setEngineMotor(JSON.parse(response?.data?.data?.newcarpost_enginemotor));
      setTransmissionObj(
        JSON.parse(response?.data?.data?.newcarpost_transmission)
      );
      setSteering(JSON.parse(response?.data?.data?.newcarpost_steering));
      setsuspension(
        JSON.parse(response?.data?.data?.newcarpost_suspensionbrakes)
      );
      setWheelTyre(JSON.parse(response?.data?.data?.newcarpost_wheeltyres));
      setFuelEconomy(JSON.parse(response?.data?.data?.newcarpost_fueleconomy));
      setSafety(JSON.parse(response?.data?.data?.newcarpost_safety));
      setExterior(JSON.parse(response?.data?.data?.newcarpost_exterior));
      setInstrument(
        JSON.parse(response?.data?.data?.newcarpost_instrumentation)
      );
      setInfo(JSON.parse(response?.data?.data?.newcarpost_Infotainment));
      setComfort(
        JSON.parse(response?.data?.data?.newcarpost_comfortconvenience)
      );

      setModelName(response?.data?.data?.model_id);
      setYearName(response?.data?.data?.year_id);
      return response?.data?.data;
    } catch (error) {
      console.log(error);
    }
  };

  const {
    data: carData,
    error: carError,
    isLoading: carLoading,
  } = useQuery(`getCarData${id}`, getPostDetil, {
    enabled: !!id, // Set enabled to false initially
  });

  const getPostImages = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/postimages`, {
        params: {
          post_id: updateToken || postToken,
        },
      });

      setUploadedImages(response?.data?.images);
      setMoreImages(response?.data?.images);
      setImagesPath(response?.data?.imagepath);

      return response?.data;
    } catch (error) {
      console.log(error);
    }
  };

  const {
    data: newImages,
    error: imgError,
    isLoading: imgLoading,
  } = useQuery(`getCarImgs_${getUpdate}`, getPostImages, {
    enabled: !!updateToken,
  });

  const extractTokenFromUrl = (url: string, paramName: string) => {
    const urlSearchParams = new URLSearchParams(url);
    return urlSearchParams.get(paramName);
  };

  useEffect(() => {
    const url = window.location.search;
    const ID = extractTokenFromUrl(url, "id");
    setId(ID);
    // Call the function when the component mounts
    if (!id) {
      generateToken();
    }
  }, []);

  function formatDate(dateString: any) {
    const parts = dateString?.match(/(\d+)-(\d+)-(\d+)/);

    if (!parts) {
      // Handle invalid format
      return null; // Or throw an error, depending on your use case
    }

    const [, year, month, day] = parts;

    setLaunchDate(new Date(year, month - 1, day));

    return new Date(year, month - 1, day);
  }

  useEffect(() => {
    setMakeId(carData?.make_id);
    setModelName(carData?.model_id);
    setYearName(carData?.year_id);
    setVarient(carData?.newcarpost_variants);
    setColor(carData?.newcarpost_color);
    setBodytype(carData?.newcarpost_bodytype);
    setDescription(carData?.newcarpost_overview);
    setExfactoryPrice(carData?.newcarpost_price);

    formatDate(carData?.newcarpost_date);

    //// dimensions

    setOverallLength(dimensionsObj?.overallLength);
    setKerbWeight(dimensionsObj?.kerbWeight);
    setOverallWidth(dimensionsObj?.overallWidth);
    setBootSpaceL(dimensionsObj?.bootSpaceL);
    setWheelBase(dimensionsObj?.wheelBase);
    setNoOfDoors(dimensionsObj?.noOfDoors);
    setGroundClearance(dimensionsObj?.groundClearance);
    setSeatingCapacity(dimensionsObj?.seatingCapacity);

    // engine / motor

    setEngineType(engineMotor?.engineType);
    setBatteryType(engineMotor?.batteryType);
    setBatteryCapacity(engineMotor?.batteryCapacity);
    setChargingtime(engineMotor?.chargingtime);
    setRange(engineMotor?.range);
    setTurboCharger(engineMotor?.turboCharger);
    setDisplacement(engineMotor?.displacement);
    setNoOfCylinders(engineMotor?.noOfCylinders);
    setHorsePower(engineMotor?.horsePower);
    setRPM(engineMotor?.rpm);
    setValvesPerCylinder(engineMotor?.valvesPerCylinder);
    setFuelSystem(engineMotor?.fuelSystem);
    setMaxSpeed(engineMotor?.maxSpeed);

    // transmission

    setTransmission(transmissionObj?.transmission);
    setGearBox(transmissionObj?.gearBox);

    // steering

    setSteeringType(steering?.steeringType);
    setPowerAssisted(steering?.powerAssisted);

    // suspension

    setFrontSuspension(suspension?.frontSuspension);
    setFrontBrakes(suspension?.frontBrakes);
    setRearSuspension(suspension?.rearSuspension);
    setRearBrakes(suspension?.rearBrakes);

    // wheel tyre

    setWheelType(wheelTyre?.wheelType);
    setWheelSize(wheelTyre?.wheelSize);
    setSpareTyre(wheelTyre?.spareTyre);
    setSpareTyreSize(wheelTyre?.spareTyreSize);
    setTyreSizeWidth(wheelTyre?.tyreSizeWidth);
    setTyreSizeRatio(wheelTyre?.tyreSizeRatio);
    setTyreSizeDiameter(wheelTyre?.tyreSizeDiameter);

    // fuel economy

    setFuelTankCapacity(fuelEconomy?.fuelTankCapacity);
    setMileageCity(fuelEconomy?.mileageCity);
    setMileageHighway(fuelEconomy?.mileageHighway);

    // safety

    setAirBags(safety?.airbags);
    setSeatbelts(safety?.seatbelts);
    setSpeedSensingDoorLock(safety?.speedSensingDoorLock);
    setAntiTheftAlarmSystem(safety?.antiTheftAlarmSystem);
    setDriverSeatBeltWarning(safety?.driverSeatBeltWarning);
    setDownHillAssistControl(safety?.downHillAssistControl);
    setPassengerSeatBeltWarning(safety?.passengerSeatBeltWarning);
    setHillStartAssistControl(safety?.hillStartAssistControl);
    setImmobilizer(safety?.immobilizer);
    setTractionControl(safety?.tractionControl);
    setVehicleStabilityControl(safety?.vehicleStabilityControl);
    setBlindSpotDetection(safety?.blindSpotDetection);
    setAntiLockBrakingSystem(safety?.antiLockBrakingSystem);
    setDoorOpeningWarning(safety?.doorOpeningWarning);
    setLaneKeepAssistSystem(safety?.laneKeepAssistSystem);
    setElectricBrakeForce(safety?.electricBrakeForce);
    setAutonomousEmergencyBraking(safety?.autonomousEmergencyBraking);

    // exterior

    setAlloyWheels(exterior?.alloyWheels);
    setAdjustableHeadlights(exterior?.adjustableHeadlights);
    setRearSpoiler(exterior?.rearSpoiler);
    setSideMirrorIndicators(exterior?.sideMirrorIndicators);
    setSunRoof(exterior?.sunRoof);
    setPanaromic(exterior?.panaromic);
    setFogLights(exterior?.fogLights);
    setDRLs(exterior?.DRLs);
    setRoofRails(exterior?.roofRails);
    setSideSteps(exterior?.sideSteps);
    setDualExhaust(exterior?.dualExhaust);

    // Instrumentation
    setTachometer(instrument?.tachometer);
    setMultiInfo(instrument?.multiInfo);
    setInfoCluster(instrument?.infoCluster);

    // Infotainment

    setDisplaySize(info?.displaySize);
    setUSBAuxilaryCable(info?.usbAuxilaryCable);
    setCDPlayer(info?.cdPlayer);
    setDVDPlayer(info?.dvdPlayer);
    setNoOfSpeakers(info?.noOfSpeakers);
    setFrontSpeakers(info?.frontSpeakers);
    setRearSpeakers(info?.rearSpeakers);
    setRearSeatEntertainment(info?.rearSeatEntertainment);
    setVoiceControl(info?.voiceControl);
    setAndroidAuto(info?.androidAuto);
    setAppleCarPlay(info?.appleCarPlay);

    // comfort

    setSeatMaterialType(comfort?.seatMaterialType);
    setKeyType(comfort?.keyType);
    setAirConditioning(comfort?.airconditioning);
    setRainSensingWiper(comfort?.rainSensingWiper);
    setClimateControl(comfort?.climateControl);
    setCruiseControl(comfort?.cruiseControl);
    setRearACVents(comfort?.rearACVents);
    setDrivingModes(comfort?.drivingModes);
    setPaddleShifter(comfort?.paddleShifter);
    setHeater(comfort?.heater);
    setHeatedSeats(comfort?.heatedSeats);
    setKeylessEntry(comfort?.keylessEntry);
    setPushStart(comfort?.pushStart);
    setCoolBox(comfort?.coolBox);
    setRemoteEngineStart(comfort?.remoteEngineStart);
    setNavigation(comfort?.navigation);
    setCentralLocking(comfort?.centralLocking);
    setPowerDoorLocks(comfort?.powerDoorLocks);
    setFrontCamera(comfort?.frontCamera);
    setRearCamera(comfort?.rearCamera);
    setCamera360(comfort?.Camera360);
    setPowerWindows(comfort?.powerWindows);
    setPowerMirrors(comfort?.powerMirrors);
    setAutoRetractableSideMirror(comfort?.autoRetractableSideMirror);
    setFrontParkingSensors(comfort?.frontParkingSensors);
    setRearParkingSensors(comfort?.rearParkingSensors);
    setArmRest(comfort?.armRest);
    setRearFoldingSeat(comfort?.rearFoldingSeat);
    setHandBrake(comfort?.handBrake);
    setRearHeadRest(comfort?.rearHeadRest);
    setAutoBrakeHold(comfort?.autoBrakeHold);
    setRearWiper(comfort?.rearWiper);
    setAutoParkingSystem(comfort?.autoParkingSystem);
    setDriverSeatElectricAdjustment(comfort?.driverSeatElectricAdjustment);
    setDriverSeatLumbarSupport(comfort?.driverSeatLumbarSupport);
    setDriverSeatMemoryFunction(comfort?.driverSeatMemoryFunction);
    setFrontPowerOutlet(comfort?.frontPowerOutlet);
    setRearPowerOutlet(comfort?.reartPowerOutlet);
    setSteeringAdjustment(comfort?.steeringAdjustment);
    setSteeringSwitches(comfort?.steeringSwitches);
    setWirelessCharger(comfort?.wirelessCharger);
    setHeadlightReminder(comfort?.headlightReminder);
    setBossSeatSwitch(comfort?.bossSeatSwitch);
    setAutomaticHeadLamps(comfort?.automaticHeadLamps);
    setTyrePressureMonitoringSystem(comfort?.tyrePressureMonitoringSystem);
    setPassengerSeatElectricAdjustment(
      comfort?.passengerSeatElectricAdjustment
    );
  }, [carData]);

  const dimensions = {
    overallLength,
    kerbWeight,
    overallWidth,
    bootSpaceL,
    wheelBase,
    noOfDoors,
    groundClearance,
    seatingCapacity,
  };
  const dimensionsJSON = JSON.stringify(dimensions);

  const EngineMotor = {
    engineType,
    turboCharger,
    batteryType,
    batteryCapacity,
    chargingtime,
    range,

    displacement,
    noOfCylinders,
    horsePower,
    rpm,
    valvesPerCylinder,
    fuelSystem,
    maxSpeed,
  };
  const EngineMotorJSON = JSON.stringify(EngineMotor);

  const Transmission = { transmission, gearBox };
  const TransmissionJSON = JSON.stringify(Transmission);

  const Steering = { steeringType, powerAssisted };
  const SteeringJSON = JSON.stringify(Steering);

  const suspensionBrakes = {
    frontSuspension,
    frontBrakes,
    rearSuspension,
    rearBrakes,
  };
  const suspensionBrakesJSON = JSON.stringify(suspensionBrakes);

  const WheelsandTyres = {
    wheelType,
    wheelSize,
    spareTyre,
    spareTyreSize,
    tyreSizeWidth,
    tyreSizeRatio,
    tyreSizeDiameter,
  };
  const WheelsandTyresJSON = JSON.stringify(WheelsandTyres);

  const FuelEconomy = { fuelTankCapacity, mileageCity, mileageHighway };
  const FuelEconomyJSON = JSON.stringify(FuelEconomy);

  const Safety = {
    speedSensingDoorLock,
    antiTheftAlarmSystem,
    driverSeatBeltWarning,
    downHillAssistControl,
    passengerSeatBeltWarning,
    hillStartAssistControl,
    immobilizer,
    tractionControl,
    vehicleStabilityControl,
    blindSpotDetection,
    antiLockBrakingSystem,
    doorOpeningWarning,
    laneKeepAssistSystem,
    electricBrakeForce,
    autonomousEmergencyBraking,
    airbags,
    seatbelts,
  };
  const SafetyJSON = JSON.stringify(Safety);

  const Exterior = {
    alloyWheels,
    adjustableHeadlights,
    rearSpoiler,
    sideMirrorIndicators,
    sunRoof,
    panaromic,
    fogLights,
    DRLs,
    roofRails,
    sideSteps,
    dualExhaust,
  };
  const ExteriorJSON = JSON.stringify(Exterior);

  const Instrumentation = {
    tachometer,
    multiInfo,
    infoCluster,
  };
  const InstrumentationJSON = JSON.stringify(Instrumentation);

  const Infotainment = {
    displaySize,
    usbAuxilaryCable,
    cdPlayer,
    dvdPlayer,
    noOfSpeakers,
    frontSpeakers,
    rearSpeakers,
    rearSeatEntertainment,
    voiceControl,
    androidAuto,
    appleCarPlay,
  };
  const InfotainmentJSON = JSON.stringify(Infotainment);

  const ComfortandConvenience = {
    seatMaterialType,
    keyType,
    airconditioning,
    rainSensingWiper,
    climateControl,
    cruiseControl,
    rearACVents,
    drivingModes,
    paddleShifter,
    heater,
    heatedSeats,
    keylessEntry,
    pushStart,
    coolBox,
    remoteEngineStart,
    navigation,
    centralLocking,
    powerDoorLocks,
    frontCamera,
    rearCamera,
    Camera360,
    powerWindows,
    powerMirrors,
    autoRetractableSideMirror,
    frontParkingSensors,
    rearParkingSensors,
    armRest,
    rearFoldingSeat,
    handBrake,
    rearHeadRest,
    autoBrakeHold,
    rearWiper,
    autoParkingSystem,
    driverSeatElectricAdjustment,
    driverSeatLumbarSupport,
    driverSeatMemoryFunction,
    frontPowerOutlet,
    reartPowerOutlet,
    steeringAdjustment,
    steeringSwitches,
    wirelessCharger,
    headlightReminder,
    bossSeatSwitch,
    automaticHeadLamps,
    tyrePressureMonitoringSystem,
    passengerSeatElectricAdjustment,
  };
  const ComfortandConvenienceJSON = JSON.stringify(ComfortandConvenience);

  const updateFiles = async (incomingFiles: any) => {
    setFiles(incomingFiles);
    setMoreImages(incomingFiles);
    try {
      const formData: any = new FormData();
      formData.append("imagesList", null);
      formData.append(`post_token`, updateToken ? updateToken : postToken);

      files.forEach((image: any) => {
        formData.append(`file[]`, image.file);
      });

      // moreImages.forEach((image:any) => {
      //   formData.append(`file[]`, image.file);
      //   console.log("images",image)
      // });

      if (incomingFiles?.length > 0) {
        incomingFiles.forEach((image: any) => {
          formData.append(`file[]`, image.file);
        });
      }

      const response = await axios.post(`${BASE_URL}/savepostimage`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      // if (response?.data) {
      //   setUploadedImages([...uploadedImages,...response?.data])
      // }
      // setMoreImages(response?.data?.adds)
      setNewFiles(response?.data?.adds);

      setImageApi(true);
    } catch (error) {
      console.error("image upload Error:", error);
    }
  };

  const removeFile = async (name: any, index: number) => {
    setFiles(files.filter((x: ExtFile) => x.id !== id));

    // const formData = new FormData()
    // formData.append("post_id",updateToken ? updateToken : postToken)
    // formData.append("filename",name)

    files.splice(index, 1);
    setFiles([...files]);

    // uploadedImages.splice(index, 1);
    // setUploadedImages([...uploadedImages]);

    moreImages.splice(index, 1);
    setMoreImages([...moreImages]);

    newFiles.splice(index, 1);
    setNewFiles([...newFiles]);

    try {
      const response = await axios.get(`${BASE_URL}/deleteImages`, {
        params: {
          post_id: updateToken ? updateToken : postToken,
          filename: name,
        },
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      setGetUpdate(!getUpdate);
      setFiles(files.splice(0, index));
    } catch (error) {
      console.error("image delete Error:", error);
    }
  };

  const token = localStorage.getItem("authToken");

  const fetchBodyType = async () => {
    const res = await axios.get(`${BASE_URL}/bodytypelist`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  };

  const {
    data: bodyTypes,
    error,
    isLoading,
  } = useQuery(`newCarBodyType`, fetchBodyType);

  const fetchMake = async () => {
    const res = await axios.get(`${BASE_URL}/byMake`, {
      params: {},
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  };

  const {
    data: makeData,
    error: makeError,
    isLoading: makeLoading,
  } = useQuery("myMake", fetchMake);

  const fetchMakeById = async () => {
    const res = await axios.get(`${BASE_URL}/model-by-make`, {
      params: {
        make_id: makeId,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // setModelName("")
    // setYearName("")

    return res.data;
  };

  const {
    data: makeOne,
    error: makeOneError,
    isLoading: makeOneLoading,
  } = useQuery(`myModelsById_${makeId}`, fetchMakeById, {
    enabled: !!makeId, // Set enabled to false initially
  });

  const fetchModelYear = async () => {
    const res = await axios.get(`${BASE_URL}/getModelYear`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  };

  const {
    data: makeYear,
    error: makeYearError,
    isLoading: makeYearLoading,
  } = useQuery(`myYear_${modelName}`, fetchModelYear, {
    enabled: !!modelName, // Set enabled to false initially
  });

  const fetchVariant = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/getVarientList`, {
        params: {
          modelId: modelName,
          yearId: yearName,
        },
      });

      // setVariantList(response.data);
      return response?.data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const {
    data: variants,
    error: variantError,
    isLoading: variantLoading,
  } = useQuery(`myVariants_${modelName}${makeName}${yearName}`, fetchVariant, {
    enabled: !!yearName, // Set enabled to false initially
  });

  const seats = [
    {
      title: "0",
      value: "0",
    },
    {
      title: "1",
      value: "1",
    },
    {
      title: "2",
      value: "2",
    },
    {
      title: "3",
      value: "3",
    },
    {
      title: "4",
      value: "4",
    },
    {
      title: "5",
      value: "5",
    },
    {
      title: "6",
      value: "6",
    },
    {
      title: "7",
      value: "7",
    },
    {
      title: "8",
      value: "8",
    },
    {
      title: "9",
      value: "9",
    },
    {
      title: "10",
      value: "10",
    },
    {
      title: "11",
      value: "11",
    },
    {
      title: "12",
      value: "12",
    },
    {
      title: "13",
      value: "13",
    },
    {
      title: "14",
      value: "14",
    },
    {
      title: "15",
      value: "15",
    },
    {
      title: "16",
      value: "16",
    },
    {
      title: "17",
      value: "17",
    },
    {
      title: "18",
      value: "18",
    },
    {
      title: "19",
      value: "19",
    },
    {
      title: "20",
      value: "20",
    },
  ];

  const featureSelection = [
    {
      title: "false",
      value: "false",
    },
    {
      title: "true",
      value: "true",
    },
  ];

  const coverChange = (e: any) => {
    const file = e.target.files[0];
    setCoverImage(file);

    const reader = new FileReader();

    reader.onload = () => {
      const imageSrc = reader.result;
      setPrevImg(imageSrc);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData();

    if (files.length !== 0 || uploadedImages.length !== 0) {
      // prevImg.forEach((file) => {
      //   formData.append("imageFiles", file);
      // });

      formData.append("newcarpost_cover", coverImage);
      formData.append("newcarpost_dimensions", `${dimensionsJSON}`);
      formData.append("newcarpost_enginemotor", `${EngineMotorJSON}`);
      formData.append("newcarpost_transmission", TransmissionJSON);
      formData.append("newcarpost_steering", SteeringJSON);
      formData.append("newcarpost_suspensionbrakes", suspensionBrakesJSON);
      formData.append("newcarpost_wheeltyres", WheelsandTyresJSON);
      formData.append("newcarpost_fueleconomy", FuelEconomyJSON);
      formData.append("newcarpost_safety", SafetyJSON);
      formData.append("newcarpost_exterior", ExteriorJSON);
      formData.append("newcarpost_instrumentation", InstrumentationJSON);
      formData.append("newcarpost_Infotainment", InfotainmentJSON);
      formData.append(
        "newcarpost_comfortconvenience",
        ComfortandConvenienceJSON
      );
      formData.append(
        `newcarpost_token`,
        updateToken ? updateToken : postToken
      );
      formData.append(`newcarpost_launchdate`, launchDate);
      formData.append(`make_id`, makeId);
      formData.append(`model_id`, modelName);
      formData.append(`year_id`, yearName);
      formData.append(`newcarpost_price`, `${exFactoryPrice}`);
      formData.append(`newcarpost_color`, `${color}`);
      formData.append(`newcarpost_bodytype`, `${bodyType}`);
      formData.append(`newcarpost_variants`, `${varient}`);
      formData.append(`newcarpost_overview`, `${description}`);
      formData.append(`bodytype_id`, `${bodyType}`);
      if (id) {
        formData.append(`newcarpost_id`, `${id}`);
      }

      if (uploadedImages.length !== 0) {
        moreImages.forEach((image: any) => {
          formData.append(`imageFiles[]`, image.filename);
        });
      }

      if (files.length !== 0) {
        newFiles.forEach((image: any) => {
          formData.append(`imageFiles[]`, image);
        });
      }

      setSubmitting(true);
      try {
        const response = await axios.post(
          `${BASE_URL}/${
            updateToken ? "savenewcarpostupdate" : "savenewcarpost"
          }`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );

        toast.success(response?.data?.message);
        router.push(`/${i18LangStatus}/new_car/carpostlist`);
      } catch (error) {
        console.log(error);
      } finally {
        setSubmitting(false);
      }
    } else {
      toast.error("Images Required");
    }
  };

  const [centred, setCentered] = useState(false);

  const centeredToggle = () => {
    return setCentered(!centred);
  };

  const handleEditorDataChange = (data: string) => {
    setDescription(data);
  };

  return (
    <>
      {submitting ? (
        <Loading />
      ) : (
        <form onSubmit={handleSubmit}>
          <h1 className="faq-title">Basic Information</h1>

          <Row>
            <Col>
              <FormGroup>
                <Label check>New Car Images</Label>
                <Dropzone
                  onChange={updateFiles}
                  required
                  accept="image/*"
                  value={files}
                  maxFiles={20}
                  header={false}
                  footer={false}
                  minHeight="80px"
                  label="Drag'n drop files here or click to Browse"
                >
                  {files?.length === 0 && (
                    <div className="dz-message needsclick">
                      <i className="icon-cloud-up fs-1 txt-primary"></i>
                      <h6 className="f-w-700 mb-1">
                        Drop images here or click to upload.
                      </h6>
                      <h6 className="note needsclick">
                        (This is a dropzone. Selected )
                      </h6>
                    </div>
                  )}

                  {files?.map((file: ImageData, ind) => {
                    return (
                      <FileMosaic
                        key={file.id}
                        {...file}
                        onDelete={() => removeFile(file, ind)}
                        preview
                      />
                    );
                  })}
                </Dropzone>

                {uploadedImages?.length !== 0 && (
                  <h4 className="faq-title">Previous Images</h4>
                )}

                <div className="d-flex flex-wrap w-100 justify-content-center gap-2 border-1 mt-4 align-items-center ">
                  {uploadedImages?.map((file: ImageData, ind) => {
                    return (
                      // <FileMosaic key={file.id} {...file} onDelete={removeFile} preview/>
                      <div className=" position-relative d-flex w-25" key={ind}>
                        <img
                          src={`${imagesPath}/${updateToken || postToken}/${
                            file?.filename
                          }`}
                          className="img-fluid object-fit-contain rounded-4 "
                          alt={file.filename}
                        />
                        <i
                          className="icofont icofont-close-circled rounded-pill bg-primary fs-6 position-absolute top-0 z-3 m-1"
                          style={{ right: "0%", cursor: "pointer" }}
                          onClick={() => removeFile(file.filename, ind)}
                        ></i>
                      </div>
                    );
                  })}
                </div>
              </FormGroup>
            </Col>
          </Row>

          <CommonModal
            centered
            isOpen={centred}
            toggle={centeredToggle}
            size="md"
          >
            <div className="modal-toggle-wrapper">
              {updateToken ? (
                <img
                  src={`${BASE_URL}/public/posts/${updateToken}/${carData?.newcarpost_cover}`}
                  alt="cover-image"
                  className="img-fluid"
                />
              ) : (
                <img src={prevImg} alt="cover-image" className="img-fluid" />
              )}

              <Button
                type="button"
                color="secondary"
                className="d-flex m-auto"
                onClick={centeredToggle}
              >
                Close
              </Button>
            </div>
          </CommonModal>

          <Row>
            <Col lg="3" md="6">
              <FormGroup>
                <Label check>{CoverImage}</Label>
                <div className="d-flex gap-1 align-items-center ">
                  <Input
                    required={coverImage ? false : true}
                    name="coverImage"
                    type="file"
                    className="form-control"
                    onChange={coverChange}
                    placeholder="Cover Image"
                  />
                  {coverImage && (
                    <p
                      className="py-1 px-3 bg-primary rounded"
                      style={{ cursor: "pointer" }}
                      onClick={() => setCentered(true)}
                    >
                      <i className="icofont icofont-eye-alt"></i>
                    </p>
                  )}
                </div>
                {/* <ErrorMessage
                name="coverImage"
                component="span"
                className="text-danger"
              /> */}
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{Make}</Label>
                <Input
                  required
                  name="make"
                  type="select"
                  placeholder={Make}
                  className="form-control form-select"
                  onChange={(e: any) => setMakeId(e.target.value)}
                  value={makeId}
                >
                  <option value="" disabled>
                    Select Make
                  </option>
                  {makeData?.map((make: any) => (
                    <option key={make?.makeId} value={make?.makeId}>
                      {make.makeName}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{Model}</Label>
                <Input
                  required
                  name="model"
                  type="select"
                  disabled={makeOne?.length > 0 ? false : true}
                  placeholder={Model}
                  className="form-control form-select"
                  onChange={(e: any) => setModelName(e.target.value)}
                  value={modelName}
                >
                  <option value="" disabled>
                    Select Model
                  </option>
                  {makeOne?.map((model: any) => (
                    <option key={model?.modelId} value={model?.modelId}>
                      {model.modelName}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{Year}</Label>
                <Input
                  required
                  name="year"
                  type="select"
                  disabled={makeYear?.length > 0 ? false : true}
                  placeholder={Year}
                  className="form-control form-select"
                  onChange={(e: any) => setYearName(e.target.value)}
                  value={yearName}
                >
                  <option value="" disabled>
                    Select Year
                  </option>
                  {makeYear?.map((year: any) => (
                    <option key={year?.yearId} value={year?.yearId}>
                      {year.year}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            {yearName && (
              <Col lg="3" md="6">
                <FormGroup>
                  <Label check>{Varient}</Label>
                  {variants?.length > 0 && (
                    <Input
                      required
                      name="varient"
                      type="select"
                      disabled={variants?.length > 0 ? false : true}
                      placeholder={`Select ${modelName} Varient`}
                      className="form-control form-select"
                      onChange={(e: any) => setVarient(e.target.value)}
                      value={varient}
                    >
                      <option value="" disabled>
                        Select {modelName} Variant
                      </option>
                      {variants &&
                        variants.map((item: any) => (
                          <option key={item.featuresId} value={item.featuresId}>
                            {item.featureName}
                          </option>
                        ))}
                    </Input>
                  )}

                  {modelName && yearName !== " " && variants?.length === 0 && (
                    <Input
                      required
                      name="varient"
                      type="text"
                      className="form-control"
                      placeholder="Varient"
                      onChange={(e: any) => setVarient(e.target.value)}
                      value={varient}
                    />
                  )}
                </FormGroup>
              </Col>
            )}

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{BodyType}</Label>
                <Input
                  required
                  name="bodyType"
                  type="select"
                  placeholder={BodyType}
                  className="form-control form-select"
                  onChange={(e: any) => setBodytype(e.target.value)}
                  value={bodyType}
                >
                  <option value="" disabled>
                    Select BodyType
                  </option>
                  {bodyTypes?.map((body: any) => (
                    <option key={body?.bodytype_id} value={body?.bodytype_id}>
                      {body.bodytype_name}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label check>{Color}</Label>
                <Input
                  required
                  name="color"
                  type="text"
                  className="form-control"
                  placeholder="Color"
                  onChange={(e: any) => setColor(e.target.value)}
                  value={color}
                />
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label check>{EXFactoryPrice}</Label>
                <Input
                  required
                  name="exFactoryPrice"
                  type="number"
                  className="form-control"
                  placeholder={EXFactoryPrice}
                  onChange={(e: any) => setExfactoryPrice(e.target.value)}
                  value={exFactoryPrice}
                />
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup className="d-flex flex-column align-items-stretch">
                <Label check>{LaunchDate}</Label>
                {/* <Input
              required
                name="launchDate"
                type="date"
                className="form-control"
                placeholder={LaunchDate}
  value={launchDate}
  onChange={(e)=>setLaunchDate(e.target.value)}
              /> */}
                <DatePicker
                  className="datepicker-here form-control"
                  selected={launchDate}
                  dateFormat="yyyy-MM-dd"
                  onChange={(date: any) => {
                    setLaunchDate(date);
                    // formatDate(date)
                  }}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col>
              <FormGroup>
                <Label check>{Description}</Label>
                {/* <Input
                  required
                  name="description"
                  type="textarea"
                  className="form-control"
                  rows={3}
                  placeholder={"Detailed Overview"}
                  onChange={(e: any) => setDescription(e.target.value)}
                  value={description}
                /> */}
                <Editor
                  placeholder={description}
                  onEditorDataChange={handleEditorDataChange}
                />
              </FormGroup>
            </Col>
          </Row>

          <h1 className="faq-title">Dimension</h1>

          <Row>
            <Col lg="3" md="6">
              <FormGroup>
                <Label check>{OverallLengthMM}</Label>
                <Input
                  required
                  name="overallLengthMM"
                  type="number"
                  className="form-control"
                  placeholder={OverallLengthMM}
                  onChange={(e: any) => setOverallLength(e.target.value)}
                  value={overallLength}
                />
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label check>{KerbWeightKG}</Label>
                <Input
                  required
                  name="kerbWeightKG"
                  type="number"
                  className="form-control"
                  placeholder={KerbWeightKG}
                  onChange={(e: any) => setKerbWeight(e.target.value)}
                  value={kerbWeight}
                />
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label check>{OverallWidthMM}</Label>
                <Input
                  required
                  name="overallWidthMM"
                  type="number"
                  className="form-control"
                  placeholder={OverallWidthMM}
                  onChange={(e: any) => setOverallWidth(e.target.value)}
                  value={overallWidth}
                />
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label check>{BootSpaceL}</Label>
                <Input
                  required
                  name="bootSpaceL"
                  type="number"
                  className="form-control"
                  placeholder={BootSpaceL}
                  onChange={(e: any) => setBootSpaceL(e.target.value)}
                  value={bootSpaceL}
                />
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label check>{WheelBaseMM}</Label>
                <Input
                  required
                  name="wheelBaseMM"
                  type="number"
                  className="form-control"
                  placeholder={WheelBaseMM}
                  onChange={(e: any) => setWheelBase(e.target.value)}
                  value={wheelBase}
                />
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label check>{NoOfDoors}</Label>
                <Input
                  required
                  name="noOfDoors"
                  type="number"
                  className="form-control"
                  placeholder={NoOfDoors}
                  onChange={(e: any) => setNoOfDoors(e.target.value)}
                  value={noOfDoors}
                />
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label check>{GroundClearenceMM}</Label>
                <Input
                  required
                  name="groundClearenceMM"
                  type="number"
                  className="form-control"
                  placeholder={GroundClearenceMM}
                  onChange={(e: any) => setGroundClearance(e.target.value)}
                  value={groundClearance}
                />
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{SeatingCapacity}</Label>
                <Input
                  required
                  name="seatingCapacity"
                  type="select"
                  placeholder={SeatingCapacity}
                  className="form-control form-select"
                  onChange={(e: any) => setSeatingCapacity(e.target.value)}
                  value={seatingCapacity}
                >
                  <option value="" disabled>
                    Select Seats
                  </option>
                  {seats?.map((seat: any) => (
                    <option key={seat?.title} value={seat?.value}>
                      {seat.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <h1 className="faq-title">Engine/ Motor</h1>

          <Row>
            <Col lg="3" md="6">
              <FormGroup>
                <Label>{EngineType}</Label>
                <Input
                  required
                  name="engineType"
                  type="select"
                  placeholder={EngineType}
                  className="form-control form-select"
                  onChange={(e: any) => setEngineType(e.target.value)}
                  value={engineType}
                >
                  <option value="" disabled>
                    Select Engine Type
                  </option>
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                  <option value="CNG">CNG</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="Electric">Electric</option>
                </Input>
              </FormGroup>
            </Col>
            {engineType === "Electric" && (
              <>
                <Col lg="3" md="6">
                  <FormGroup>
                    <Label>Battery type</Label>
                    <Input
                      required
                      name="battery_type"
                      type="text"
                      className="form-control"
                      placeholder={"Battery type"}
                      onChange={(e: any) => setBatteryType(e.target.value)}
                      value={batteryType}
                    />
                  </FormGroup>
                </Col>
                <Col lg="3" md="6">
                  <FormGroup>
                    <Label>Battery Capacity</Label>
                    <Input
                      required
                      name="battery_capacity"
                      type="number"
                      className="form-control"
                      placeholder={"Battery Capacity (kWh)"}
                      onChange={(e: any) => setBatteryCapacity(e.target.value)}
                      value={batteryCapacity}
                    />
                  </FormGroup>
                </Col>
                <Col lg="3" md="6">
                  <FormGroup>
                    <Label>Charging time</Label>
                    <Input
                      required
                      name="charging_time"
                      type="number"
                      className="form-control"
                      placeholder={"Charging time (Hours)"}
                      onChange={(e: any) => setChargingtime(e.target.value)}
                      value={chargingtime}
                    />
                  </FormGroup>
                </Col>
                <Col lg="3" md="6">
                  <FormGroup>
                    <Label>Range</Label>
                    <Input
                      required
                      name="range"
                      type="number"
                      className="form-control"
                      placeholder={"Range (km)"}
                      onChange={(e: any) => setRange(e.target.value)}
                      value={range}
                    />
                  </FormGroup>
                </Col>
              </>
            )}
            {engineType !== "Electric" && (
              <>
                <Col lg="3" md="6">
                  <FormGroup>
                    <Label>{TurboCharger}</Label>
                    <Input
                      required
                      name="ElectricMotorPower"
                      type="select"
                      placeholder={TurboCharger}
                      className="form-control form-select"
                      onChange={(e: any) => setTurboCharger(e.target.value)}
                      value={turboCharger}
                    >
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </Input>
                  </FormGroup>
                </Col>
                <Col lg="3" md="6">
                  <FormGroup>
                    <Label check>{Displacement}</Label>
                    <Input
                      required
                      name="Displacement"
                      type="number"
                      className="form-control"
                      placeholder={"Engine Size (CC)"}
                      onChange={(e: any) => setDisplacement(e.target.value)}
                      value={displacement}
                    />
                  </FormGroup>
                </Col>

                <Col lg="3" md="6">
                  <FormGroup>
                    <Label check>{NoOfCylinders}</Label>
                    <Input
                      required
                      name="noOfCylinders"
                      type="number"
                      className="form-control"
                      placeholder={NoOfCylinders}
                      onChange={(e: any) => setNoOfCylinders(e.target.value)}
                      value={noOfCylinders}
                    />
                  </FormGroup>
                </Col>
                <Col lg="3" md="6">
                  <FormGroup>
                    <Label check>{ValvesPerCylinder}</Label>
                    <Input
                      required
                      name="valvesPerCylinder"
                      type="number"
                      className="form-control"
                      placeholder={ValvesPerCylinder}
                      onChange={(e: any) =>
                        setValvesPerCylinder(e.target.value)
                      }
                      value={valvesPerCylinder}
                    />
                  </FormGroup>
                </Col>

                <Col lg="3" md="6">
                  <FormGroup>
                    <Label check>{FuelSystem}</Label>
                    <Input
                      required
                      name="fuelSystem"
                      type="text"
                      className="form-control"
                      placeholder={FuelSystem}
                      onChange={(e: any) => setFuelSystem(e.target.value)}
                      value={fuelSystem}
                    />
                  </FormGroup>
                </Col>
              </>
            )}

            <Col lg="3" md="6">
              <FormGroup>
                <Label check>{HorsePower}</Label>
                <div className="d-flex gap-1">
                  <Input
                    required
                    name="hpHorsePower"
                    type="number"
                    className="form-control"
                    placeholder={"HP@"}
                    onChange={(e: any) => setHorsePower(e.target.value)}
                    value={horsePower}
                  />
                  {engineType !== "Electric" && (
                    <Input
                      required
                      name="rpmHorsePower"
                      type="number"
                      className="form-control"
                      placeholder={"RPM"}
                      onChange={(e: any) => setRPM(e.target.value)}
                      value={rpm}
                    />
                  )}
                </div>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label check>{MaxSpeedKMH}</Label>
                <Input
                  required
                  name="maxSpeedKMH"
                  type="number"
                  className="form-control"
                  placeholder={"KM/H"}
                  onChange={(e: any) => setMaxSpeed(e.target.value)}
                  value={maxSpeed}
                />
              </FormGroup>
            </Col>
          </Row>

          <h1 className="faq-title">Transmission</h1>

          <Row>
            <Col lg="3" md="6">
              <FormGroup>
                <Label>{TransmissionType}</Label>
                <Input
                  required
                  name="transmissionType"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setTransmission(e.target.value)}
                  value={transmission}
                >
                  <option value="" disabled>
                    Select Transmission
                  </option>
                  <option value="Automatic">Automatic</option>
                  <option value="Manual">Manual</option>
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label check>{Gearboxspeed}</Label>
                <Input
                  required
                  name="gearboxspeed"
                  type="number"
                  className="form-control"
                  placeholder={Gearboxspeed}
                  onChange={(e: any) => setGearBox(e.target.value)}
                  value={gearBox}
                />
              </FormGroup>
            </Col>
          </Row>

          <h1 className="faq-title">Steering</h1>

          <Row>
            <Col lg="3" md="6">
              <FormGroup>
                <Label check>{SteeringType}</Label>
                <Input
                  required
                  name="steeringType"
                  type="text"
                  className="form-control"
                  placeholder={SteeringType}
                  onChange={(e: any) => setSteeringType(e.target.value)}
                  value={steeringType}
                />
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label check>{PowerAssisted}</Label>
                <Input
                  required
                  name="powerAssisted"
                  type="text"
                  className="form-control"
                  placeholder={PowerAssisted}
                  onChange={(e: any) => setPowerAssisted(e.target.value)}
                  value={powerAssisted}
                />
              </FormGroup>
            </Col>
          </Row>

          <h1 className="faq-title">Suspension & Brakes</h1>

          <Row>
            <Col lg="3" md="6">
              <FormGroup>
                <Label check>{FrontSuspension}</Label>
                <Input
                  required
                  name="frontSuspension"
                  type="text"
                  className="form-control"
                  placeholder={FrontSuspension}
                  onChange={(e: any) => setFrontSuspension(e.target.value)}
                  value={frontSuspension}
                />
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label check>{FrontBrakes}</Label>
                <Input
                  required
                  name="frontBrakes"
                  type="text"
                  className="form-control"
                  placeholder={FrontBrakes}
                  onChange={(e: any) => setFrontBrakes(e.target.value)}
                  value={frontBrakes}
                />
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label check>{RearSuspension}</Label>
                <Input
                  required
                  name="rearSuspension"
                  type="text"
                  className="form-control"
                  placeholder={RearSuspension}
                  onChange={(e: any) => setRearSuspension(e.target.value)}
                  value={rearSuspension}
                />
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label check>{RearBrakes}</Label>
                <Input
                  required
                  name="rearBrakes"
                  type="text"
                  className="form-control"
                  placeholder={RearBrakes}
                  onChange={(e: any) => setRearBrakes(e.target.value)}
                  value={rearBrakes}
                />
              </FormGroup>
            </Col>
          </Row>

          <h1 className="faq-title">Wheels and Tyres</h1>

          <Row>
            <Col lg="3" md="6">
              <FormGroup>
                <Label check>{WheelType}</Label>
                <Input
                  required
                  name="wheelType"
                  type="text"
                  className="form-control"
                  placeholder={WheelType}
                  onChange={(e: any) => setWheelType(e.target.value)}
                  value={wheelType}
                />
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label check>{WheelSizeInch}</Label>
                <Input
                  required
                  name="wheelSizeInch"
                  type="number"
                  className="form-control"
                  placeholder={WheelSizeInch}
                  onChange={(e: any) => setWheelSize(e.target.value)}
                  value={wheelSize}
                />
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{SpareTyre}</Label>
                <Input
                  required
                  name="spareTyre"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setSpareTyre(e.target.value)}
                  value={spareTyre}
                >
                  <option value="" disabled>
                    Select Spare Tyre
                  </option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label check>{SpareTyreSizeInch}</Label>
                <Input
                  required
                  name="spareTyreSizeInch"
                  type="number"
                  className="form-control"
                  placeholder={SpareTyreSizeInch}
                  onChange={(e: any) => setSpareTyreSize(e.target.value)}
                  value={spareTyreSize}
                />
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label check>{TyreSize}</Label>
                <div className="d-flex gap-1">
                  <Input
                    required
                    name="tyreSizewidth"
                    type="number"
                    className="form-control"
                    placeholder={"(Width)"}
                    onChange={(e: any) => setTyreSizeWidth(e.target.value)}
                    value={tyreSizeWidth}
                  />
                  <Input
                    required
                    name="tyreSizeratio"
                    type="number"
                    className="form-control"
                    placeholder={"(Ratio)"}
                    onChange={(e: any) => setTyreSizeRatio(e.target.value)}
                    value={tyreSizeRatio}
                  />
                  <Input
                    required
                    name="tyreSizediameter"
                    type="number"
                    className="form-control"
                    placeholder={"(Diameter)"}
                    onChange={(e: any) => setTyreSizeDiameter(e.target.value)}
                    value={tyreSizeDiameter}
                  />
                </div>
              </FormGroup>
            </Col>
          </Row>

          <h1 className="faq-title">Fuel Economy</h1>

          <Row>
            <Col lg="3" md="6">
              <FormGroup>
                <Label check>{FuelTankCapacityL}</Label>
                <Input
                  required
                  name="fuelTankCapacityL"
                  type="text"
                  className="form-control"
                  placeholder={FuelTankCapacityL}
                  onChange={(e: any) => setFuelTankCapacity(e.target.value)}
                  value={fuelTankCapacity}
                />
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label check>{MileageCityKML}</Label>
                <Input
                  required
                  name="mileageCityKML"
                  type="text"
                  className="form-control"
                  placeholder={MileageCityKML}
                  onChange={(e: any) => setMileageCity(e.target.value)}
                  value={mileageCity}
                />
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label check>{MileageHighwayKML}</Label>
                <Input
                  required
                  name="mileageHighwayKML"
                  type="text"
                  className="form-control"
                  placeholder={MileageHighwayKML}
                  onChange={(e: any) => setMileageHighway(e.target.value)}
                  value={mileageHighway}
                />
              </FormGroup>
            </Col>
          </Row>

          <h1 className="faq-title">Features</h1>

          <h4 className="faq-title">Safety</h4>

          <Row>
            <Col lg="3" md="6">
              <FormGroup>
                <Label>{NoOfAirbags}</Label>
                <Input
                  required
                  name="noOfAirbags"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setAirBags(e.target.value)}
                  value={airbags}
                >
                  {seats.map((seat, index) => (
                    <option key={index} value={seat.value}>
                      {seat.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{NoOfSeatbelts}</Label>
                <Input
                  required
                  name="noOfSeatbelts"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setSeatbelts(e.target.value)}
                  value={seatbelts}
                >
                  {seats.map((seat, index) => (
                    <option key={index} value={seat.value}>
                      {seat.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{SpeedSensingAutoDoorLock}</Label>
                <Input
                  required
                  name="speedSensingAutoDoorLock"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setSpeedSensingDoorLock(e.target.value)}
                  value={speedSensingDoorLock}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{AntiTheftAlarmSystem}</Label>
                <Input
                  required
                  name="antiTheftAlarmSystem"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setAntiTheftAlarmSystem(e.target.value)}
                  value={antiTheftAlarmSystem}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{DriverSeatBeltWarning}</Label>
                <Input
                  required
                  name="driverSeatBeltWarning"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) =>
                    setDriverSeatBeltWarning(e.target.value)
                  }
                  value={driverSeatBeltWarning}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{DownHillAssistControl}</Label>
                <Input
                  required
                  name="downHillAssistControl"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) =>
                    setDownHillAssistControl(e.target.value)
                  }
                  value={downHillAssistControl}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{PassengerSeatBeltWarning}</Label>
                <Input
                  required
                  name="passengerSeatBeltWarning"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) =>
                    setPassengerSeatBeltWarning(e.target.value)
                  }
                  value={passengerSeatBeltWarning}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{HillStartAssistControl}</Label>
                <Input
                  required
                  name="hillStartAssistControl"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) =>
                    setHillStartAssistControl(e.target.value)
                  }
                  value={hillStartAssistControl}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{Immobilizer}</Label>
                <Input
                  required
                  name="immobilizer"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setImmobilizer(e.target.value)}
                  value={immobilizer}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{TractionControl}</Label>
                <Input
                  required
                  name="tractionControl"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setTractionControl(e.target.value)}
                  value={tractionControl}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{VehicleStabilityControl}</Label>
                <Input
                  required
                  name="vehicleStabilityControl"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) =>
                    setVehicleStabilityControl(e.target.value)
                  }
                  value={vehicleStabilityControl}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{BlindSpotDetectionBSD}</Label>
                <Input
                  required
                  name="blindSpotDetectionBSD"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setBlindSpotDetection(e.target.value)}
                  value={blindSpotDetection}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{AntiLockBrakingSystemABS}</Label>
                <Input
                  required
                  name="antiLockBrakingSystemABS"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) =>
                    setAntiLockBrakingSystem(e.target.value)
                  }
                  value={antiLockBrakingSystem}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{DoorOpeningWarning}</Label>
                <Input
                  required
                  name="doorOpeningWarning"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setDoorOpeningWarning(e.target.value)}
                  value={doorOpeningWarning}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{LaneKeepAssistSystemLKAS}</Label>
                <Input
                  required
                  name="laneKeepAssistSystemLKAS"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setLaneKeepAssistSystem(e.target.value)}
                  value={laneKeepAssistSystem}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{ElectronicBrakeForceDistributionEBD}</Label>
                <Input
                  required
                  name="electronicBrakeForceDistributionEBD"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setElectricBrakeForce(e.target.value)}
                  value={electricBrakeForce}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{AutonomousEmergencyBrakingAEB}</Label>
                <Input
                  required
                  name="autonomousEmergencyBrakingAEB"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) =>
                    setAutonomousEmergencyBraking(e.target.value)
                  }
                  value={autonomousEmergencyBraking}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <h4 className="faq-title">Exterior</h4>

          <Row>
            <Col lg="3" md="6">
              <FormGroup>
                <Label>{AlloyWheels}</Label>
                <Input
                  required
                  name="alloyWheels"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setAlloyWheels(e.target.value)}
                  value={alloyWheels}
                >
                  {featureSelection.map((seat, index) => (
                    <option key={index} value={seat.value}>
                      {seat.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{AdjustableHeadlights}</Label>
                <Input
                  required
                  name="adjustableHeadlights"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setAdjustableHeadlights(e.target.value)}
                  value={adjustableHeadlights}
                >
                  {featureSelection.map((seat, index) => (
                    <option key={index} value={seat.value}>
                      {seat.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{RearSpoiler}</Label>
                <Input
                  required
                  name="rearSpoiler"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setRearSpoiler(e.target.value)}
                  value={rearSpoiler}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{SideMirrorswithIndicators}</Label>
                <Input
                  required
                  name="sideMirrorswithIndicators"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setSideMirrorIndicators(e.target.value)}
                  value={sideMirrorIndicators}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{SunRoof}</Label>
                <Input
                  required
                  name="sunRoof"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setSunRoof(e.target.value)}
                  value={sunRoof}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{Panaromic}</Label>
                <Input
                  required
                  name="panaromic"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setPanaromic(e.target.value)}
                  value={panaromic}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{FogLights}</Label>
                <Input
                  required
                  name="fogLights"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setFogLights(e.target.value)}
                  value={fogLights}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{drls}</Label>
                <Input
                  required
                  name="drls"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setDRLs(e.target.value)}
                  value={DRLs}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{RoofRails}</Label>
                <Input
                  required
                  name="roofRails"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setRoofRails(e.target.value)}
                  value={roofRails}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{SideSteps}</Label>
                <Input
                  required
                  name="sideSteps"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setSideSteps(e.target.value)}
                  value={sideSteps}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{DualExhaust}</Label>
                <Input
                  required
                  name="dualExhaust"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setDualExhaust(e.target.value)}
                  value={dualExhaust}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <h4 className="faq-title">Instrumentation</h4>

          <Row>
            <Col lg="3" md="6">
              <FormGroup>
                <Label>{Tachometer}</Label>
                <Input
                  required
                  name="tachometer"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setTachometer(e.target.value)}
                  value={tachometer}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{MultiInfo}</Label>
                <Input
                  required
                  name="multiInfo"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setMultiInfo(e.target.value)}
                  value={multiInfo}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{InformationCluster}</Label>

                <Input
                  required
                  name="informationCluster"
                  type="text"
                  className="form-control"
                  placeholder={"Information Cluster"}
                  onChange={(e: any) => setInfoCluster(e.target.value)}
                  value={infoCluster}
                />
              </FormGroup>
            </Col>
          </Row>

          <h4 className="faq-title">Infotainment</h4>

          <Row>
            <Col lg="3" md="6">
              <FormGroup>
                <Label check>{DisplaySizeinch}</Label>
                <Input
                  required
                  name="displaySizeinch"
                  type="number"
                  className="form-control"
                  placeholder="Display Size (inch)"
                  onChange={(e: any) => setDisplaySize(e.target.value)}
                  value={displaySize}
                />
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{USBandAuxillaryCable}</Label>
                <Input
                  required
                  name="usbAndAuxillaryCable"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setUSBAuxilaryCable(e.target.value)}
                  value={usbAuxilaryCable}
                >
                  {featureSelection.map((seat, index) => (
                    <option key={index} value={seat.value}>
                      {seat.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{CDPlayer}</Label>
                <Input
                  required
                  name="cdPlayer"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setCDPlayer(e.target.value)}
                  value={cdPlayer}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{DVDPlayer}</Label>
                <Input
                  required
                  name="dvdPlayer"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setDVDPlayer(e.target.value)}
                  value={dvdPlayer}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label check>{NoOfSpeakers}</Label>

                <Input
                  required
                  name="noOfSpeakers"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setNoOfSpeakers(e.target.value)}
                  value={noOfSpeakers}
                >
                  {seats.map((seat, index) => (
                    <option key={index} value={seat.value}>
                      {seat.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{FrontSpeakers}</Label>
                <Input
                  required
                  name="frontSpeakers"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setFrontSpeakers(e.target.value)}
                  value={frontSpeakers}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{RearSpeakers}</Label>
                <Input
                  required
                  name="rearSpeakers"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setRearSpeakers(e.target.value)}
                  value={rearSpeakers}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{RearSeatEntertainment}</Label>
                <Input
                  required
                  name="rearSeatEntertainment"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) =>
                    setRearSeatEntertainment(e.target.value)
                  }
                  value={rearSeatEntertainment}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{VoiceControl}</Label>
                <Input
                  required
                  name="voiceControl"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setVoiceControl(e.target.value)}
                  value={voiceControl}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{AndroidAuto}</Label>
                <Input
                  required
                  name="androidAuto"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setAndroidAuto(e.target.value)}
                  value={androidAuto}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{AppleCarPlay}</Label>
                <Input
                  required
                  name="appleCarPlay"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setAppleCarPlay(e.target.value)}
                  value={appleCarPlay}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <h4 className="faq-title">Comfort and Convenience</h4>

          <Row>
            <Col lg="3" md="6">
              <FormGroup>
                <Label check>{SeatMaterialType}</Label>
                <Input
                  required
                  name="seatMaterialType"
                  type="text"
                  className="form-control"
                  placeholder={SeatMaterialType}
                  onChange={(e: any) => setSeatMaterialType(e.target.value)}
                  value={seatMaterialType}
                />
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label check>{KeyType}</Label>
                <Input
                  required
                  name="keyType"
                  type="text"
                  className="form-control"
                  placeholder={KeyType}
                  onChange={(e: any) => setKeyType(e.target.value)}
                  value={keyType}
                />
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{AirConditioner}</Label>
                <Input
                  required
                  name="airConditioner"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setAirConditioning(e.target.value)}
                  value={airconditioning}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{RainSensingWipers}</Label>
                <Input
                  required
                  name="rainSensingWipers"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setRainSensingWiper(e.target.value)}
                  value={rainSensingWiper}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{ClimateControl}</Label>
                <Input
                  required
                  name="climateControl"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setClimateControl(e.target.value)}
                  value={climateControl}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{CruiseControl}</Label>
                <Input
                  required
                  name="cruiseControl"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setCruiseControl(e.target.value)}
                  value={cruiseControl}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{RearACVents}</Label>
                <Input
                  required
                  name="rearACVents"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setRearACVents(e.target.value)}
                  value={rearACVents}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{DrivingModes}</Label>
                <Input
                  required
                  name="drivingModes"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setDrivingModes(e.target.value)}
                  value={drivingModes}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{PaddleShifter}</Label>
                <Input
                  required
                  name="paddleShifter"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setPaddleShifter(e.target.value)}
                  value={paddleShifter}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{Heater}</Label>
                <Input
                  required
                  name="heater"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setHeater(e.target.value)}
                  value={heater}
                >
                  {featureSelection.map((seat, index) => (
                    <option key={index} value={seat.value}>
                      {seat.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{HeatedSeats}</Label>
                <Input
                  required
                  name="heatedSeats"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setHeatedSeats(e.target.value)}
                  value={heatedSeats}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{KeylessEntry}</Label>
                <Input
                  required
                  name="keylessEntry"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setKeylessEntry(e.target.value)}
                  value={keylessEntry}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{PushStart}</Label>
                <Input
                  required
                  name="pushStart"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setPushStart(e.target.value)}
                  value={pushStart}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{CoolBox}</Label>
                <Input
                  required
                  name="coolBox"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setCoolBox(e.target.value)}
                  value={coolBox}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{RemoteEngineStart}</Label>
                <Input
                  required
                  name="remoteEngineStart"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setRemoteEngineStart(e.target.value)}
                  value={remoteEngineStart}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{Navigation}</Label>
                <Input
                  required
                  name="navigation"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setNavigation(e.target.value)}
                  value={navigation}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{CentralLocking}</Label>
                <Input
                  required
                  name="centralLocking"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setCentralLocking(e.target.value)}
                  value={centralLocking}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{PowerDoorLocks}</Label>
                <Input
                  required
                  name="powerDoorLocks"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setPowerDoorLocks(e.target.value)}
                  value={powerDoorLocks}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{FrontCamera}</Label>
                <Input
                  required
                  name="frontCamera"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setFrontCamera(e.target.value)}
                  value={frontCamera}
                >
                  {featureSelection.map((seat, index) => (
                    <option key={index} value={seat.value}>
                      {seat.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{RearCamera}</Label>
                <Input
                  required
                  name="rearCamera"
                  type="select"
                  className="form-control form-select"
                  onChange={(e: any) => setRearCamera(e.target.value)}
                  value={rearCamera}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>360 Camera</Label>
                <Input
                  required
                  name="camera360"
                  type="select"
                  className="form-control form-select"
                  value={Camera360}
                  onChange={(e) => setCamera360(e.target.value)}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{PowerWindows}</Label>
                <Input
                  required
                  name="powerWindows"
                  type="select"
                  className="form-control form-select"
                  value={powerWindows}
                  onChange={(e) => setPowerWindows(e.target.value)}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{PowerMirrors}</Label>
                <Input
                  required
                  name="powerMirrors"
                  type="select"
                  className="form-control form-select"
                  value={powerMirrors}
                  onChange={(e) => setPowerMirrors(e.target.value)}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{AutoRetractableSideMirrors}</Label>
                <Input
                  required
                  name="autoRetractableSideMirrors"
                  type="select"
                  className="form-control form-select"
                  value={autoRetractableSideMirror}
                  onChange={(e) => setAutoRetractableSideMirror(e.target.value)}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{FrontParkingSensors}</Label>
                <Input
                  required
                  name="frontParkingSensors"
                  type="select"
                  className="form-control form-select"
                  value={frontParkingSensors}
                  onChange={(e) => setFrontParkingSensors(e.target.value)}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{RearParkingSensors}</Label>
                <Input
                  required
                  name="rearParkingSensors"
                  type="select"
                  className="form-control form-select"
                  value={rearParkingSensors}
                  onChange={(e) => setRearParkingSensors(e.target.value)}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{ArmRest}</Label>
                <Input
                  required
                  name="armRest"
                  type="select"
                  className="form-control form-select"
                  value={armRest}
                  onChange={(e) => setArmRest(e.target.value)}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{RearFoldingSeat}</Label>
                <Input
                  required
                  name="rearFoldingSeat"
                  type="select"
                  className="form-control form-select"
                  value={rearFoldingSeat}
                  onChange={(e) => setRearFoldingSeat(e.target.value)}
                >
                  {featureSelection.map((seat, index) => (
                    <option key={index} value={seat.value}>
                      {seat.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label check>{Handbrake}</Label>
                <Input
                  required
                  name="handbrake"
                  type="text"
                  className="form-control"
                  placeholder={Handbrake}
                  value={handBrake}
                  onChange={(e) => setHandBrake(e.target.value)}
                />
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{RearHeadrest}</Label>

                <Input
                  required
                  name="rearHeadrest"
                  type="number"
                  className="form-control"
                  placeholder={"Rear Headrest"}
                  onChange={(e: any) => setRearHeadRest(e.target.value)}
                  value={rearHeadRest}
                />
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{AutoBrakeHold}</Label>
                <Input
                  required
                  name="autoBrakeHold"
                  type="select"
                  className="form-control form-select"
                  value={autoBrakeHold}
                  onChange={(e) => setAutoBrakeHold(e.target.value)}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{RearWiper}</Label>
                <Input
                  required
                  name="rearWiper"
                  type="select"
                  className="form-control form-select"
                  value={rearWiper}
                  onChange={(e) => setRearWiper(e.target.value)}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{AutoParkingSystem}</Label>
                <Input
                  required
                  name="autoParkingSystem"
                  type="select"
                  className="form-control form-select"
                  value={autoParkingSystem}
                  onChange={(e) => setAutoParkingSystem(e.target.value)}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{DriverSeatElectricAdjustment}</Label>
                <Input
                  required
                  name="driverSeatElectricAdjustment"
                  type="select"
                  className="form-control form-select"
                  value={driverSeatElectricAdjustment}
                  onChange={(e) =>
                    setDriverSeatElectricAdjustment(e.target.value)
                  }
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{DriverSeatLumbarSupport}</Label>
                <Input
                  required
                  name="driverSeatLumbarSupport"
                  type="select"
                  className="form-control form-select"
                  value={driverSeatLumbarSupport}
                  onChange={(e) => setDriverSeatLumbarSupport(e.target.value)}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{DriverSeatMemoryFunction}</Label>
                <Input
                  required
                  name="driverSeatMemoryFunction"
                  type="select"
                  className="form-control form-select"
                  value={driverSeatMemoryFunction}
                  onChange={(e) => setDriverSeatMemoryFunction(e.target.value)}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{FrontPowerOutlet}</Label>
                <Input
                  required
                  name="frontPowerOutlet"
                  type="select"
                  className="form-control form-select"
                  value={frontPowerOutlet}
                  onChange={(e) => setFrontPowerOutlet(e.target.value)}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{RearPowerOutlet}</Label>
                <Input
                  required
                  name="rearPowerOutlet"
                  type="select"
                  className="form-control form-select"
                  value={reartPowerOutlet}
                  onChange={(e) => setRearPowerOutlet(e.target.value)}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{SteeringAdjustment}</Label>
                <Input
                  required
                  name="steeringAdjustment"
                  type="select"
                  className="form-control form-select"
                  value={steeringAdjustment}
                  onChange={(e) => setSteeringAdjustment(e.target.value)}
                >
                  {featureSelection.map((seat, index) => (
                    <option key={index} value={seat.value}>
                      {seat.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{SteeringSwitches}</Label>
                <Input
                  required
                  name="steeringSwitches"
                  type="select"
                  className="form-control form-select"
                  value={steeringSwitches}
                  onChange={(e) => setSteeringSwitches(e.target.value)}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{WirelessCharger}</Label>
                <Input
                  required
                  name="wirelessCharger"
                  type="select"
                  className="form-control form-select"
                  value={wirelessCharger}
                  onChange={(e) => setWirelessCharger(e.target.value)}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{HeadlightOnReminder}</Label>
                <Input
                  required
                  name="headlightOnReminder"
                  type="select"
                  className="form-control form-select"
                  value={headlightReminder}
                  onChange={(e) => setHeadlightReminder(e.target.value)}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{BossSeatSwitch}</Label>
                <Input
                  required
                  name="bossSeatSwitch"
                  type="select"
                  className="form-control form-select"
                  value={bossSeatSwitch}
                  onChange={(e) => setBossSeatSwitch(e.target.value)}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{AutomaticHeadLamps}</Label>
                <Input
                  required
                  name="automaticHeadLamps"
                  type="select"
                  className="form-control form-select"
                  value={automaticHeadLamps}
                  onChange={(e) => setAutomaticHeadLamps(e.target.value)}
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{TyrePressureMonitoringSystemTPMS}</Label>
                <Input
                  required
                  name="tyrePressureMonitoringSystemTPMS"
                  type="select"
                  className="form-control form-select"
                  value={tyrePressureMonitoringSystem}
                  onChange={(e) =>
                    setTyrePressureMonitoringSystem(e.target.value)
                  }
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>

            <Col lg="3" md="6">
              <FormGroup>
                <Label>{PassengerSeatElectricAdjustment}</Label>
                <Input
                  required
                  name="passengerSeatElectricAdjustment"
                  type="select"
                  className="form-control form-select"
                  value={passengerSeatElectricAdjustment}
                  onChange={(e) =>
                    setPassengerSeatElectricAdjustment(e.target.value)
                  }
                >
                  {featureSelection.map((feature, index) => (
                    <option key={index} value={feature.value}>
                      {feature.title}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <ButtonSection />
        </form>
      )}
    </>
  );
};

export default CreateNewCarForm;
