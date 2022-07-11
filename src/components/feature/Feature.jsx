import React from 'react';
import './feature.css';

const Feature = ({ title, text }) => (
  <div className="gpt3__features-containers__feature">
    <div className="gpt3__features-containers__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="gpt3__features-containers_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;