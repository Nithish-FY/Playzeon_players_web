const ColorItem = ({ colour, setColor }) => <div onClick={setColor} className="color-item" style={{ "--bg-color": colour }}></div>;

export default ColorItem;
