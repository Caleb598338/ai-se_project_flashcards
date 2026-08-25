const decks = [
  {
    id: "html-basics",
    name: "HTML Basics",
    description: "Core HTML tags and concepts",
    cards: [
      {
        id: 1,
        question: "What does HTML stand for?",
        answer: "HyperText Markup Language",
      },
      {
        id: 2,
        question: "What tag creates the largest heading on a page?",
        answer: "<h1>",
      },
      {
        id: 3,
        question: "What tag is used to create a paragraph?",
        answer: "<p>",
      },
      {
        id: 4,
        question: "What tag creates a hyperlink?",
        answer: "<a>",
      },
      {
        id: 5,
        question: "What attribute is required on every <img> tag?",
        answer: "alt â€” it provides alternative text describing the image",
      },
      {
        id: 6,
        question: "What tag creates an unordered (bulleted) list?",
        answer: "<ul>",
      },
      {
        id: 7,
        question: "What tag creates an ordered (numbered) list?",
        answer: "<ol>",
      },
      {
        id: 8,
        question: "What tag contains a single item in a list?",
        answer: "<li>",
      },
      {
        id: 9,
        question: "What attribute makes a link open in a new tab?",
        answer: 'target="_blank"',
      },
      {
        id: 10,
        question: "What is the root element of every HTML page?",
        answer: "<html>",
      },
    ],
    color: "#64d583",
  },
  {
    id: "html-semantic",
    name: "Semantic HTML",
    description: "Meaningful HTML elements for structure and accessibility",
    cards: [
      {
        id: 11,
        question: "What semantic tag represents the top section of a page?",
        answer: "<header>",
      },
      {
        id: 12,
        question: "What semantic tag wraps the main navigation links?",
        answer: "<nav>",
      },
      {
        id: 13,
        question:
          "What semantic tag represents the primary content of the page?",
        answer: "<main>",
      },
      {
        id: 14,
        question:
          "What semantic tag represents a standalone piece of content, like a blog post?",
        answer: "<article>",
      },
      {
        id: 15,
        question:
          "What semantic tag represents a thematic grouping of content?",
        answer: "<section>",
      },
      {
        id: 16,
        question:
          "What semantic tag represents content tangentially related to the main content (e.g., a sidebar)?",
        answer: "<aside>",
      },
      {
        id: 17,
        question:
          "What semantic tag represents the bottom of a page or section?",
        answer: "<footer>",
      },
      {
        id: 18,
        question:
          "What is a key benefit of using semantic HTML over generic <div> tags?",
        answer:
          "It improves accessibility, SEO, and makes the code easier to read",
      },
      {
        id: 19,
        question:
          "What non-semantic tag is commonly used as a generic container?",
        answer: "<div>",
      },
      {
        id: 20,
        question:
          "What non-semantic inline tag is used to style or group inline content?",
        answer: "<span>",
      },
    ],
    color: "#91a8f9",
  },
  {
    id: "css-fundamentals",
    name: "CSS Fundamentals",
    description: "Selectors, properties, and the cascade",
    cards: [
      {
        id: 21,
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheets",
      },
      {
        id: 22,
        question: "What are the three parts of a CSS rule?",
        answer: "Selector, property, and value",
      },
      {
        id: 23,
        question: "How do you select an element by its class in CSS?",
        answer: "Use a dot followed by the class name â€” e.g., .classname",
      },
      {
        id: 24,
        question: "How do you select an element by its ID in CSS?",
        answer: "Use a hash followed by the ID â€” e.g., #idname",
      },
      {
        id: 25,
        question: "What CSS property changes text color?",
        answer: "color",
      },
      {
        id: 26,
        question: "What CSS property sets the background color?",
        answer: "background-color",
      },
      {
        id: 27,
        question: "What CSS property controls the size of text?",
        answer: "font-size",
      },
      {
        id: 28,
        question: "What does display: none do to an element?",
        answer:
          "Hides the element completely and removes it from the document flow",
      },
      {
        id: 29,
        question:
          "In the cascade, which selector takes priority: a class or an element selector?",
        answer: "A class selector â€” it has higher specificity",
      },
      {
        id: 30,
        question: "What does the * selector match?",
        answer: "Every element on the page (the universal selector)",
      },
    ],
    color: "#ee955e",
  },
  {
    id: "css-box-model",
    name: "CSS Box Model",
    description: "Content, padding, border, and margin",
    cards: [
      {
        id: 31,
        question:
          "What are the four parts of the CSS box model, from inside out?",
        answer: "Content, padding, border, margin",
      },
      {
        id: 32,
        question:
          "What CSS property controls the space between the content and the border?",
        answer: "padding",
      },
      {
        id: 33,
        question:
          "What CSS property controls the space outside the border, between elements?",
        answer: "margin",
      },
      {
        id: 34,
        question:
          "What value of box-sizing includes padding and border in an element's total width and height?",
        answer: "border-box",
      },
      {
        id: 35,
        question: "What is the default value of box-sizing?",
        answer: "content-box",
      },
      {
        id: 36,
        question:
          "What shorthand sets top, right, bottom, and left padding in one declaration?",
        answer:
          "padding: top right bottom left â€” e.g., padding: 10px 20px 10px 20px",
      },
      {
        id: 37,
        question: "What does margin: auto do when applied to a block element?",
        answer: "Centers the element horizontally within its container",
      },
      {
        id: 38,
        question: "What does overflow: hidden do?",
        answer: "Clips any content that extends beyond the element's box",
      },
      {
        id: 39,
        question:
          "What shorthand declaration adds a 1px solid black border on all sides?",
        answer: "border: 1px solid black",
      },
      {
        id: 40,
        question: "What CSS property sets the maximum width of an element?",
        answer: "max-width",
      },
    ],
    color: "#ee92d7",
  },
  {
    id: "css-flexbox",
    name: "CSS Flexbox",
    description: "Flexible layout with Flexbox",
    cards: [
      {
        id: 41,
        question: "What declaration enables Flexbox on a container?",
        answer: "display: flex",
      },
      {
        id: 42,
        question:
          "What property controls whether flex items are arranged in a row or column?",
        answer: "flex-direction",
      },
      {
        id: 43,
        question: "What property aligns flex items along the main axis?",
        answer: "justify-content",
      },
      {
        id: 44,
        question: "What property aligns flex items along the cross axis?",
        answer: "align-items",
      },
      {
        id: 45,
        question: "What is the default value of flex-direction?",
        answer: "row",
      },
      {
        id: 46,
        question:
          "What value of justify-content places equal space between items but none on the edges?",
        answer: "space-between",
      },
      {
        id: 47,
        question:
          "What value of justify-content and align-items centers items?",
        answer: "center",
      },
      {
        id: 48,
        question:
          "What property allows flex items to wrap onto multiple lines?",
        answer: "flex-wrap",
      },
      {
        id: 49,
        question:
          "What property controls how much a flex item grows relative to its siblings?",
        answer: "flex-grow",
      },
      {
        id: 50,
        question: "What CSS property sets the gap between flex items?",
        answer: "gap",
      },
    ],
    color: "#aa8ef0",
  },
  {
    id: "js-basics",
    name: "JavaScript Basics",
    description: "Variables, types, and operators",
    cards: [
      {
        id: 51,
        question:
          "What keyword declares a variable that can be reassigned later?",
        answer: "let",
      },
      {
        id: 52,
        question: "What keyword declares a variable that cannot be reassigned?",
        answer: "const",
      },
      {
        id: 53,
        question: "Name three primitive data types in JavaScript.",
        answer:
          "string, number, and boolean (also: null, undefined, symbol, bigint)",
      },
      {
        id: 54,
        question: "What does typeof return when called on a string?",
        answer: '"string"',
      },
      {
        id: 55,
        question: "What is the difference between == and === in JavaScript?",
        answer:
          "== checks value only (loose equality); === checks both value and type (strict equality)",
      },
      {
        id: 56,
        question: 'What is the result of 5 + "3" in JavaScript?',
        answer: '"53" â€” the number is coerced to a string and concatenated',
      },
      {
        id: 57,
        question: "What does console.log() do?",
        answer: "Prints a value to the browser developer console",
      },
      {
        id: 58,
        question: "How do you write a single-line comment in JavaScript?",
        answer: "// followed by the comment text",
      },
      {
        id: 59,
        question: "What does the ! operator do?",
        answer: "Negates a boolean value (logical NOT): !true === false",
      },
      {
        id: 60,
        question: "What values are falsy in JavaScript?",
        answer: "false, 0, '' (empty string), null, undefined, and NaN",
      },
    ],
    color: "#f5d770",
  },
  {
    id: "js-functions",
    name: "JavaScript Functions",
    description: "Declaring, calling, and passing functions",
    cards: [
      {
        id: 61,
        question: "What keyword declares a traditional named function?",
        answer: "function",
      },
      {
        id: 62,
        question: "What is a parameter?",
        answer:
          "A named variable in the function definition that receives a value when the function is called",
      },
      {
        id: 63,
        question: "What is an argument?",
        answer: "The actual value passed to a function when it is called",
      },
      {
        id: 64,
        question: "What does the return keyword do?",
        answer: "Exits the function and sends a value back to the caller",
      },
      {
        id: 65,
        question: "What is an arrow function?",
        answer:
          "A concise function syntax using => â€” e.g., const add = (a, b) => a + b",
      },
      {
        id: 66,
        question: "What is a callback function?",
        answer:
          "A function passed as an argument to another function, to be executed later",
      },
      {
        id: 67,
        question:
          "What is the difference between a function declaration and a function expression?",
        answer:
          "Declarations are hoisted to the top of their scope; expressions are not",
      },
      {
        id: 68,
        question: "What happens if a function has no return statement?",
        answer: "It returns undefined by default",
      },
      {
        id: 69,
        question:
          "What does writing a function name without parentheses (e.g., myFn) do?",
        answer: "References the function as a value without calling it",
      },
      {
        id: 70,
        question: "What is a higher-order function?",
        answer:
          "A function that accepts another function as an argument or returns a function",
      },
    ],
    color: "#64d583",
  },
  {
    id: "js-arrays",
    name: "JavaScript Arrays",
    description: "Working with lists of data",
    cards: [
      {
        id: 71,
        question: "How do you access the first element of an array called arr?",
        answer: "arr[0] â€” arrays are zero-indexed",
      },
      {
        id: 72,
        question: "What property returns the number of elements in an array?",
        answer: ".length",
      },
      {
        id: 73,
        question:
          "What method adds one or more elements to the end of an array?",
        answer: ".push()",
      },
      {
        id: 74,
        question:
          "What method removes and returns the last element of an array?",
        answer: ".pop()",
      },
      {
        id: 75,
        question:
          "What method creates a new array by transforming each element with a callback?",
        answer: ".map()",
      },
      {
        id: 76,
        question:
          "What method returns a new array containing only elements that pass a test?",
        answer: ".filter()",
      },
      {
        id: 77,
        question:
          "What method calls a function once for each element without returning a new array?",
        answer: ".forEach()",
      },
      {
        id: 78,
        question:
          "What method returns the first element that satisfies a condition?",
        answer: ".find()",
      },
      {
        id: 79,
        question:
          "What method checks whether at least one element passes a test?",
        answer: ".some()",
      },
      {
        id: 80,
        question: "What method checks whether every element passes a test?",
        answer: ".every()",
      },
    ],
    color: "#91a8f9",
  },
  {
    id: "js-dom",
    name: "JavaScript DOM",
    description: "Selecting and manipulating elements on the page",
    cards: [
      {
        id: 81,
        question: "What does DOM stand for?",
        answer: "Document Object Model",
      },
      {
        id: 82,
        question:
          "What method selects the first element that matches a CSS selector?",
        answer: "document.querySelector()",
      },
      {
        id: 83,
        question: "What method selects all elements that match a CSS selector?",
        answer: "document.querySelectorAll()",
      },
      {
        id: 84,
        question:
          "What property gets or sets the visible text content of an element?",
        answer: ".textContent",
      },
      {
        id: 85,
        question:
          "What property gets or sets the HTML markup inside an element?",
        answer: ".innerHTML",
      },
      {
        id: 86,
        question: "What method attaches an event handler to an element?",
        answer: ".addEventListener()",
      },
      {
        id: 87,
        question: "What method creates a new HTML element in JavaScript?",
        answer: "document.createElement()",
      },
      {
        id: 88,
        question: "What method appends a child node to a parent element?",
        answer: ".append() or .appendChild()",
      },
      {
        id: 89,
        question:
          "What property provides access to the list of classes on an element?",
        answer: ".classList",
      },
      {
        id: 90,
        question: "What method adds a class to an element's class list?",
        answer: ".classList.add()",
      },
    ],
    color: "#ee955e",
  },
  {
    id: "web-tech-terms",
    name: "Web Tech Terms",
    description: "Foundational vocabulary for how the web works",
    cards: [
      {
        id: 91,
        question: "What does URL stand for?",
        answer: "Uniform Resource Locator",
      },
      {
        id: 92,
        question: "What does HTTP stand for?",
        answer: "HyperText Transfer Protocol",
      },
      {
        id: 93,
        question: "What does HTTPS add over HTTP?",
        answer: "Encryption via SSL/TLS, making communication secure",
      },
      {
        id: 94,
        question: "What is a web browser?",
        answer:
          "A program that retrieves, renders, and displays web pages (e.g., Chrome, Firefox)",
      },
      {
        id: 95,
        question: "What is a web server?",
        answer: "A computer that stores files and responds to client requests",
      },
      {
        id: 96,
        question: "What is the difference between a client and a server?",
        answer:
          "A client requests resources; a server responds with those resources",
      },
      {
        id: 97,
        question: "What does DNS stand for, and what does it do?",
        answer:
          "Domain Name System â€” it translates domain names (e.g., google.com) into IP addresses",
      },
      {
        id: 98,
        question: "What is an IP address?",
        answer:
          "A unique numerical label identifying each device on a network (e.g., 192.168.1.1)",
      },
      {
        id: 99,
        question: "What does 'rendering' mean in the context of a browser?",
        answer:
          "The process of turning HTML, CSS, and JS into a visual, interactive web page",
      },
      {
        id: 100,
        question: "What is localhost?",
        answer:
          "The loopback address (127.0.0.1) â€” it refers to your own computer",
      },
    ],
    color: "#ee92d7",
  },
  {
    id: "dev-tools",
    name: "Developer Tools",
    description: "Using the browser DevTools to inspect and debug",
    cards: [
      {
        id: 101,
        question: "How do you open browser Developer Tools in most browsers?",
        answer:
          "Press F12 (or Cmd+Option+I on Mac), or right-click the page and choose Inspect",
      },
      {
        id: 102,
        question: "What DevTools tab shows the page's HTML structure?",
        answer: "Elements (Chrome) or Inspector (Firefox)",
      },
      {
        id: 103,
        question:
          "What DevTools tab lets you run JavaScript expressions directly?",
        answer: "Console",
      },
      {
        id: 104,
        question: "What DevTools tab shows CSS rules for a selected element?",
        answer: "The Styles panel inside the Elements (or Inspector) tab",
      },
      {
        id: 105,
        question: "What DevTools tab shows network requests made by the page?",
        answer: "Network",
      },
      {
        id: 106,
        question:
          "What does console.error() do differently from console.log()?",
        answer: "It prints the message in red and marks it as an error",
      },
      {
        id: 107,
        question: "What is a breakpoint in DevTools?",
        answer:
          "A marker that pauses code execution at a specific line so you can inspect state",
      },
      {
        id: 108,
        question: "What does 'responsive design mode' in DevTools let you do?",
        answer:
          "Preview and test how a page looks at different screen sizes and device types",
      },
      {
        id: 109,
        question:
          "In the Elements tab, how can you temporarily change a CSS value to test it?",
        answer:
          "Click the value in the Styles panel and type a new one â€” changes are live but not saved",
      },
      {
        id: 110,
        question:
          "What does a red message in the Console tab usually indicate?",
        answer: "A JavaScript runtime error has occurred",
      },
    ],
    color: "#aa8ef0",
  },
  {
    id: "git-basics",
    name: "Git Basics",
    description: "Version control with Git",
    cards: [
      {
        id: 111,
        question: "What command initializes a new Git repository in a folder?",
        answer: "git init",
      },
      {
        id: 112,
        question: "What command stages a specific file for the next commit?",
        answer: "git add <filename>",
      },
      {
        id: 113,
        question: "What command creates a commit with a descriptive message?",
        answer: 'git commit -m "your message here"',
      },
      {
        id: 114,
        question:
          "What command shows the current state of your working directory?",
        answer: "git status",
      },
      {
        id: 115,
        question: "What command shows the history of commits?",
        answer: "git log",
      },
      {
        id: 116,
        question: "What is a branch in Git?",
        answer:
          "An independent line of development that lets you work without affecting the main codebase",
      },
      {
        id: 117,
        question: "What command creates and switches to a new branch?",
        answer: "git checkout -b branch-name",
      },
      {
        id: 118,
        question: "What does git pull do?",
        answer:
          "Fetches changes from a remote repository and merges them into your current branch",
      },
      {
        id: 119,
        question: "What does git push do?",
        answer: "Uploads your local commits to the remote repository",
      },
      {
        id: 120,
        question: "What is a merge conflict?",
        answer:
          "When two branches have made different changes to the same part of a file and Git cannot auto-merge them",
      },
    ],
    color: "#f5d770",
  },
];

/**
 * Retrieves a deck object by its ID from the decks array.
 *
 * @param {string} deckId - The unique identifier of the deck to retrieve
 * @returns {object|undefined} The deck object if found, undefined otherwise
 */
function getDeckByID(deckId) {
  return decks.find((deck) => deck.id === deckId);
}

export { decks, getDeckByID };
