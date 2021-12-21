import React, { useState } from 'react';
// import { useState } from 'react';
// import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

export default function MenuSectionBar({ sections, index, changeSection }) {
  // const [value, setValue] = useState(0);

  const SectionTab = props => {
    return (
      <Tab
        label={props.section}
        className={`tab ${props.section}`}
        sx={{ flex: '1 1 100%' }}
        {...props}
      />
    );
  };

  // const handleChange = (_, index) => {
  //   setValue(index);
  // };

  return (
    <Tabs
      variant="fullWidth"
      component="nav"
      value={index}
      onChange={changeSection}
      orientation="vertical"
    >
      {sections.map(section => {
        console.log(section);
        return <SectionTab key={section} section={section} />;
      })}
    </Tabs>

    // <nav>
    //   <ButtonGroup
    //     className="Menu-Section-Bar"
    //     // variant="contained"
    //     // color="primary"
    //   >
    //     {menu.map(section => {
    //       if (currentSection && currentSection.section === section.section) {
    //         return (
    //           <MenuSectionButton
    //             key={section.id}
    //             active={true}
    //             sectionInfo={section}
    //             changeSection={changeSection}
    //           />
    //         );
    //       }
    //       return (
    //         <MenuSectionButton
    //           key={section.id}
    //           sectionInfo={section}
    //           changeSection={changeSection}
    //         />
    //       );
    //     })}
    //   </ButtonGroup>
    // </nav>
  );
}
