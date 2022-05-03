import React from "react";
import Container from "./Container";

function App() {
  const text =  <div>This is an example!</div>
  const image = <img
  alt="turtle"
  src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
/>
  return (
    <div className="App">
      <Container header="Example header" direction="horizontal">
        {text}
        {text}
        {text}
        {text}
        {text}
        {text}
        {text}
      </Container>
      <Container header="Example header" textPosition="center">
        {image}        
        {image}
        {image}
        {image}
      </Container>
    </div>
  );
}

export default App;
