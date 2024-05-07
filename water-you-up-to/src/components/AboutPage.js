import React from "react";
import Header from "./Header";

function AboutPage() {
    
    const ap = (
        <div style={{ marginTop: '80px' }} className="aboutPage">
          <h2>About US!</h2>
          <p>Water You Up To was built by Aaron Lin, Ken Richlin and Erin Yant!</p>
          <p>Get the latest version from github.com/krichlin/Water-you-up-to</p>
          <img src="bc.png" title="coinbase qr code" alt="coinbase qr code" />
          <p>Scan this QR code to donate bitcoins to our project!</p>
        </div>
      );
      
      return ap;

    // const ap = (        
    //     <div class="aboutPage">
    //         <h2>About US!</h2>
    //         <p>Water You Up To was built by Aaron Lin, Ken Richlin and Erin Yant!</p>
    //         <img title="coinbase qr code" alt="coinbase qr code"/>
    //         <p>Scan this QR code to donate bitcoins to our project!</p>
    //     </div>
    // )

    // return ap;
}

export default AboutPage;