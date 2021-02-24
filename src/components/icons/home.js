import React from 'react';
import Svg, { Path } from 'react-native-svg';

const HomeIcon = ({ color = 'black', focused }) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={focused ? 'rgba(47, 128, 237, 0.25)' : null}>
    <Path
      d="M3 12L5 10M5 10L12 3L19 10M5 10V20C5 20.2652 5.10536 20.5196 5.29289 20.7071C5.48043 20.8946 5.73478 21 6 21H9C9.26522 21 9.51957 20.8946 9.70711 20.7071C9.89464 20.5196 10 20.2652 10 20V16C10 15.7348 10.1054 15.4804 10.2929 15.2929C10.4804 15.1054 10.7348 15 11 15H13C13.2652 15 13.5196 15.1054 13.7071 15.2929C13.8946 15.4804 14 15.7348 14 16V20C14 20.2652 14.1054 20.5196 14.2929 20.7071C14.4804 20.8946 14.7348 21 15 21H18C18.2652 21 18.5196 20.8946 18.7071 20.7071C18.8946 20.5196 19 20.2652 19 20V10M19 10L21 12"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default HomeIcon;
