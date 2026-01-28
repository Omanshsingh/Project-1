import React from 'react'
import {Bookmark} from 'lucide-react';

const Card = (props) => {
  return (
    <div>
      <div className="card"> 
          <div className="top">
            <img src={props.brandLogo} alt="" />
            <button>Save <Bookmark size={20} /></button>
          </div>
          <div className="center">
            <h2>{props.companyName}</h2><span>{props.datePosted}</span>
            <h3>{props.post}</h3>
            <div>
              <h4>{props.tag1}</h4>
              <h4>{props.tag2}</h4>
            </div>
          </div>
          <div className="bottom">
            <div>
              <p>${props.pay}k - ${props.pay + 5}k</p>
              <h3>{props.location}</h3>
            </div>
            <div>
              <button>Apply Now</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Card
