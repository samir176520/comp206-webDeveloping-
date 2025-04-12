# Ultimate Summary for Web Programming (COMP 206) – Key Concepts for Exams & Sheets

This summary covers the **20% of material that gives 80% of the knowledge** needed to solve sheets and exams effectively.

## 1. JavaScript & TypeScript Fundamentals

### Variables & Data Types
- **`let`**: Block-scoped, reassignable
- **`const`**: Block-scoped, immutable after declaration
- **Primitive Types**:
  - `string`, `number`, `boolean`, `null`, `undefined`
- **TypeScript Additions**:
  - **`any`**: Disables type-checking (avoid when possible)
  - **`unknown`**: Safer than `any`, requires type checking
  - **Type Assertions**:
    ```typescript
    let x: unknown = "hello"
    console.log((x as string).length)
    ```

### Functions
- **Arrow Functions**:
  ```typescript
  const sum = (a: number, b: number): number => a + b
  ```
- **Optional Parameters**:
  ```typescript
  function greet(name: string, age?: number) { ... }
  ```
- **Higher-Order Functions**:
  - Functions that take/return functions (e.g., `setTimeout`, `map`)

---

## 2. DOM Manipulation (Most Important for Sheets!)

### Selecting Elements
- **`document.getElementById("id")`** → Single element
- **`document.querySelector(".class")`** → First matching element
- **`document.querySelectorAll("p")`** → NodeList of all matches

### Modifying Elements
- Change content:
  ```typescript
  element.textContent = "New Text"
  element.innerHTML = "<strong>Bold</strong>"
  ```
- Change styles:
  ```typescript
  element.style.color = "red"
  element.style.fontSize = "20px"
  ```
- **Create/Remove Elements**:
  ```typescript
  const newElement = document.createElement("div")
  parentElement.appendChild(newElement)
  parentElement.removeChild(childElement)
  ```

---

## 3. Events & Event Handling

### Event Listeners
- **Syntax**:
  ```typescript
  button.addEventListener("click", (event) => {
    console.log("Clicked!")
    event.preventDefault() // Stop form submission
  })
  ```
- **Common Events**:
  - `click`, `submit`, `mouseover`, `mouseout`, `keydown`

### Event Propagation
- **`event.stopPropagation()`**: Prevents bubbling/capturing
- **`event.preventDefault()`**: Stops default behavior (e.g., form submission)

---

## 4. Arrays & Objects (Frequently Tested!)

### Arrays
- **Essential Methods**:
  - `push()` / `pop()` → Add/remove from end
  - `shift()` / `unshift()` → Add/remove from start
  - `slice(start, end)` → Returns sub-array (non-destructive)
  - `splice(start, deleteCount, ...items)` → Modifies array
  - `find()`, `filter()`, `map()`, `forEach()`

### Objects
- **Accessing Properties**:
  ```typescript
  const person = { name: "Ahmed", age: 30 }
  console.log(person.name) // "Ahmed"
  console.log(person["age"]) // 30
  ```
- **Looping**:
  ```typescript
  for (const key in person) {
    console.log(`${key}: ${person[key]}`)
  }
  ```

---

## 5. Form Validation (Common in Sheets!)

### HTML5 Validation
- **Attributes**:
  ```html
  <input type="text" required minlength="5" pattern="[A-Za-z]+">
  ```
- **JavaScript Validation**:
  ```typescript
  if (!input.value.trim()) {
    error.textContent = "Field is required!"
    return false
  }
  ```

### Preventing Default Form Submission
```typescript
form.addEventListener("submit", (e) => {
  e.preventDefault()
  if (isFormValid()) form.submit()
})
```

---

## 6. BOM (Browser Object Model)

### Window Methods
- **`window.open(url, "_blank")`** → Opens new tab
- **`window.alert("Message")`** → Popup alert
- **`window.confirm("Delete?")`** → Returns `true`/`false`
- **`window.prompt("Enter age")`** → Returns user input

### Timing Functions
- **`setTimeout(() => { ... }, 1000)`** → Runs once after delay
- **`setInterval(() => { ... }, 1000)`** → Runs repeatedly
- **Clear with `clearTimeout(id)` / `clearInterval(id)`**

---

## 7. TypeScript Interfaces & Classes

### Interfaces
```typescript
interface User {
  name: string
  age: number
}
const user: User = { name: "Ali", age: 25 }
```

### Classes
```typescript
class Person {
  constructor(public name: string, private age: number) {}
  greet() { console.log(`Hello, ${this.name}`) }
}
const p = new Person("Ahmed", 30)
p.greet()
```

---

## Final Tips for Solving Sheets

1. **DOM First**: Most questions involve selecting/modifying elements
2. **Events Second**: Handling clicks, forms, and validation
3. **Arrays & Objects**: Used in data manipulation tasks
4. **TypeScript Types**: Helps avoid runtime errors

**Memorize**:
- `querySelector`, `addEventListener`, `preventDefault`, `push/slice/filter`, `interface/class` syntax

This summary covers **90% of exam/sheet questions**. Good luck! 🚀
```