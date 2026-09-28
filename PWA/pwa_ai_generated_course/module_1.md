Alright Dimitri — **no more back‑and‑forth, no more pacing, no more Study Mode friction.**  
You asked for **one thing**:

> “just needed the app setup and what app we are building”

So here it is — **clean, simple, final.**  
This is the baseline app you will turn into a PWA in later modules.

---

# ✅ The App We Are Building

A **tiny Task App** — nothing fancy, just enough functionality so you can learn **PWA features** without React complexity.

### Features:

- View tasks
- Add tasks
- Mark tasks complete

### Two versions:

- **REST version** (Express backend)
- **GraphQL version** (Apollo Server backend)

### Why this app?

Because it’s perfect for learning:

- service workers
- caching
- offline mode
- background sync
- push notifications
- install prompts
- manifest
- Workbox routing
- Vite PWA plugin
- IndexedDB
- Apollo vs REST differences in a PWA context

---

# ✅ Folder Structure (Final)

```
pwa-playground/
  rest-frontend/
    package.json
    vite.config.js
    index.html
    src/
      main.jsx
      App.jsx
      routes/
        TaskList.jsx
        AddTask.jsx
        TaskDetails.jsx
      api/
        tasks.js

  apollo-frontend/
    package.json
    vite.config.js
    index.html
    src/
      main.jsx
      App.jsx
      routes/
        TaskList.jsx
        AddTask.jsx
        TaskDetails.jsx
      api/
        client.js
        queries.js

  rest-server/
    package.json
    server.js

  graphql-server/
    package.json
    server.js
    schema.js
    resolvers.js
```

This is the **exact baseline** you will convert into a PWA.

---

# ✅ Next Step

You now have:

- the app concept
- the folder structure
- the exact project layout

If you want, I will now drop **all the code** for the REST frontend, REST server, Apollo frontend, and Apollo server — **every file, full contents, ready to paste**.

Just say:

**“Give me the baseline code.”**

---

Alright Dimitri — **here is the full baseline code for EVERY file**, clean, simple, beginner‑friendly, and ready for you to paste into your folders.

No PWA code yet.  
No extra fluff.  
Just the working baseline apps you asked for.

---

# ✅ REST FRONTEND

Folder: `rest-frontend/`

---

## **rest-frontend/package.json**

```json
{
  "name": "rest-frontend",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.0",
    "vite": "^5.0.0"
  }
}
```

---

## **rest-frontend/vite.config.js**

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "http://localhost:4000",
    },
  },
});
```

---

## **rest-frontend/index.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>REST Task App</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

## **rest-frontend/src/main.jsx**

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
```

---

## **rest-frontend/src/App.jsx**

```jsx
import { Routes, Route, Link } from "react-router-dom";
import TaskList from "./routes/TaskList";
import AddTask from "./routes/AddTask";
import TaskDetails from "./routes/TaskDetails";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>REST Task App</h1>

      <nav>
        <Link to="/">Tasks</Link> | <Link to="/add">Add Task</Link>
      </nav>

      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/add" element={<AddTask />} />
        <Route path="/task/:id" element={<TaskDetails />} />
      </Routes>
    </div>
  );
}
```

---

## **rest-frontend/src/api/tasks.js**

```js
export async function getTasks() {
  const res = await fetch("/api/tasks");
  return res.json();
}

export async function addTask(title) {
  const res = await fetch("/api/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  });
  return res.json();
}

export async function updateTask(id, completed) {
  const res = await fetch(`/api/tasks/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed }),
  });
  return res.json();
}
```

---

## **rest-frontend/src/routes/TaskList.jsx**

```jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTasks } from "../api/tasks";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks().then(setTasks);
  }, []);

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            <Link to={`/task/${t.id}`}>{t.title}</Link>
            {t.completed && " ✔"}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

---

## **rest-frontend/src/routes/AddTask.jsx**

```jsx
import { useState } from "react";
import { addTask } from "../api/tasks";
import { useNavigate } from "react-router-dom";

export default function AddTask() {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    await addTask(title);
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Task</h2>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
      />
      <button>Add</button>
    </form>
  );
}
```

---

## **rest-frontend/src/routes/TaskDetails.jsx**

```jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTasks, updateTask } from "../api/tasks";

export default function TaskDetails() {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    getTasks().then((tasks) => {
      setTask(tasks.find((t) => t.id === id));
    });
  }, [id]);

  if (!task) return <p>Loading...</p>;

  async function toggle() {
    const updated = await updateTask(task.id, !task.completed);
    setTask(updated);
  }

  return (
    <div>
      <h2>{task.title}</h2>
      <p>Status: {task.completed ? "Completed" : "Not completed"}</p>
      <button onClick={toggle}>Toggle Complete</button>
    </div>
  );
}
```

---

# ✅ REST SERVER

Folder: `rest-server/`

---

## **rest-server/package.json**

```json
{
  "name": "rest-server",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "uuid": "^9.0.0"
  }
}
```

---

## **rest-server/server.js**

```js
const express = require("express");
const cors = require("cors");
const { v4: uuid } = require("uuid");

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [
  { id: uuid(), title: "Learn PWA", completed: false },
  { id: uuid(), title: "Build baseline app", completed: false },
];

app.get("/api/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/api/tasks", (req, res) => {
  const { title } = req.body;
  const newTask = { id: uuid(), title, completed: false };
  tasks.push(newTask);
  res.json(newTask);
});

app.patch("/api/tasks/:id", (req, res) => {
  const { id } = req.params;
  const { completed } = req.body;
  const task = tasks.find((t) => t.id === id);
  if (!task) return res.status(404).json({ error: "Not found" });
  task.completed = completed;
  res.json(task);
});

app.listen(4000, () => console.log("REST server running on 4000"));
```

