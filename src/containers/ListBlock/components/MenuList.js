import React from "react";
import TreeItem from "@material-ui/lab/TreeItem";

import MenuChildrenList from "./MenuChildrenList";

/**
 * Showing list of menu item's childrens with
 * each nested child further contains list of it's own children and so on
 * @param {array} props
 * @returns
 */
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
                <MenuChildrenList children={child.children} />
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
