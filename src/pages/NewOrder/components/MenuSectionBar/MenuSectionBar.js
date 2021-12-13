import React, { useState } from 'react';
// import './MenuSectionBar.css';
import MenuSectionButton from '../MenuSectionButton/MenuSectionButton';
import ButtonGroup from '@mui/material/ButtonGroup';
import AppBar from '@mui/material/AppBar';
import { Box, Tab, Tabs } from '@mui/material';
// import Tab from '@mui/material/Tab';
// import Tabs from '@mui/material/Tabs`';

export default function MenuSectionBar({ sections, index, changeSection }) {
  const SectionTab = props => {
    return (
      <Tab
        label={props.section}
        className={`tab ${props.section}`}
        sx={{ flex: 1 }}
        {...props}
      />
    );
  };

  const handleChange = (_, index) => {
    changeSection(index);
  };

  return (
    <Tabs
      variant="fullWidth"
      component="nav"
      value={index}
      onChange={() => handleChange}
      orientation="vertical"
    >
      {sections.map(section => {
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
