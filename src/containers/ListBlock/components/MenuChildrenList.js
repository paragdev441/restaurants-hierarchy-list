import React from "react";
import TreeItem from "@material-ui/lab/TreeItem";

/**
 * Showing list of menu's children names and children's children names
 * Recursively call the MenuChildrenList until all children's name are printed
 * @param {array} props
 * @returns
 */
const MenuChildrenList = ({ children }) => {
  if (children && children.length !== 0) {
    return children.map((child, index) => {
      return (
        <React.Fragment key={`${JSON.stringify(child)}${index}`}>
          {child.selected === 1 ? (
            <TreeItem
              nodeId={`${JSON.stringify(child)}${index}`}
              label={child.name}
            >
              {MenuChildrenList(child.children)}
            </TreeItem>
          ) : null}
        </React.Fragment>
      );
    });
  }
};

export default MenuChildrenList;
