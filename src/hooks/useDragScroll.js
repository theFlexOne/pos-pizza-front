import { useRef } from 'react';

class DragScroll {
  constructor(event) {
    this.pageStart = [window.scrollX, window.scrollY];
    this.cursorStart = [event.pageX, event.pageY];
  }
  scrollToCoords(e) {
    const x = this.pageStart[0] - (e.pageX - this.cursorStart[0]) * 0.57;
    const y = this.pageStart[1] - (e.pageY - this.cursorStart[1]) * 0.77;
    window.scrollTo(x, y);
  }
}

const useDragScroll = () => {
  const mouseDown = useRef(false);

  const handleMouseDown = e => {
    mouseDown.current = true;
    a = new DragScroll(e);
    e.preventDefault();
  };
  const handleMouseMove = e => {
    mouseDown.current && a.scrollToCoords(e);
  };
  const handleMouseUp = () => (mouseDown.current = false);
  let a;
  return {
    sx: {
      // To span the entire window
      display: 'flex',
      flexBasis: '100%',
      //* Uncomment below to demo drag scrolling
      // minHeight: '120vh',
      // minWidth: '120vw',
    },
    onMouseDown: handleMouseDown,
    onMouseMove: handleMouseMove,
    onMouseUp: handleMouseUp,
  };
};

export default useDragScroll;
