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
  const redirectUrl = "/landlord-sign-tenancy/"+(window.property.id.toString());
  console.log(redirectUrl);
  const save = () =>
    setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
  const uploadToDb = () => {
    axios
    .post("/landlord-sign-tenancy", {
        landlordSignature: imageURL,
        propertyId: window.property.id,
    })
    .then((res) => {
        axios
        .get(redirectUrl, {
            id: window.property.id,
        }).then(response =>{
          window.location.href = response;
        })
        .catch(error => {
          console.log(error.message);
        });
        console.log(res);
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