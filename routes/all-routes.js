import { Router } from "express";
import { deleteBooking, getAllBookings, getOneBooking, postBooking, updateBooking } from "../controllers/booking-controllers.js";

export const bookingRouter = Router();

bookingRouter.get('/bookings', getAllBookings);

bookingRouter.get("/bookings/:id", getOneBooking); 

bookingRouter.post('/bookings', postBooking);

bookingRouter.patch('/bookings/:id', updateBooking);

bookingRouter.delete('/bookings/:id', deleteBooking);