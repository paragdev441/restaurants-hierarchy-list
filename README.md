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

Following are components which are used for rendering restaurents hierarchical list and hierarchy of components:-

### 1. App

1.  Creating Dragabble List of Restaurants & their sub children by using restaurants data from a given API
2.  Responsible for showing and handling the state of the list's items.
3.  Used react-beautiful-dnd npm package ([https://github.com/atlassian/react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd)) to implement drag and drop functionality.
4.  **State**:
    a). **restaurents**:- Array of Restaurents

### 2. ListBlock

1.  Responsible for toggling on or off of hierarchical list's items at every level.
2.  Used TreeView API ([https://material-ui.com/api/tree-item/](https://material-ui.com/api/tree-item/)) to show the hierarchy list.
3.  **State**:
    a). **expanded**:- Array of items that are currently expanded.
    b) **selected**:- Array of items that are currently selected.
4.  **Props**:
    a). **restaurents**:- Array of Restaurents.
    b) **provided**:- Provided argument includes information and references to code that the DragDropContext needs to work properly.

### 3. RestaurentList

1.  Showing list of restaurant names with each nested item contains the list of menu items.
2.  Each restaurant (with its children) acts as a draggable element (Consumer).
3.  **Props**:
    a). **restaurents**:- Array of Restaurents.

### 4. MenuList

1. Showing list of menu item's children with each nested child further contains its children and so on.
2. **Props**:
   a). **menu**:- Array with a single object containing menu details.

### 5. MenuChildrenList

1.  Showing list of menu's children names and children's children names.
2.  Recursively call the MenuChildrenList until all children's names are printed.
3.  **Props**:
    a). **children**:- Array of menu's children which every element(object) further contains children key and so on.

### Enjoy 👍
