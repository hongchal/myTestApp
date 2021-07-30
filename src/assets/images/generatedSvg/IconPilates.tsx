import * as React from 'react';
import Svg, {SvgProps, G, Path, Defs, ClipPath} from 'react-native-svg';
import {IconProps} from '../index';

const IconPilates = (props: IconProps) => (
  <Svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#icon_pilates_svg__clip0)" fill="#000">
      <Path d="M12.25 10c-1.654 0-3-1.345-3-3s1.346-3 3-3 3 1.345 3 3-1.345 3-3 3zm0-4.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zM18.248 16.75c-.223 0-.448-.05-.655-.153a1.532 1.532 0 01-.843-1.367v-2.959c0-.577.33-1.113.843-1.366a1.49 1.49 0 011.602.185l2.531 2.082a.75.75 0 010 1.158l-2.531 2.082a1.493 1.493 0 01-.947.338zm.005-4.492c-.001.003-.003.008-.003.014v2.958c0 .006 0 .01.003.014l1.816-1.493-1.816-1.493z" />
      <Path d="M27.25 14.5h-6a.75.75 0 110-1.5h6a.75.75 0 110 1.5zM14.844 24.248H4.75a.75.75 0 110-1.5h10.094c2.08 0 4.094-.609 5.825-1.763l6.166-4.11a.75.75 0 11.831 1.247l-6.166 4.11a11.96 11.96 0 01-6.656 2.017z" />
      <Path d="M25.746 28a2.286 2.286 0 01-1.794-.892l-.006-.008-3.675-4.898a.75.75 0 111.2-.9l3.672 4.893c.151.193.37.305.604.305.414 0 .75-.337.75-.75V11.5a.75.75 0 111.5 0v14.25a2.254 2.254 0 01-2.25 2.25zM4.746 27.999a.75.75 0 01-.643-1.137l2.25-3.75a.75.75 0 111.287.773l-2.25 3.75a.75.75 0 01-.644.364zM16.75 22a2.36 2.36 0 01-.548-.067l-2.574-.639C11.795 21.548 7.487 22 7 22a3.003 3.003 0 01-2.812-4.046l.002-.004 2.265-6.052.009-.022A3.001 3.001 0 019.25 10c.08 0 .161.002.24.007.7.038 1.391.141 2.057.308l5.002 1.253a2.256 2.256 0 011.634 2.731 2.252 2.252 0 01-2.731 1.634L11.705 15l-.743 1.983 2.49-.212a2.29 2.29 0 01.835.044l.013.002 3 .75a2.257 2.257 0 011.633 2.732A2.254 2.254 0 0116.75 22zm-.191-1.524a.753.753 0 00.92-.544.743.743 0 00-.544-.91l-2.99-.748a.767.767 0 00-.34-.012l-3.699.315a.748.748 0 01-.765-1.01l1.395-3.72a.748.748 0 01.883-.464l4.39 1.094a.752.752 0 00.92-.544.743.743 0 00-.545-.91l-5-1.253a9.43 9.43 0 00-1.933-.27c-.612 0-1.159.367-1.395.935l-2.2 5.88a.734.734 0 01-.033.096l-.033.079A1.501 1.501 0 007 20.5c.395-.004 4.724-.448 6.56-.712a.762.762 0 01.288.014l2.71.674z" />
    </G>
    <Defs>
      <ClipPath id="icon_pilates_svg__clip0">
        <Path fill="#fff" transform="translate(4 4)" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default IconPilates;
