import React, { useEffect } from 'react';
import { Image, View, Text, Button, TouchableOpacity } from 'react-native';
import styles from '../assets/styles/style1';
import { SvgXml } from 'react-native-svg';

function SchePg({ navigation }) {
  const HomeSvgXml = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.5 8C17.5 7.72386 17.2761 7.5 17 7.5C16.7239 7.5 16.5 7.72386 16.5 8H17.5ZM3.5 8C3.5 7.72386 3.27614 7.5 3 7.5C2.72386 7.5 2.5 7.72386 2.5 8H3.5ZM18.6464 10.3536C18.8417 10.5488 19.1583 10.5488 19.3536 10.3536C19.5488 10.1583 19.5488 9.84171 19.3536 9.64645L18.6464 10.3536ZM10 1L10.3536 0.646447C10.1583 0.451184 9.84171 0.451184 9.64645 0.646447L10 1ZM0.646447 9.64645C0.451184 9.84171 0.451184 10.1583 0.646447 10.3536C0.841709 10.5488 1.15829 10.5488 1.35355 10.3536L0.646447 9.64645ZM5 19.5H15V18.5H5V19.5ZM17.5 17V8H16.5V17H17.5ZM3.5 17V8H2.5V17H3.5ZM19.3536 9.64645L10.3536 0.646447L9.64645 1.35355L18.6464 10.3536L19.3536 9.64645ZM9.64645 0.646447L0.646447 9.64645L1.35355 10.3536L10.3536 1.35355L9.64645 0.646447ZM15 19.5C16.3807 19.5 17.5 18.3807 17.5 17H16.5C16.5 17.8284 15.8284 18.5 15 18.5V19.5ZM5 18.5C4.17157 18.5 3.5 17.8284 3.5 17H2.5C2.5 18.3807 3.61929 19.5 5 19.5V18.5Z" fill="#333333"/>
</svg>`;
  const ComSvgXml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 5H21V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V5Z" stroke="#333333" stroke-linejoin="round"/>
<circle cx="12" cy="12" r="3" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 2L19 2" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="0.5" y="0.5" width="23" height="23" stroke="black" stroke-opacity="0.08"/>
</svg>`;
  const MypgSvgXml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.99988 18C3.99988 15.7909 5.79074 14 7.99988 14H15.9999C18.209 14 19.9999 15.7909 19.9999 18V18C19.9999 19.1046 19.1044 20 17.9999 20H5.99988C4.89531 20 3.99988 19.1046 3.99988 18V18Z" stroke="#333333" stroke-linejoin="round"/>
<circle cx="11.9999" cy="7" r="3" stroke="#333333"/>
<rect x="0.5" y="0.5" width="23" height="23" stroke="black" stroke-opacity="0.08"/>
</svg>
`;
  const ScheSvgXml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4H20V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18V4Z" stroke="#292929" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M4 8H20" stroke="#292929" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16 3V5" stroke="#292929" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 3V5" stroke="#292929" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="0.5" y="0.5" width="23" height="23" stroke="black" stroke-opacity="0.08"/>
</svg>
`;
  const CoachSvgXml = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 4V18C3 19.1046 3.89543 20 5 20H17H19C20.1046 20 21 19.1046 21 18V8H17" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 4H17V18C17 19.1046 17.8954 20 19 20V20" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 8L7 8" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 12L9 12" stroke="#333333" stroke-linecap="round" stroke-linejoin="round"/>
<rect x="0.5" y="0.5" width="23" height="23" stroke="black" stroke-opacity="0.08"/>
</svg>
`;
  const CoachSvg = () => <SvgXml xml={CoachSvgXml} width='30' height='30' />;
  const HomeSvg = () => <SvgXml xml={HomeSvgXml} width='30' height='30' />;
  const ComSvg = () => <SvgXml xml={ComSvgXml} width='30' height='30' />;
  const MypgSvg = () => <SvgXml xml={MypgSvgXml} width='30' height='30' />;
  const ScheSvg = () => <SvgXml xml={ScheSvgXml} width='30' height='30' />;
  return (
    <View style={styles.container}>
      <Text>schedule</Text>

      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => navigation.replace('Home')}
          style={{ alignItems: 'center' }}
        >
          <HomeSvg />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.replace('CoachPg')}
          style={{ alignItems: 'center' }}
        >
          <CoachSvg />
          <Text>코칭기록</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SchePg')}
          style={{ alignItems: 'center' }}
        >
          <ScheSvg />
          <Text>스케줄</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.replace('ComPg')}
          style={{ alignItems: 'center' }}
        >
          <ComSvg />
          <Text>커뮤니티</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.replace('MyPg')}
          style={{ alignItems: 'center' }}
        >
          <MypgSvg />
          <Text>마이페이지</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default SchePg;
