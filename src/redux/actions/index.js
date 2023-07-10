import axios from 'axios'

import { ADDNEW_TODO, GETALL_TODO, TOGGLE_TODO, UPDATE_TODO, DELETE_TODO, TOGGLE_TAB } from './type'
// Backend server running port
const API_URL = "http://localhost:8000"

export const addNewTodo = (data) => async (dispatch) => {
  try {
    const response = await axios.post(`${API_URL}/todos`, { data })

    dispatch({ type: ADDNEW_TODO, payload: response.data })
  } catch (error) {
    console.log("Error while dispatching addNewTodo function ", error.message)
  }
}

export const getAllTodos = () => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/todos`)

    dispatch({ type: GETALL_TODO, payload: response.data })
  } catch (error) {
    console.log("Error while getting Todos ", error.message)
  }
}

export const toggleTodo = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/todos/${id}`)

    dispatch({ type: TOGGLE_TODO, payload: response.data })
  } catch (error) {
    console.log("Error while toggling Todos ", error.message)
  }
}

export const updateTodo = (id, data) => async (dispatch) => {
  try {
    const response = await axios.put(`${API_URL}/todos/${id}`, {data} )

    dispatch({ type: UPDATE_TODO, payload: response.data })
  } catch (error) {
    console.log("Error while updating Todos ", error.message)
  }
}

export const deleteTodo = (id) => async (dispatch) => {
  try {
      const res = await axios.delete(`${API_URL}/todos/${id}`);

      dispatch({ type: DELETE_TODO , payload: res.data });
  } catch (error) {
      console.log('Error while calling deleteTodo API ', error.message);
  }
}

export const toggleTab = (tab) => async (dispatch) => {
  dispatch({ type: TOGGLE_TAB, selected: tab })
}