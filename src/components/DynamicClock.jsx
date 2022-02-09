function dynamicClock(props) {
  return (
    <div className="dynamicClock">
      <h1 className="time">{props.dynamicClock ? props.dynamicClock : 0}</h1>
    </div>
  )
}
export default dynamicClock;