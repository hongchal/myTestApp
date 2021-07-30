import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {IconProps} from '../index';

const PlayButton = (props: IconProps) => (
  <Svg
    width="1em"
    height="1em"
    viewBox="0 0 28 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M27.212 18.972L2.481 35.459a1.167 1.167 0 01-1.813-.97V1.513a1.167 1.167 0 011.813-.97L27.212 17.03a1.167 1.167 0 010 1.942z"
      fill="#fff"
    />
  </Svg>
);

export default PlayButton;
