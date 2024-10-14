function Dropdown({ children }) {
  return <div>{children}</div>;
}

export function DropdownToggle({ children }) {
  return <button>{children}</button>;
}
export function DropdownMenu({ children }) {
  return <nav>{children}</nav>;
}
export function DropdownItem({ href, children }) {
  return <a href={href}>{children}</a>;
}

export default Dropdown;
