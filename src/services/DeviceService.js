// DeviceService.js
import axios from "axios";
import authHeader from "./auth-header";

const BASE_URL = "http://localhost:9090/api";

const addDevice = async (device, token) => {
  try {
    const response = await axios.post(`${BASE_URL}/admin/adddevices`, device, {
      headers: {
        'Content-Type': 'application/json',
        ...authHeader(),
        'Access-Control-Allow-Origin': '*'
      }
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};

const updateDevice = async (device, token) => {
  try {
    const response = await axios.put(`${BASE_URL}/admin/updatedevices`, device, {
      headers: { 
        ...authHeader() ,
        'Access-Control-Allow-Origin': '*'
      }
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};

const deleteDevice = async (deviceId, token) => {
  try {
    const response = await axios.post(`${BASE_URL}/admin/devices/deletedevices`, null, {
      params: { deviceId },
      headers: { ...authHeader() }
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};

const viewDevices = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/admin/getalldevices`, {
      headers: { ...authHeader() }
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};

const getDeviceById = async (deviceId, token) => {
  try {
    const response = await axios.get(`${BASE_URL}/admin/devices/searchById`, {
      params: { deviceId },
      headers: { ...authHeader() }
    });
    return response.data;
  } catch (err) {
    throw err;
  }
};

const DeviceService = {
  addDevice,
  updateDevice,
  deleteDevice,
  viewDevices,
  getDeviceById,
};

export default DeviceService;