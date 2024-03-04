function ConfirmedBooking(props) {
  const { date, guests, time } = props.formData;
  return (
    <div className="confirm">
      <h1>
        Booking has been <span>confirmed !</span>
      </h1>
      <p>
        Congratulation! We confirm your table for <span>{guests} </span>
        persons on <span>{date}</span> at <span>{time}</span> !
      </p>
    </div>
  );
}

export default ConfirmedBooking;
