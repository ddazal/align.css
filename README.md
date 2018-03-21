# Align.css
This stylesheet is made for align items within a container accordingly with the [flexbox spec](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout). It's not meant for building complex layouts.

## Container classes

| Class name | Description               |
|------------|---------------------------|
| line       | Arrange items in a row (left to right)    |
| column     | Arrange items in a column (top to bottom) |

By default, the container is allowed to wrap its children if their size exceed the maximum size of the container

### Container modifiers

|    Class name   |                                                     Description                                                    |
|---------------|------------------------------------------------------------------------------------------------------------------|
| h-centered      | Items are centered horizontally                                                                                    |
| v-centered      | Items are centered vertically                                                                                      |
| centered        | Items are centered both horizontally and vertically                                                                |
| justify-start   | Items are placed at the beginning of the container (default)                                                       |
| justify-end     | Items are placed at the end of the container                                                                       |
| justify-between | Items are evenly distributed maintaining the first item at the start of the container and the last item at the end |
| justify-around  | Items are evenly distributed in the container with equal space around them, although they visually aren't          |
| justify-evenly  | Items are distributed so that the spacing between any two items is equal                                           |
| align-start     | Align items at the start of the perpendicular direction of the container                                           |
| align-end       | Align items at the end of the perpendicular direction of the container                                             |
| reverse         | Place items from right to left (line) or bottom to top (column)                                                    |
| .nowrap         | Disable the ability of container to wrap its elements                                                              |
| .wrap-reverse   | Wrap the items in the opposite direction                                                                           |

## Item classes

|  Class name |                                  Description                                  |
|-----------|-----------------------------------------------------------------------------|
| item-start  | Align this item at the start of the perpendicular direction of the container  |
| item-center | Align this item at the center of the perpendicular direction of the container |
| item-end    | Align this item at the end of the perpendicular direction of the container    |
| item-fill   | Make this item to take the remaining space                                    |

The `index.html` file contains an example for each of the classes listed above.