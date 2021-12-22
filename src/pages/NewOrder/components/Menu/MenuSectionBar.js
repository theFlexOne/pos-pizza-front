import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { useTheme } from '@emotion/react';

export default function MenuSectionBar({ sections, index, changeSection }) {
  const SectionButton = props => {
    const { id, label } = props;
    const status = (() => {
      return id === index
        ? {
            backgroundColor: theme.palette.secondary[50],
            color: theme.palette.primary[900],
            // fontWeight: 'bold',
            // fontSize: 'larger',
          }
        : {
            backgroundColor: theme.palette.secondary[300],
            color: theme.palette.secondary[50],
          };
    })();
    return (
      <Box
        {...props}
        flex="1 1 100%"
        position="relative"
        padding=".25rem .5rem"
      >
        <Button
          // variant={id == index ? 'contained' : 'outlined'}
          onClick={() => changeSection(id)}
          sx={{
            ...status,
            minHeight: '100%',
            minWidth: '100%',
          }}
          {...props}
        >
          {label}
        </Button>
      </Box>
    );
  };

  const theme = useTheme();
  console.log(`sections - `, sections);

  return (
    <Box
      display="flex"
      flexDirection="column"
      backgroundColor={theme.palette.secondary[700]}
    >
      {sections.map((section, i) => (
        <SectionButton key={section} id={i} label={section} />
      ))}
    </Box>
  );
}
// const SectionTab = props => {
//   return (
//     <Tab
//       label={props.section}
//       className={`tab ${props.section}`}
//       sx={{ flex: '1 1 100%' }}
//       {...props}
//     />
//   );
// };

// const handleChange = (_, index) => {
//   setValue(index);
// };

// return (
//   <Tabs
//     variant="fullWidth"
//     component="nav"
//     value={index}
//     onChange={changeSection}
//     orientation="vertical"
//   >
//     {sections.map(section => {
//       console.log(section);
//       return <SectionTab key={section} section={section} />;
//     })}
//   </Tabs>

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
// );
