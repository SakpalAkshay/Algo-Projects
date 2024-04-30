import React from 'react';
// import { useNavigate, BrowserRouter as Router } from 'react-router-dom';

const YourReactComponent = ({setLandingPage}) => {
  const backgroundStyle = {
    backgroundImage: `url(${require('./back.gif')})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',  // Adjust as needed
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center', // Align items at the top,
  };

  const headingStyle = {
    fontSize: '400%',
    fontWeight: 'bold',
    color: '#FCFFE0',
    fontFamily: 'cursive',
  }
  const paraStyle = {
    fontSize: '300%',
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'cursive',
  }
  const buttonStyle = {
    padding: '15px 20px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    backgroundColor: '#524C42',
    color: '#FCFFE0',
    border:'solid grey 1px',
    borderRadius: '8px',
    cursor: 'pointer',
    marginTop: "60px",
    width:"20%",
    fontFamily: 'cursive'
  };
  const githubLinkStyle = {
    position: 'absolute',
    bottom: '10px', // Adjust the bottom spacing as needed
    left: '10px', // Adjust the left spacing as needed
  };

  
  // const navigate = useNavigate();
  // const handleClick = () => {
  //   // Handle button click logic here
    
  //   console.log('Button clicked!');
  //   // navigate('/OptimalDeliveryRouteSystem'); 
  // };

  return (
    // <Router>
      // <ChakraProvider>
        <div style={backgroundStyle}>
          <h1><b style={headingStyle}>Route Master</b></h1>
          <h3><b style={paraStyle}>We Find You the Best Routes, so you don't have to</b></h3>
          {/* Your other GUI components go here */}
          <button style={buttonStyle} onClick={() => setLandingPage(false)}>
            LETS BEGIN
          </button>
          {/* GitHub link with logo */}
          <a
            href="https://github.com/SakpalAkshay/Algo-Projects/tree/main/RouteMaster"
            target="_blank"
            rel="noopener noreferrer"
            style={githubLinkStyle}
          >
            <img
              src={require('./github.png')}
              alt="GitHub Logo"
              height="30"
              width="30"
            />
          </a>
        </div>
      // {/* </ChakraProvider> */}
    // </Router>
  );
};

export default YourReactComponent;
