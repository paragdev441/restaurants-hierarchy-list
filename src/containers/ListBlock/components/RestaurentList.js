import React from "react";
import TreeItem from "@material-ui/lab/TreeItem";
import { Draggable } from "react-beautiful-dnd";
import MenuList from "./MenuList";

const RestaurentList = ({ restaurents }) => {
  return restaurents.map(({ RestaurantName, menu }, index) => {
    return (
      <Draggable
        key={`${RestaurantName}${index}`}
        draggableId={`${RestaurantName}${index}`}
        index={index}
      >
        {(provided, snapshot) => (
          <TreeItem
            nodeId={`${RestaurantName}${index}`}
            label={RestaurantName}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
              ...provided.draggableProps.style,
              boxShadow: snapshot.isDragging ? "0 0 .4rem #666" : "none",
            }}
          >
            <MenuList menu={menu} />
          </TreeItem>
        )}
      </Draggable>
    );
  });
};

export default RestaurentList;
