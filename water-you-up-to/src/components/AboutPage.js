import React from "react";
import Header from "./Header";

function AboutPage() {
<<<<<<< HEAD
    
    const ap = (
        <div style={{ marginTop: '80px' }} className="aboutPage">
          <h2>About US!</h2>
          <p>Water You Up To was built by Aaron Lin, Ken Richlin and Erin Yant!</p>
          <img title="coinbase qr code" alt="coinbase qr code" />
          <p>Scan this QR code to donate bitcoins to our project!</p>
=======

    const ap = (        
        <div class="aboutPage">
            <h2>About US!</h2>
            <p>Water You Up To was built by Aaron Lin, Ken Richlin and Erin Yant!</p>
            <img src="bc.png" title="coinbase qr code" alt="coinbase qr code"/>
            <p>Scan this QR code to donate bitcoins to our project!</p>
>>>>>>> c3a9a6b2bc39d98b3eb16e4e0e334c292420b136
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