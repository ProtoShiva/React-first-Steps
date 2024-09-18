const heading = React.createElement(
  "h1",
  { className: "my-heading" },
  "Hello World from React"
)
console.log(heading) // a react element gets returned which is basically a JS object
const root = ReactDOM.createRoot(document.getElementById("root"))
console.log(root)
root.render(heading) // this render makes the react element into a h1 element
