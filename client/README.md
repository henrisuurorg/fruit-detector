# **Phone App Client Implementation**

## **Testing**

Tests are located in the tests directory. There are separate subdirectories for tests for components, screens and utils.

To run all of the tests:

```
npm run test
```

## **Definitions**

**What is a component?**

In React Native, a component is a building block of the user interface that defines a piece of the app's UI. Components can be thought of as functions that take input (in the form of props) and return output (in the form of a UI rendered on the screen). Components are typically reusable and composable, which makes them a powerful tool for creating complex UIs with a high degree of abstraction and modularity.

The stylesheet (if there is one) should preferably not be included in the screen file itself, but should instead be located in a separate file that is located within the same directory as the screen. The naming convention is _\<ComponentName\>.styles.js_

A template can look like this:

```js
const TemplateComponent = ({ prop1, prop2 }) => {
  // Logic code goes here.

  return (
    <View>
      <Text> {prop1} </Text>
      <Text> {prop2} </Text>
    </View>
  )
}
export default TemplateComponent
```

**What is a screen?**

In React Native, a screen is a component that represents a single user interface view or page. A screen is typically composed of other React Native components, such as Text, Image, View, and so on, and may also include custom components that you create.
For it to work with the navigations menu, it must take two parameters called **_navigation_** and **_route_**.

The stylesheet (if there is one) should preferably not be included in the screen file itself, but should instead be located in a separate file that is located within the same directory as the screen. The naming convention is _\<ScreenName\>.styles.js_

A template can look like this:

```js
const TemplateScreen = ({ navigation, route }) => {
  // Logic code goes here.

  return (
    <View>
      <Text>This is a template!</Text>
    </View>
  )
}
export default TemplateScreen
```

The filename should look something like \<FileName\>.jsx

**What are utils?**

In the context of a React Native application, utils is a directory where developers can store utility functions or helper methods that can be used across the application. Utility functions are typically small, reusable pieces of code that perform a specific task, such as formatting data, handling errors, or manipulating strings.

Some examples of common utility functions that might be stored in a utils directory include:

- `formatDate()`: A function that takes a date object and returns a formatted string, such as "January 1, 2022".
- `parseJSON()`: A function that takes a JSON string and returns a JavaScript object.
- `isEmpty()`: A function that takes an object or array and returns true if it is empty, false otherwise.
- `truncateString()`: A function that takes a string and a maximum length and returns a truncated version of the string if it is longer than the specified length.