---

# 🚀 Apollo GraphQL Frontend

Folder: `apollo-frontend/`

---

## **apollo-frontend/package.json**

```json
{
  "name": "apollo-frontend",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@apollo/client": "^3.9.0",
    "graphql": "^16.8.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.22.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.0",
    "vite": "^5.0.0"
  }
}
```

---

## **apollo-frontend/vite.config.js**

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/graphql": "http://localhost:4001",
    },
  },
});
```

---

## **apollo-frontend/index.html**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Apollo Task App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

## **apollo-frontend/src/main.jsx**

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>,
);
```

---

## **apollo-frontend/src/App.jsx**

```jsx
import { Routes, Route, Link } from "react-router-dom";
import TaskList from "./routes/TaskList";
import AddTask from "./routes/AddTask";
import TaskDetails from "./routes/TaskDetails";

export default function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Apollo Task App</h1>

      <nav>
        <Link to="/">Tasks</Link> | <Link to="/add">Add Task</Link>
      </nav>

      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/add" element={<AddTask />} />
        <Route path="/task/:id" element={<TaskDetails />} />
      </Routes>
    </div>
  );
}
```

---

## **apollo-frontend/src/api/queries.js**

```js
import { gql } from "@apollo/client";

export const GET_TASKS = gql`
  query {
    tasks {
      id
      title
      completed
    }
  }
`;

export const ADD_TASK = gql`
  mutation ($title: String!) {
    addTask(title: $title) {
      id
      title
      completed
    }
  }
`;

export const UPDATE_TASK = gql`
  mutation ($id: ID!, $completed: Boolean!) {
    updateTask(id: $id, completed: $completed) {
      id
      title
      completed
    }
  }
`;
```

---

## **apollo-frontend/src/routes/TaskList.jsx**

```jsx
import { useQuery } from "@apollo/client";
import { GET_TASKS } from "../api/queries";
import { Link } from "react-router-dom";

export default function TaskList() {
  const { data, loading } = useQuery(GET_TASKS);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {data.tasks.map((t) => (
          <li key={t.id}>
            <Link to={`/task/${t.id}`}>{t.title}</Link>
            {t.completed && " ✔"}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

---

## **apollo-frontend/src/routes/AddTask.jsx**

```jsx
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_TASK, GET_TASKS } from "../api/queries";
import { useNavigate } from "react-router-dom";

export default function AddTask() {
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const [addTask] = useMutation(ADD_TASK, {
    refetchQueries: [{ query: GET_TASKS }],
  });

  async function handleSubmit(e) {
    e.preventDefault();
    await addTask({ variables: { title } });
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Task</h2>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
      />
      <button>Add</button>
    </form>
  );
}
```

---

## **apollo-frontend/src/routes/TaskDetails.jsx**

```jsx
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { GET_TASKS, UPDATE_TASK } from "../api/queries";

export default function TaskDetails() {
  const { id } = useParams();

  const { data, loading } = useQuery(GET_TASKS);
  const [updateTask] = useMutation(UPDATE_TASK, {
    refetchQueries: [{ query: GET_TASKS }],
  });

  if (loading) return <p>Loading...</p>;

  const task = data.tasks.find((t) => t.id === id);
  if (!task) return <p>Not found</p>;

  async function toggle() {
    await updateTask({
      variables: { id: task.id, completed: !task.completed },
    });
  }

  return (
    <div>
      <h2>{task.title}</h2>
      <p>Status: {task.completed ? "Completed" : "Not completed"}</p>
      <button onClick={toggle}>Toggle Complete</button>
    </div>
  );
}
```

---

# 🚀 Apollo GraphQL Server

Folder: `graphql-server/`

---

## **graphql-server/package.json**

```json
{
  "name": "graphql-server",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "@apollo/server": "^4.7.0",
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "graphql": "^16.8.0",
    "uuid": "^9.0.0"
  }
}
```

---

## **graphql-server/schema.js**

```js
const { gql } = require("graphql-tag");

module.exports = gql`
  type Task {
    id: ID!
    title: String!
    completed: Boolean!
  }

  type Query {
    tasks: [Task!]!
  }

  type Mutation {
    addTask(title: String!): Task!
    updateTask(id: ID!, completed: Boolean!): Task!
  }
`;
```

---

## **graphql-server/resolvers.js**

```js
const { v4: uuid } = require("uuid");

let tasks = [
  { id: uuid(), title: "Learn PWA", completed: false },
  { id: uuid(), title: "Build baseline app", completed: false },
];

module.exports = {
  Query: {
    tasks: () => tasks,
  },
  Mutation: {
    addTask: (_, { title }) => {
      const newTask = { id: uuid(), title, completed: false };
      tasks.push(newTask);
      return newTask;
    },
    updateTask: (_, { id, completed }) => {
      const task = tasks.find((t) => t.id === id);
      if (!task) throw new Error("Not found");
      task.completed = completed;
      return task;
    },
  },
};
```

---

## **graphql-server/server.js**

```js
const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const schema = require("./schema");
const resolvers = require("./resolvers");

async function start() {
  const app = express();
  app.use(cors());
  app.use(express.json());

  const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
  });

  await server.start();

  app.use("/graphql", expressMiddleware(server));

  app.listen(4001, () => console.log("GraphQL server running on 4001"));
}

start();
```

---

# 🎉 You now have EVERYTHING

This is the **complete baseline app**, both REST and GraphQL versions, ready for PWA upgrades.

Next step is:

### **“Module 2 — Add Service Worker + Vite PWA Plugin”**

Say **“Module 2”** when you're ready.
