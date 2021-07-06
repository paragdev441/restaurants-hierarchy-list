import React from "react";
import TreeItem from "@material-ui/lab/TreeItem";

const MenuChildren = ({ children }) => {
  if (children && children.length !== 0) {
    return children.map((child, index) => {
      return (
        <React.Fragment key={`${JSON.stringify(child)}${index}`}>
          {child.selected === 1 ? (
            <TreeItem
              nodeId={`${JSON.stringify(child)}${index}`}
              label={child.name}
            >
              {MenuChildren(child.children)}
            </TreeItem>
          ) : null}
        </React.Fragment>
      );
    });
  }
};

export default MenuChildren;
