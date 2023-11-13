import React, { Component } from 'react'
import airlogo from "./images/airlogo.png"
import selogo from "./images/selogo.png"
import fit from "./images/fit.png"
import applecard from "./images/applecard.png"
export default class Section2 extends Component {
  render() {
    return (
      <div><section>
      <div className="mx-3">
        <div className="row">
          <div className="col-md-6 mb-3">
            <div className=" had  text-center text-light">
              <h1 className="pt-5">AirPods pa </h1>
              <h3>Rebuilt from the sound up.</h3>
  
              <a href="#" className="pe-2 pt-1">Learn More &#10095; </a>
              <a href="#"> Shop &#10095;</a>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className=" haf  text-center text-light">
              <img src={airlogo} className="bg-dark mt-5" alt=""/>
              <h3 className="pt-2">A healthy leap ahead</h3>
  
              <a href="#" className="pe-2 pt-1">Learn More &#10095; </a>
              <a href="#"> Shop &#10095;</a>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className=" hag  text-center text-dark">
              <img src={selogo} className="mt-5" alt=""/>
              <h5>A great deal to love.</h5>
  
              <a href="#" className="pe-2 pt-2">Learn More &#10095; </a>
              <a href="#"> Buy &#10095;</a>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className=" hai  text-center text-dark ">
              <img src={fit} className="mt-5" style={{width: "140px"}} alt=""/>
              <h5 className="pt-2">A healthy leap ahead</h5>
              <p className="">Now all you need is iphone</p>
  
  
              <a href="#" className="pe-2 pt-1">Learn More &#10095; </a>
              <a href="#"> Notify me &#10095;</a>
              <span className="bot">available later this fall for all iphone users. <sup>1</sup></span>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className=" ham text-center text-dark">
              <h6 className="pt-3 text-danger">offer ends 9.26</h6>
              <h1>Get supercharged <br/> for college.</h1>
              <p>Last chance to get a gift card. <sup>2</sup> </p>
  
              <a href="#" className=" pt-1">shop now &#10095; </a>
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <div className=" han  text-center text-dark">
              <img src={applecard} className="mt-5 pb-2" style={{width: "100px"}} alt=""/>
              <h5 className="pb-1">Get up to 3% Daily Cash back <br/> with every purchase.</h5>
              <a href="#" className="pe-2 pt-2">Learn More &#10095; </a>
              <a href="#"> Apply now &#10095;</a>
  
            </div>
          </div>
        </div>
      </div>
    </section></div>
    )
  }
}
