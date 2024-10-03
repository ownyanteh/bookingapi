
import { Booking } from "../models/booking-models.js";

export const getAllBookings = (req, res, next) => {
res.status(200).json('These are all bookings')
};

export const getOneBooking = (req, res, next) => {
    res.status(200).json('This is one booking')
    };

export const postBooking =  async (req, res, next) => {
    

    // console.log ('request', req)

  try {
     await Booking.create(req.body);
  
      res.status(201).json("Booking succesful")
  } catch (error) {
    next(error)
    
  }
    };

export const updateBooking = (req, res, next) => {
        res.status(200).json('Booking updated successfully')
        };

export const deleteBooking = (req, res, next) => {
            res.status(200).json('Booking deleted successfully')
            };

