<h1 align="center">
restaurants-hierarchy-list
</h1>

**Showing restaurents hierarchical list**

---

- [Installation](#installation)
- [Usage](#usage)

## Installation

1. Go to folder where you want to clone the repository, open terminal at that folder and run the following command:- `git clone https://github.com/paragdev441/restaurants-hierarchy-list.git`
2. A "**restaurants-hierarchy-list**" folder is created.
3. Done.

## Documentation

Following are components which are used for rendering restaurents hierarchical list:-

### 1. App

1.  Creating Drabble List of Restaurents & their sub childs by using restaurents data from an api's endpoint
2.  Responsible for showing and handling state of list's items.
3.  Used react-beautiful-dnd npm package (https://github.com/atlassian/react-beautiful-dnd) to implement drag and drop functionality.
4.  **State**:
    a). **restaurents**:- Array of Restaurents
5.  Ready to Use. Enjoy 👍

### 2. ListBlock

1.  Responsible for toggling on or off of hierarchical list's items at every level.
2.  Used TreeView API (https://material-ui.com/api/tree-item/) to show hierarchy list.
3.  **State**:
    a). **expanded**:- Array of items which are currently expanded.
    b) **selected**:- Array of items which are curently selected.
4.  **Props**:
    a). **restaurents**:- Array of Restaurents.
    b) **provided**:- Provided argument include information and references to code that the DragDropContext needs to work properly.

### 3. RestaurentList

1.  Showing list of restaurent names with each nested item contains list of menu items.
2.  Each restaurent (with its children) act a draggable element (Consumer).
3.  **Props**:
    a). **restaurents**:- Array of Restaurents.

### 4. MenuList

1.  Showing list of menu item's childrens with each nested child further contain it's own children and so on.
2.  **Props**:
    a). **menu**:- Array with single object containg menu details.

### 5. MenuChildrenList

1.  Showing list of menu's children names and children's children names.
2.  Recursively call the MenuChildrenList until all children's name are printed
3.  **Props**:
    a). **children**:- Array of menu's children which every element(object) further contains children key and so on.

### Enjoy 👍
