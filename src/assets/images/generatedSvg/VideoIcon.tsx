import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {IconProps} from '../index';

const VideoIcon = (props: IconProps) => (
  <Svg
    width="1em"
    height="1em"
    viewBox="0 0 23 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M16.293 5.7l5.213-3.65a.5.5 0 01.787.41v12.08a.5.5 0 01-.787.41l-5.213-3.65v4.2a1 1 0 01-1 1h-14a1 1 0 01-1-1v-14a1 1 0 011-1h14a1 1 0 011 1v4.2zm0 3.593L21 12.5V4l-4.707 3.5v1.793zM1.793 1.96V14.8h13.04V1.96H1.793z"
      fill="#fff"
    />
  </Svg>
);

export default VideoIcon;
