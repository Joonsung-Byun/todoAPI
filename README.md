
## Endpoints

### 1. GET Todos
**Description**: Retrieves a list of all todos.

- **URL**: `/`
- **Method**: `GET`
- **Response**:
    ```json
    [
        { "id": 1, "title": "Presentation", "completed": false },
        { "id": 2, "title": "Washing Dishes", "completed": false },
        ...
    ]
    ```

### 2. POST Todo
**Description**: Creates a new todo.

- **URL**: `/`
- **Method**: `POST`
- **Body Parameters**:
    - `title` (string): The title of the todo.

- **Example Request**:
    ```json
    {
        "title": "New Todo"
    }
    ```

- **Response**:
    ```json
    [
        { "id": 1, "title": "Presentation", "completed": false },
        { "id": 2, "title": "Washing Dishes", "completed": false },
        { "id": 3, "title": "New Todo", "completed": false }
    ]
    ```

### 3. PUT Todo (Update)
**Description**: Toggles the `completed` status of a todo by ID.

- **URL**: `/`
- **Method**: `PUT`
- **Body Parameters**:
    - `id` (integer): The ID of the todo to update.

- **Example Request**:
    ```json
    {
        "id": 1
    }
    ```

- **Response**:
    ```json
    [
        { "id": 1, "title": "Presentation", "completed": true },
        { "id": 2, "title": "Washing Dishes", "completed": false }
    ]
    ```

### 4. DELETE Todo
**Description**: Deletes a todo by ID.

- **URL**: `/`
- **Method**: `DELETE`
- **Body Parameters**:
    - `id` (integer): The ID of the todo to delete.

- **Example Request**:
    ```json
    {
        "id": 1
    }
    ```

- **Response**:
    ```json
    [
        { "id": 2, "title": "Washing Dishes", "completed": false }
    ]
    ```

### 5. GET All Todos for a Category
**Description**: Retrieves all todos that belong to a specified category.

- **URL**: `/getAllCategory`
- **Method**: `GET`
- **Body Parameters**:
    - `category` (string): The name of the category.

- **Example Request**:
    ```json
    {
        "category": "work"
    }
    ```

- **Response**:
    ```json
    [
        { "id": 1, "title": "Presentation", "completed": false },
        { "id": 4, "title": "Meeting", "completed": false }
    ]
    ```

### 6. GET Categories
**Description**: Retrieves all todos in the same category as the given todo ID.

- **URL**: `/category`
- **Method**: `GET`
- **Body Parameters**:
    - `id` (integer): The ID of the todo.

- **Example Request**:
    ```json
    {
        "id": 1
    }
    ```

- **Response**:
    ```json
    [
        { "c_id": 1, "t_id": 1, "name": "work" },
        { "c_id": 4, "t_id": 4, "name": "work" }
    ]
    ```

### 7. POST Categories
**Description**: Adds a new category to the specified todo.

- **URL**: `/category`
- **Method**: `POST`
- **Body Parameters**:
    - `id` (integer): The ID of the todo.
    - `category` (string): The new category to add.

- **Example Request**:
    ```json
    {
        "id": 2,
        "category": "home"
    }
    ```

- **Response**:
    ```json
    [
        { "c_id": 1, "t_id": 1, "name": "work" },
        { "c_id": 2, "t_id": 2, "name": "home, home" }
    ]
    ```

### 8. PUT Categories (Update)
**Description**: Updates the category of a todo by its ID.

- **URL**: `/category`
- **Method**: `PUT`
- **Body Parameters**:
    - `id` (integer): The ID of the todo.
    - `category` (string): The new category name.

- **Example Request**:
    ```json
    {
        "id": 2,
        "category": "home"
    }
    ```

- **Response**:
    ```json
    [
        { "c_id": 1, "t_id": 1, "name": "work" },
        { "c_id": 2, "t_id": 2, "name": "home" }
    ]
    ```

### 9. DELETE Categories
**Description**: Deletes a category associated with a todo by its ID.

- **URL**: `/category`
- **Method**: `DELETE`
- **Body Parameters**:
    - `id` (integer): The ID of the todo whose category will be deleted.

- **Example Request**:
    ```json
    {
        "id": 2
    }
    ```

- **Response**:
    ```json
    [
        { "c_id": 1, "t_id": 1, "name": "work" },
        { "c_id": 3, "t_id": 3, "name": "school" }
    ]
    ```

## Notes
- The API uses `application/json` format for request bodies.
- Use the `x-www-form-urlencoded` format when testing in Postman.
