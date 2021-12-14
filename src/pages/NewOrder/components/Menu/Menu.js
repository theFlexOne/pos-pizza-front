import React, { useEffect, useState } from 'react';
import MenuSectionBar from '../MenuSectionBar/MenuSectionBar';
import MenuItems from '../MenuItems/MenuItems';
// import './Menu.css';
// import MenuModal from '../MenuModal/MenuModal';

export default function Menu({ menu, addToCart, className: classes }) {
  const [currentSection, setCurrentSection] = useState(0);
  // const [menuSections, setMenuSections] = useState([]);

  const changeSection = section => {
    setCurrentSection(section);
  };

  return (
    <section className={classes}>
      <MenuItems addToCart={addToCart} section={currentSection} />
      <MenuSectionBar
        menu={menu}
        changeSection={changeSection}
        index={currentSection}
      />
    </section>
  );
}
