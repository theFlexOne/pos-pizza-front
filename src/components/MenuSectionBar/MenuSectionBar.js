import React, { useState } from 'react';
import './MenuSectionBar.css';
import MenuSectionButton from '../MenuSectionButton/MenuSectionButton';
import ButtonGroup from '@mui/material/ButtonGroup';
import AppBar from '@mui/material/AppBar';
import { Tab, Tabs } from '@mui/material';
// import Tab from '@mui/material/Tab';
// import Tabs from '@mui/material/Tabs`';

export default function MenuSectionBar({
  menu,
  currentSection,
  changeSection,
}) {
  const [index, setIndex] = useState(0);

  const onTabClick = (e, index) => {
    setIndex(index);
    // e.preventDefault();
  };

  const SectionTab = props => {
    const section = props.section;
    const sectionName = section.section;
    console.log(section);
    return (
      <Tab label={sectionName} className={`tab ${sectionName}`} {...props} />
    );
  };

  return (
    <nav className="Menu-Section-Bar">
      <Tabs
        variant="fullWidth"
        className="nav tabs"
        value={index}
        onChange={onTabClick}
      >
        {menu.map(section => {
          return <SectionTab key={section.id} section={section} />;
        })}
      </Tabs>
    </nav>

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
