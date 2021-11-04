import React from 'react';

import Svg, { Path, SvgProps } from 'react-native-svg';

// TODO: have an animated loader
export function Loader(props: SvgProps) {
  return (
    <Svg width={40} height={40} viewBox="0 0 50 50" {...props}>
      <Path d="M43.935 25.145c0-10.318-8.364-18.683-18.683-18.683-10.318 0-18.683 8.365-18.683 18.683h4.068c0-8.071 6.543-14.615 14.615-14.615s14.615 6.543 14.615 14.615h4.068z"></Path>
    </Svg>
  );
}
