import React from 'react';
import styles from './dropdown.css';
import { useRef, useEffect, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean
  onOpen?: () => void
  onClose?: () => void;
  left?: number,
  top?: number
}

const NOOP = () => { };

export function Dropdown({ left, top, button, children, isOpen, onClose = NOOP, onOpen = NOOP }: IDropdownProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
  React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  React.useEffect(() => isDropdownOpen ? onOpen() : onClose(), [isDropdownOpen]);


  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen(!isDropdownOpen)
    }
  }
  const node = document.querySelector('#dropdown_root');
  if (!node) return null

  return (
    <div className={styles.container}>
      <div onClick={handleOpen} ref={ref}>
        {button}
      </div>
      {isDropdownOpen &&
        ReactDOM.createPortal(
          <div className={styles.listContainer} style={{
            top: (ref.current?.getBoundingClientRect().y || 0) + window.scrollY,
            left: (ref.current?.getBoundingClientRect().x || 0) + window.scrollX,
          }}>
            <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
              {children}
            </div>
          </div>,
          node
          )}
    </div>
  );

}
