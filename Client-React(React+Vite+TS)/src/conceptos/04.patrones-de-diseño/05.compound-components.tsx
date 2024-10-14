function Dropdown({ children }) {
  return <div>{children}</div>;
}

function DropdownToggle({ children }) {
  return <button>{children}</button>;
}
function DropdownMenu({ children }) {
  return <nav>{children}</nav>;
}
function DropdownItem({ href, children }) {
  return <a href={href}>{children}</a>;
}

Dropdown.Toggle = DropdownToggle;
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownItem;

export default Dropdown;
