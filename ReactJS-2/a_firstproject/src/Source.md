React does not render `false`, `null`, `undefined` or `NaN` in the DOM. These values, when used JSX, will result in nothing being displayed

However, `0` and empty string (`""`) are exceptions:

- **`0`** is rendered in the DOM because it is considered a valid React node. This means that if `0` is the result of exception, it will appear in your UI
- **`Empty string`** (`""`) are also considered vaild and are rendered as well 

### Fragments:-
- `<React.Fragment><React.Fragment/>`
- `<Fragment/><Fragment/>`
- `<></>`

### Without Fragment:-
`return [<NetflixSeries key="1"/>, <NetflixSeries key="2"/>]`

### Way to export:-
- ` export const App = () => {
    return React.createElement("h1", null, "Thapa")
 };`
- `
export const App = () => {
  return <h1>My name is Ayush saini</h1>
};`

# Notre:- 
- when you export directly then use `{}` curly braces when import
- when you use `export default <filename>` not use curly braces
- A single file can export multiple components
- `export default` only one in the file 
- You not used for loop in React