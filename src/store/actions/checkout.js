import axios from "axios";
import { CHECKOUT_BOOKING } from "../types";

export const checkoutBooking = (payload) => (dispatch) => {
  dispatch({
    type: CHECKOUT_BOOKING,
    payload: payload,
  })
}

export const submitBooking = (payload) => () => {
  return axios.post(`${process.env.REACT_APP_HOST}/api/v1/member/booking-page`, payload,
    { headers: { "Content-Type": "multipart/form-data" } }
  )
}