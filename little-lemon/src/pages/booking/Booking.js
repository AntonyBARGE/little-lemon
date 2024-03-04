import BookingForm from "../../components/booking/booking-form/BookingForm";
import BookingHeader from "../../components/booking/booking-header/BookingHeader";
import BookingMap from "../../components/booking/booking-map/BookingMap";
import ContactForm from "../../components/booking/contact-form/ContactForm";

function Booking(props) {
  return (
    <>
      <BookingHeader />
      <BookingForm
        availableTimes={props.availableTimes}
        dispatch={props.dispatch}
        submitForm={props.submitForm}
      />
      <BookingMap />
      <ContactForm />
    </>
  );
}

export default Booking;
