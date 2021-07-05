import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import axios from "axios";

const useStyles = makeStyles({
  iconContainer: {
    color: "red",
  },
});

const ListBlock = () => {
  const classes = useStyles();

  const [restaurents, setRestaurents] = React.useState([]);
  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);

  useEffect(async () => {
    const {
      data: { body },
    } = await axios.get("https://api.npoint.io/93bed93a99df4c91044e");
    setRestaurents(body.Recommendations);
    console.log(restaurents);
  }, []);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };

  const menuChildren = (children) => {
    if (children && children.length !== 0) {
      return children.map((child, index) => {
        return (
          <React.Fragment key={`${JSON.stringify(child)}${index}`}>
            {child.selected === 1 ? (
              <TreeItem
                nodeId={`${JSON.stringify(child)}${index}`}
                label={child.name}
              >
                {menuChildren(child.children)}
              </TreeItem>
            ) : null}
          </React.Fragment>
        );
      });
    }
  };

  const menuList = (menu) => {
    if (menu[0].type === "sectionheader") {
      if (menu[0].children && menu[0].children.length !== 0) {
        return menu[0].children.map((child, menuIndex) => {
          return (
            <React.Fragment key={`${JSON.stringify(child)}${menuIndex}`}>
              {child.type === "item" && child.selected === 1 ? (
                <TreeItem
                  nodeId={`${JSON.stringify(child)}${menuIndex}`}
                  label={child.name}
                >
                  {menuChildren(child.children)}
                </TreeItem>
              ) : null}
            </React.Fragment>
          );
        });
      }
    }
    return null;
  };

  const restaurentList = () => {
    return restaurents.map(({ RestaurantName, menu }, index) => {
      return (
        <React.Fragment key={`${RestaurantName}${index}`}>
          <TreeItem nodeId={`${RestaurantName}${index}`} label={RestaurantName}>
            {menuList(menu)}
          </TreeItem>
        </React.Fragment>
      );
    });
  };

  return (
    <TreeView
      // className={classes.iconContainer}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      expanded={expanded}
      selected={selected}
      onNodeToggle={handleToggle}
      onNodeSelect={handleSelect}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
    >
      {restaurents.length !== 0 ? restaurentList() : <div>Loading...</div>}
    </TreeView>
  );
};

export default ListBlock;
