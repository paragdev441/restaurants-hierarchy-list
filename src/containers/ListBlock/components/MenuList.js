import React from "react";
import TreeItem from "@material-ui/lab/TreeItem";

import MenuChildren from "./MenuChildren";

const MenuList = ({ menu: [item] }) => {
  if (item.type === "sectionheader") {
    if (item.children && item.children.length !== 0) {
      return item.children.map((child, menuIndex) => {
        return (
          <React.Fragment key={`${JSON.stringify(child)}${menuIndex}`}>
            {child.type === "item" && child.selected === 1 ? (
              <TreeItem
                nodeId={`${JSON.stringify(child)}${menuIndex}`}
                label={child.name}
              >
                <MenuChildren children={child.children} />
              </TreeItem>
            ) : null}
          </React.Fragment>
        );
      });
    }
  }
  return null;
};

export default MenuList;
