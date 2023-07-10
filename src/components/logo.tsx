import { SVGProps } from "react";

const Logo = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="100pt"
      height="100pt"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <g
        transform="translate(0,100) scale(0.100000,-0.100000)"
        fill="currentColor"
        stroke="currentColor"
      >
        <path
          d="M392 964 c-63 -17 -85 -27 -135 -66 -75 -60 -119 -171 -116 -298 1
-58 -3 -85 -19 -120 -12 -25 -22 -58 -22 -74 0 -45 37 -111 76 -137 20 -13 46
-45 59 -70 51 -100 190 -186 282 -176 90 10 212 96 248 176 10 23 34 51 55 65
42 28 80 96 80 143 0 16 -11 50 -24 75 -19 35 -23 55 -19 91 11 96 -30 235
-89 298 -86 92 -239 130 -376 93z m263 -59 c111 -54 157 -140 160 -300 2 -82
6 -106 24 -135 11 -19 21 -48 21 -65 0 -40 -33 -91 -73 -115 -20 -12 -40 -36
-51 -61 -35 -78 -132 -152 -218 -165 -81 -13 -230 85 -258 170 -7 22 -24 42
-45 55 -51 30 -77 77 -72 129 3 24 13 52 22 62 15 16 18 40 19 127 1 90 5 116
24 158 57 123 159 178 315 171 59 -3 91 -11 132 -31z"
        />
        <path
          d="M426 644 c-27 -28 -35 -64 -13 -64 7 0 17 10 22 22 14 32 52 49 84
37 54 -21 54 -62 1 -136 -42 -58 -54 -113 -25 -113 9 0 15 10 15 26 0 14 13
43 29 63 40 51 51 75 51 111 0 75 -107 110 -164 54z"
        />
        <path
          d="M470 320 c0 -13 7 -20 20 -20 13 0 20 7 20 20 0 13 -7 20 -20 20 -13
0 -20 -7 -20 -20z"
        />
      </g>
    </svg>
  );
};

export default Logo;
