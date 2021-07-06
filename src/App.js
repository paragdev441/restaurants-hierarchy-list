import React, { useEffect, Suspense } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import axios from "axios";

import "./styles.css";
const ListBlock = React.lazy(() => import("./containers/ListBlock"));
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
    if (!localStorage.getItem("restaurents")) {
      setRestaurents(body.Recommendations);
      localStorage.setItem("restaurents", JSON.stringify(body.Recommendations));
    } else {
      setRestaurents(JSON.parse(localStorage.getItem("restaurents")));
    }
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
      localStorage.setItem("restaurents", JSON.stringify(tempRestaurents));
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
            <Suspense fallback={<div>Loading...</div>}>
              <ListBlock
                restaurents={restaurents}
                setRestaurents={setRestaurents}
                provided={provided}
              >
                {provided.placeholder}
              </ListBlock>
            </Suspense>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
