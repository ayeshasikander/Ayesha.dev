import React from 'react';
import BgSlides from '../../components/slider/BgSlides';
import FrontWrap from '../../components/slider/FrontWrap';

const containerStyle = {
  position: 'relative',
  width: '100%',
  height: '100vh',
  overflow: 'hidden',
};

const frontWrapStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1,
  color: '#fff',
};

const HeroSection = () => {
  return (
    <div style={containerStyle}>
      <BgSlides />
      <div style={frontWrapStyle}>
        <FrontWrap />
      </div>
    </div>
  );
};

export default HeroSection;
