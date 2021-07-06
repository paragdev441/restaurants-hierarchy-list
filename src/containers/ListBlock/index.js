import React from "react";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RestaurentList from "./components/RestaurentList";

/**
 *  Responsible for toggling on or off of hierarchical list's items at every level.
 *  Used TreeView API (https://material-ui.com/api/tree-item/) to show tree list
 * @param {array, object} props
 * @returns
 */
const ListBlock = ({ restaurents, provided }) => {
  // const classes = useStyles();
  const [expanded, setExpanded] = React.useState([]);
  const [selected, setSelected] = React.useState([]);

  const handleToggle = (event, nodeIds) => {
    setExpanded(nodeIds);
  };

  const handleSelect = (event, nodeIds) => {
    setSelected(nodeIds);
  };

  /** Showing restaurents hierarchical list */
  return (
    <TreeView
      className="characters"
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
      expanded={expanded}
      selected={selected}
      onNodeToggle={handleToggle}
      onNodeSelect={handleSelect}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      // setRestaurents={setRestaurents}
      ref={provided.innerRef}
      {...provided.droppableProps}
    >
      {restaurents.length !== 0 ? (
        <RestaurentList restaurents={restaurents} />
      ) : (
        <div>Loading...</div>
      )}
    </TreeView>
  );
};

export default ListBlock;
