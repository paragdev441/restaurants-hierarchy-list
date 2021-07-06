import React, { useEffect } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import axios from "axios";

import "./styles.css";
import ListBlock from "./containers/ListBlock";

/**
 * 1. Creating Drabble List of Restaurents & their sub childs by using restaurents data from a given api's endpoint
 * 2. Responsible for showing and handling state of list items
 * @returns ReactElement
 */
export default function App() {
  const [restaurents, setRestaurents] = React.useState([]);

  /** Initializing the restaurents state from data which is received from an Api */
  useEffect(async () => {
    const {
      data: { body },
    } = await axios.get("https://api.npoint.io/93bed93a99df4c91044e");
    setRestaurents(body.Recommendations);
    console.log(restaurents);
  }, []);

  /**
   * EventHandler for onDragEnd event
   * Moving the restaurent item(block) from its original place to the position where mouse pointer points
   * @param {object} param
   */
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

  /** Returning ReactELement ListBlock wrapped inside the DragDropContect (similarly to React’s Context API)
   *  DragDropContext:- Provide ablility to use the library (Provider)
   *  Droppable:- The Area where our items can be moved around inside (Consumer)
   */
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
