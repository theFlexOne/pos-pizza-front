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
  const sx = {
    display: 'flex',
    flexBasis: '100%',
  };
  let a;
  return {
    sx,
    onMouseDown: e => {
      mouseDown.current = true;
      a = new DragScroll(e);
      e.preventDefault();
    },
    onMouseMove: e => mouseDown.current && a.scrollToCoords(e),
    onMouseUp: () => (mouseDown.current = false),
  };
};

export default useDragScroll;
