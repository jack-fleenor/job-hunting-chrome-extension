const IconButton = (props: any) => {
  const { buttonFunction, icon, alt } = props;

  const iconButtonStyle = {
    backgroundColor: 'white', 
    width: "25px", 
    height: "25px", 
    padding: 5, 
    marginBottom: 5, 
    marginLeft: 5, 
    marginRight: 5
  };

  const iconStyle = {
    height: "15px",
    width: "15px"
  }

  return (
    <button onClick={() => buttonFunction()} style={iconButtonStyle}>
      <img src={icon} alt={alt} style={iconStyle} />
    </button> 
  )
};

export default IconButton;