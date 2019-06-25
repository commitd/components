const allColors: { [key: string]: string[] } = {
  red: [
    "#FFEEEE",
    "#FACDCD",
    "#F29B9B",
    "#E66A6A",
    "#D64545",
    "#BA2525",
    "#A61B1B",
    "#911111",
    "#780A0A",
    "#610404"
  ],
  redVivid: [
    "#FFE3E3",
    "#FFBDBD",
    "#FF9B9B",
    "#F86A6A",
    "#EF4E4E",
    "#E12D39",
    "#CF1124",
    "#AB091E",
    "#8A041A",
    "#610316"
  ],
  orange: [
    "#FFEFE6",
    "#FFD3BA",
    "#FAB38B",
    "#EF8E58",
    "#E67635",
    "#C65D21",
    "#AB4E19",
    "#8C3D10",
    "#77340D",
    "#572508"
  ],
  orangeVivid: [
    "#FFE8D9",
    "#FFD0B5",
    "#FFB088",
    "#FF9466",
    "#F9703E",
    "#F35627",
    "#DE3A11",
    "#C52707",
    "#AD1D07",
    "#841003"
  ],
  yellow: [
    "#FFFAEB",
    "#FCEFC7",
    "#F8E3A3",
    "#F9DA8B",
    "#F7D070",
    "#E9B949",
    "#C99A2E",
    "#A27C1A",
    "#7C5E10",
    "#513C06"
  ],
  committedYellow: [
    "#FFF0C6",
    "#FFE394",
    "#FFD563",
    "#FFC831",
    "#FFBB00",
    "#D99F00",
    "#B28300",
    "#8C6600",
    "#654A00",
    "#3F2E00"
  ],
  yellowVivid: [
    "#FFFBEA",
    "#FFF3C4",
    "#FCE588",
    "#FADB5F",
    "#F7C948",
    "#F0B429",
    "#DE911D",
    "#CB6E17",
    "#B44D12",
    "#8D2B0B"
  ],
  limeGreen: [
    "#F2FDE0",
    "#E2F7C2",
    "#C7EA8F",
    "#ABDB5E",
    "#94C843",
    "#7BB026",
    "#63921A",
    "#507712",
    "#42600C",
    "#2B4005"
  ],
  limeGreenVivid: [
    "#F8FFED",
    "#E6FFBF",
    "#CAFF84",
    "#AFF75C",
    "#8DED2D",
    "#6CD410",
    "#5CB70B",
    "#399709",
    "#2E7B06",
    "#1E5303"
  ],
  green: [
    "#E3F9E5",
    "#C1EAC5",
    "#A3D9A5",
    "#7BC47F",
    "#57AE5B",
    "#3F9142",
    "#2F8132",
    "#207227",
    "#0E5814",
    "#05400A"
  ],
  greenVivid: [
    "#E3F9E5",
    "#C1F2C7",
    "#91E697",
    "#51CA58",
    "#31B237",
    "#18981D",
    "#0F8613",
    "#0E7817",
    "#07600E",
    "#014807"
  ],
  teal: [
    "#EFFCF6",
    "#C6F7E2",
    "#8EEDC7",
    "#65D6AD",
    "#3EBD93",
    "#27AB83",
    "#199473",
    "#147D64",
    "#0C6B58",
    "#014D40"
  ],
  tealVivid: [
    "#F0FCF9",
    "#C6F7E9",
    "#8EEDD1",
    "#5FE3C0",
    "#2DCCA7",
    "#17B897",
    "#079A82",
    "#048271",
    "#016457",
    "#004440"
  ],
  cyan: [
    "#E0FCFF",
    "#BEF8FD",
    "#87EAF2",
    "#54D1DB",
    "#38BEC9",
    "#2CB1BC",
    "#14919B",
    "#0E7C86",
    "#0A6C74",
    "#044E54"
  ],
  cyanVivid: [
    "#E1FCF8",
    "#C1FEF6",
    "#92FDF2",
    "#62F4EB",
    "#3AE7E1",
    "#1CD4D4",
    "#0FB5BA",
    "#099AA4",
    "#07818F",
    "#05606E"
  ],
  lightBlue: [
    "#EBF8FF",
    "#D1EEFC",
    "#A7D8F0",
    "#7CC1E4",
    "#55AAD4",
    "#3994C1",
    "#2D83AE",
    "#1D6F98",
    "#166086",
    "#0B4F71"
  ],
  lightBlueVivid: [
    "#E3F8FF",
    "#B3ECFF",
    "#81DEFD",
    "#5ED0FA",
    "#40C3F7",
    "#2BB0ED",
    "#1992D4",
    "#127FBF",
    "#0B69A3",
    "#035388"
  ],
  blue: [
    "#DCEEFB",
    "#B6E0FE",
    "#84C5F4",
    "#62B0E8",
    "#4098D7",
    "#2680C2",
    "#186FAF",
    "#0F609B",
    "#0A558C",
    "#003E6B"
  ],
  blueVivid: [
    "#E6F6FF",
    "#BAE3FF",
    "#7CC4FA",
    "#47A3F3",
    "#2186EB",
    "#0967D2",
    "#0552B5",
    "#03449E",
    "#01337D",
    "#002159"
  ],
  indigo: [
    "#E0E8F9",
    "#BED0F7",
    "#98AEEB",
    "#7B93DB",
    "#647ACB",
    "#4C63B6",
    "#4055A8",
    "#35469C",
    "#2D3A8C",
    "#19216C"
  ],
  indigoVivid: [
    "#D9E8FF",
    "#B0D0FF",
    "#88B1FC",
    "#5E8AEE",
    "#3A66DB",
    "#2251CC",
    "#1D3DBF",
    "#132DAD",
    "#0B1D96",
    "#061178"
  ],
  purple: [
    "#EAE2F8",
    "#CFBCF2",
    "#A081D9",
    "#8662C7",
    "#724BB7",
    "#653CAD",
    "#51279B",
    "#421987",
    "#34126F",
    "#240754"
  ],
  purpleVivid: [
    "#F2EBFE",
    "#DAC4FF",
    "#B990FF",
    "#A368FC",
    "#9446ED",
    "#8719E0",
    "#7A0ECC",
    "#690CB0",
    "#580A94",
    "#44056E"
  ],
  magenta: [
    "#F5E1F7",
    "#ECBDF2",
    "#CE80D9",
    "#BB61C7",
    "#AD4BB8",
    "#A23DAD",
    "#90279C",
    "#7C1A87",
    "#671270",
    "#4E0754"
  ],
  magentaVivid: [
    "#FDEBFF",
    "#F8C4FE",
    "#F48FFF",
    "#F368FC",
    "#ED47ED",
    "#E019D0",
    "#CB10B8",
    "#B30BA3",
    "#960888",
    "#6E0560"
  ],
  pink: [
    "#FFE0F0",
    "#FAB8D9",
    "#F191C1",
    "#E668A7",
    "#DA4A91",
    "#C42D78",
    "#AD2167",
    "#9B1B5A",
    "#781244",
    "#5C0B33"
  ],
  pinkVivid: [
    "#FFE3EC",
    "#FFB8D2",
    "#FF8CBA",
    "#F364A2",
    "#E8368F",
    "#DA127D",
    "#BC0A6F",
    "#A30664",
    "#870557",
    "#620042"
  ],
  blueGrey: [
    "#F0F4F8",
    "#D9E2EC",
    "#BCCCDC",
    "#9FB3C8",
    "#829AB1",
    "#627D98",
    "#486581",
    "#334E68",
    "#243B53",
    "#102A43"
  ],
  coolGrey: [
    "#F5F7FA",
    "#E4E7EB",
    "#CBD2D9",
    "#9AA5B1",
    "#7B8794",
    "#616E7C",
    "#52606D",
    "#3E4C59",
    "#323F4B",
    "#1F2933"
  ],
  grey: [
    "#F7F7F7",
    "#E1E1E1",
    "#CFCFCF",
    "#B1B1B1",
    "#9E9E9E",
    "#7E7E7E",
    "#626262",
    "#515151",
    "#3B3B3B",
    "#222222"
  ],
  warmGrey: [
    "#FAF9F7",
    "#E8E6E1",
    "#D3CEC4",
    "#B8B2A7",
    "#A39E93",
    "#857F72",
    "#625D52",
    "#504A40",
    "#423D33",
    "#27241D"
  ],
  committedGrey: [
    "#DDDDDD",
    "#C7C7C7",
    "#B2B2B2",
    "#9C9C9C",
    "#868686",
    "#707070",
    "#5B5B5B",
    "#454545",
    "#333333",
    "#222222"
  ]
}

export default allColors
