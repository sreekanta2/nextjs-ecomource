export const SideMenu = ({ label, icon, subItems, isExpanded, onToggle }) => {
  return (
    <li class={`hash-child   ${isExpanded ? "expand" : ""}`}>
      <a href="#" onClick={onToggle}>
        <div className="icon-large">
          <i className={`ri ${icon}`}></i>
        </div>
        {label}
        <div className="icon-small">
          {subItems.length > 0 &&
            (!isExpanded ? (
              <i className="ri-arrow-right-s-line"></i>
            ) : (
              <i class="ri-arrow-up-s-line"></i>
            ))}
        </div>
      </a>
      {isExpanded && (
        <ul>
          {subItems.map((subItem, index) => (
            <li key={index}>
              <a href="#">{subItem}</a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
