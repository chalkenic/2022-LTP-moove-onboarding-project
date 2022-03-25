import React, { useState, useRef } from "react";
import Popup from "reactjs-popup";
import SignaturePad from "react-signature-canvas";
import { Button } from "@mui/material";
import "../../../../css/signaturePadStyle.css";
import axios from "axios";

function SigningComponent() {
  const [imageURL, setImageURL] = useState(null);
  const sigCanvas = useRef({});
  const clear = () => sigCanvas.current.clear();


  // I literally use this value in the return of this component inside a h1 tag and it works
  // For example, if the currently accessed URL is /landlord-sign-tenancy/3, this value will be 3
  var propertyId = window.property.id;

  //Furthermore, this is an overkill way of making sure this object is becoming a String and
  //concatenating properly. I have tried normal ways of doing this dw
  var redirectUrl = ['/landlord-sign-tenancy/', JSON.stringify(propertyId)].join('');

  //This outputs "/landlord-sign-tenancy/2" to the console, which is correct
  // Therefore, redirectUrl = "/landlord-sign-tenancy/2"
  console.log(redirectUrl);
  console.log("1: "+typeof redirectUrl);

  const save = () =>
    setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
  const uploadToDb = () => {
    axios
    .post("/landlord-sign-tenancy", {
        landlordSignature: imageURL,
        propertyId: propertyId,
    })
    .then(() => {
      console.log("2: "+ redirectUrl);

        // Here the URL is passed into Axios get request, which is confirmed to be correct path
        // it ends up redirecting the browser to:
        // http://localhost/landlord-sign-tenancy/[object%20Object]
        // as if any part of this was still an object instance

        axios
        .get(redirectUrl, {
            id: propertyId,
        }).then(response =>{
          console.log("3: "+ response.data);
          
          window.location.href = response.data;

          // Even this console.log(response) includes
          // responseURL: "http://localhost/landlord-sign-tenancy/2"
          // inside the Chrome output
        })
        .catch(error => {
          console.log(error.message);
        });
    })
    .catch((error) => {
        console.log(error.message);
    });

  }

  return (
    <div className="App">
      <h1>Confirm Signature for Tenancy</h1>
      <h1>Property Name: {window.property.name}</h1><br></br>
      <Popup
        modal
        trigger={<Button variant="contained" color="primary">Open Signature Pad</Button>}
        closeOnDocumentClick={false}
      >
        {close => (
          <>
            <SignaturePad
              ref={sigCanvas}
              canvasProps={{
                className: "signatureCanvas",
              }}
              backgroundColor="#fff"
            />
            {/* Button to trigger save canvas image */}
            <div className="buttonLayout">
            <Button variant="outlined" onClick={clear}>Clear</Button>
            <Button variant="outlined" onClick={close}>Close</Button>
            <Button variant="contained" onClick={save}>Save</Button>

            </div>
          </>
        )}
      </Popup>
      <br />
      <br />
      {/* if our we have a non-null image url we should 
      show an image and pass our imageURL state to it*/}
      {imageURL ? (
          <div style={{width: 300}}>
          <h1>Your signature:</h1><br></br>
        <img
          src={imageURL}
          alt="completed signature"
          style={{
            position:"relative",
            margin: "0 auto",
            border: "3px dotted grey",
            width: "250px"
          }}
        /><br></br>
        <Button onClick={uploadToDb} variant="contained" color="primary">
        Next
      </Button>
        </div>
      ) : null}
    </div>
  );
}

export default SigningComponent;