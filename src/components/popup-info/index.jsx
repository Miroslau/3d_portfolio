import React from 'react';
import { renderContent } from '../../constants/render-content.jsx';

const PopupInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default PopupInfo;
