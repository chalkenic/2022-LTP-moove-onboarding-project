import React, { useState, useRef } from "react";
import Popup from "reactjs-popup";
import SignaturePad from "react-signature-canvas";
import { Button } from "@mui/material";
import "./signaturePadStyle.css";

function SigningComponent() {

  const [imageURL, setImageURL] = useState(null);
  const sigCanvas = useRef({});
  const clear = () => sigCanvas.current.clear();
  const save = () =>
    setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));

  return (
    <div className="App">
      <h1>Signature Pad Example</h1>
      <Popup
        modal
        trigger={<button>Open Signature Pad</button>}
        closeOnDocumentClick={false}
      >
        {close => (
          <>
            <SignaturePad
              ref={sigCanvas}
              canvasProps={{
                className: "signatureCanvas",
              }}
            />
            {/* Button to trigger save canvas image */}
            <Button variant="contained" onClick={save}>Save</Button>
            <Button variant="outlined" onClick={clear}>Clear</Button>
            <Button variant="outlined" onClick={close}>Close</Button>
          </>
        )}
      </Popup>
      <br />
      <br />
      {/* if our we have a non-null image url we should 
      show an image and pass our imageURL state to it*/}
      {imageURL ? (
        <img
          src={imageURL}
          alt="completed signature"
          style={{
            display: "block",
            margin: "0 auto",
            border: "2px dotted grey",
            width: "150px"
          }}
        />
      ) : null}
    </div>
  );
}

export default SigningComponent;