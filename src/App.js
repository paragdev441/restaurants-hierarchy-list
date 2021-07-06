import React, { useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import axios from "axios";

import "./styles.css";
import ListBlock from "./containers/ListBlock";

export default function App() {
  const [restaurents, setRestaurents] = React.useState([]);

  useEffect(async () => {
    const {
      data: { body },
    } = await axios.get("https://api.npoint.io/93bed93a99df4c91044e");
    setRestaurents(body.Recommendations);
    console.log(restaurents);
  }, []);

  const handleOnDragEnd = (param) => {
    let tempRestaurents = restaurents;
    const srcIndex = param.source.index;
    const destIndex = param.destination?.index;
    if (destIndex) {
      const [recordedItem] = tempRestaurents.splice(srcIndex, 1);
      tempRestaurents.splice(destIndex, 0, recordedItem);
      setRestaurents(tempRestaurents);
    }
  };

  return (
    <div>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="characters">
          {(provided) => (
            <ListBlock
              restaurents={restaurents}
              setRestaurents={setRestaurents}
              provided={provided}
            >
              {provided.placeholder}
            </ListBlock>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
