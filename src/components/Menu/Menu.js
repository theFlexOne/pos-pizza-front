import React, { useEffect, useState } from 'react';
import MenuSectionBar from '../MenuSectionBar/MenuSectionBar';
import MenuItems from '../MenuItems/MenuItems';
import './Menu.css';
// import MenuModal from '../MenuModal/MenuModal';

export default function Menu({ menu, addToCart }) {
  const [currentSection, setCurrentSection] = useState(menu[0]);
  // const [menuSections, setMenuSections] = useState([]);

  useEffect(() => {
    setCurrentSection(menu[0]);
  }, [menu]);

  const changeSection = section => {
    setCurrentSection(section);
  };

  console.log(menu);
  console.log(currentSection);
  return (
    <section className="Menu">
      <MenuItems addToCart={addToCart} section={currentSection} />
      <MenuSectionBar
        menu={menu}
        changeSection={changeSection}
        currentSection={currentSection}
      />
    </section>
  );
}
