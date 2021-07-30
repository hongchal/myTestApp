import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {IconProps} from '../index';

const CameraIcon = (props: IconProps) => (
  <Svg
    width="1em"
    height="1em"
    viewBox="0 0 18 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M9 6.167c-1.149 0-2.083.953-2.083 2.125 0 1.171.934 2.125 2.083 2.125s2.083-.954 2.083-2.125c0-1.172-.934-2.125-2.083-2.125zm5.333-3.542a3 3 0 013 3v6.042a3 3 0 01-3 3H3.667a3 3 0 01-3-3V5.625a3 3 0 013-3h.423a1.38 1.38 0 001.156-.631L6.222.5h5.556l.976 1.494a1.38 1.38 0 001.156.631h.423zm-1.86 5.667c0-1.956-1.556-3.542-3.473-3.542-1.917 0-3.472 1.586-3.472 3.542 0 1.955 1.555 3.541 3.472 3.541s3.472-1.586 3.472-3.541z"
      fill="#fff"
    />
  </Svg>
);

export default CameraIcon;
