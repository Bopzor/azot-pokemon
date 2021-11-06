import React from 'react';

import Svg, { Path, SvgProps } from 'react-native-svg';

export function RotateIcon(props: SvgProps) {
  return (
    <Svg height={24} width={24} viewBox="0 0 350.08 349.04" fillRule="evenodd" clipRule="evenodd" {...props}>
      <Path
        d="M292.91 243.28c5.19-8.96 16.66-12.02 25.62-6.83 8.96 5.19 12.02 16.66 6.83 25.62-15.36 26.43-37.5 48.47-64.07 63.77-68.12 39.23-154.65 27.89-210.43-27.88-67.79-67.79-67.82-179.07-.02-246.87 54.73-54.73 140.07-66.97 207.64-29.5 18.3 10.15 34.59 23.53 48.19 39.41l31.29-19.38c5.45-3.38 12.42.74 12.1 7.15l-4.67 90.69c-.27 5.43-5.72 8.95-10.79 6.99l-87.14-33.83c-6.11-2.37-6.88-10.68-1.31-14.13l28.18-17.46c-9.88-10.62-21.36-19.65-34.05-26.7-53.1-29.44-119.89-19.63-162.86 23.34-53.2 53.19-53.17 140.51.02 193.72 43.64 43.63 111.84 52.73 165.21 22 20.79-11.97 38.17-29.29 50.26-50.11z"
        fillRule="nonzero"
      />
    </Svg>
  );
}
