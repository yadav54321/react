## React playground

### Test cases:

1. Stop title from rerendering on click of any button
2. Toggle visibility of buttons by clicking on title
3. Stop all buttons from rerendering each time a button is clicked (Only selected button and the previously selected button should rerender)

### Helpful tools:

- Use console to debug rerenders of components (Already logged)
- You may google if required
- ./hooks.js contains a custom "useTraceProps" hook which will help you by telling you exactly which prop is causing rerenders (Simply import and pass props as argument)
