import axios from 'axios';

const EMPLOYEE_BASE_URL = "http://localhost:8080/api/v1/employees";

export function getAllEmployees() {
    return axios.get(EMPLOYEE_BASE_URL);
}

export function getById(id) {
    return axios.get(`${EMPLOYEE_BASE_URL}/${id}`);
}

export function createEmployee(employee) {
    return axios.post(EMPLOYEE_BASE_URL, employee);
}

export function updateEmployee(id, employee) {
    return axios.put(`${EMPLOYEE_BASE_URL}/${id}`, employee);
}

export function deleteEmployee(id) {
    return axios.delete(`${EMPLOYEE_BASE_URL}/${id}`);
}


