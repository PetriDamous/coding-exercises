1. **3 MCP primitives**

- Tools
- Resources
- Prompts

2. **Graphql analogy**

**Tool** -> Mutation
**Resource** -> Query
**Tool Handler** -> Resovler
**Tool Schema** -> Graphql Type Definitions (Graphql Schema)

3. **Reasons why MCP uses JSON Schema**

- Gives structure to the input and output of what data a tool can accept and return similar to the schema in graphql.
- Without the schema the MCP server would have no way of telling the requester (an agent) what a tool expects.
- Schema helps agent generate valid requests.

4. A, C

5. **Explaing parts of tool**

- **Name**
  - Name of the tool.
  - Example: createTask
- **Description**
  - Tells an agent or developer what a tool does.
  - Very important to the agent as this is used during the resoning and discovery process.
- **Input Schema**
  - Sets a standard for what input the tool expects.
  - Keeps structure so when an agent uses the tool it knows what this tool is expecting and prevents the agent from just doing whatever.
- **Output Schema**
  - Sets prodictable structure for what is returned from tool.
  - Very useful to an agent as this allows the agent to know exaclty what will be returned from the tool all the time.

6. **Why description is weak**

- Not very discriptive to an agent.
- What does this tool do? what is stuff? are we creating a task or deleting a task.
- Makes it hard for agent to detirmine if this is the correct tool it is looking for and leaves it guessing.
- Hell a this isn't even useful for a human lol.
- How do we use this tool?
- What are the expect outcomes?
- What is the expected input?
- What does this tool really do and how is it used?
- Many question left open due to poor description.

7. `Tool Metadata` gives info on how the tool is:

- can describe how to use tool
- gives expected out comes
- gives expected inputs
- gives a description so agent can know what tool does.
- Helps agent make descision on using the tool.

`Tool Implementation (handler)`

- Actions sort of like functions that get executed when tool is used.

8. **Why structured outputs are good for agents**

- Agent does not have to guess when output is structured.
- Output can be reused by another tool in a predicable manor.
- Output is constant and prediciable.

9. B

**Why?**

- Option A does not give you the tasks back. What 5 tasks where found. We might need that later.
- Agents natrually have a harder time with free form text.
- Option B gives us the number of tasks returned as well as the task which is the amount of detail an agent would need if it had to perform extra actions through tools or tool chaining.
- Options A does not really tell us much. Even as a dev I would like to know what tasks return.

10. **Response examples**

**Success**

```json
{
    "success" true,
    "data": {
        "id": 123,
        "title": "Walk the dog"
    }
}
```

**Failure**

```json
{
  "success": false,
  "error": {
    "message": "505 from graphql response"
  }
}
```

11. `RPC` -> Remote Procedure Call

It calls a remote function basically.

This makes it easier on the dev since they know what the function will do but do not have to worry about how the function is implemented, what other sources the function needs to call to perfomr the action, and the nuances of return jsons structer and design, etc.

12. MCP meta data to be more usuful to an agent. RPC just calls a function and returns data.

13. **RPC** -> function first

**MCP** -> Capability first

14. When an agent enters your system it does not understand a damn thing. It needs to be able to discover tools so it can evaluate what tools do what for the task given to it.

15. **Agent loop in order**

- `Goal`
  - Agent defines a goal to the request given to it.
- `Plan`
  - Once goal if defined the agent can plan on how to achieve that goal.
- `Capablility Selection`
  - During this phase a tool or group of tools is selected to achieve the overall goal according to the plan.
- `Execution`
  - tool or group of tools are executed to produce an output.
- `Evaluation`
  - Agent will evaluate the results returned form the tool or tools.
    - If the returned data meets the goals then this info is returned to the client.
    - If not then the agent will continue down the loop again to achieve the goal.

16. **Agent loop walk through**

- **Goal Interpertation**
  - Agent sets the following up for defining a goal
  - Goal
    - View Tasks
  - Filter
    - High Priority
  - Agent is still understing the objective during this phase.
- **Planning**
  - Agent creates a plan during this phase.
  - Plan example
    - Find task retrival tool
    - Retrieve tasks
    - filter results
    - Present results
- **Tool Selection**
  - Agent will select the correct tool or tools for the job depending on complexity.
  - Example of tools
    - Selects listTasks tool to get a list of tasks
  - Agent asks during this process does the tool support my plan?
  - If the tool or tools support the agents plan then it or they is selected.
- **Execution**
  - Tool is executed.
  - Agent will build a valid request before executing tool.
  - This is where the schema comes into play. It helps guide the agent in making a valid request so it doesn't guess.
- **Evaluation**
  - The tool returns structed output at this point.
  - Agent will evaluate the response.
    - did it succeed?
    - did it fail?
    - did I get the expected data back that matches my plan?
    - do I need to perform another action with the data I got back from a tool?
- **Finish**
  - Was the goal achived?
    - If no
      - continue
    - If yes
      - return results

17. The JSON Schema defines the structure of a tools inputs and outputs so the agent is guessing what is a valid input or what the outputs are for a tool. Tool meta data allows the agent to discover, see if a tool is capbaiable of achiving its goal. Structued outputs allow the agent to decide if the output achives a goal or if the output needs to be passed to another tool during the evaluation or finish process. MCP contains extra data for agents so they can use tools correctly but the comparision to RPC helps put into presective that you can use some elements of RPC but needs extra meta data to work with agents. This anology helps bring a full mental modal of how mcp works.

18. **Stack in correct order**

- React UI
- TanStack Query
- Apollo MCP React Client
- MCP Server
- Apollo Server
- REST Data Source
- Express REST API
- LowDB

19. Heck no. They server different purposes for one and MCP is away for AI agents to interact with our systems safely and securely.

20. MCP is a new protocal standard that allows AI agents to safely interact with your system. The JSON Schema defines what are the expected inputs and outputs for a tool so the agent is not guessing what is requried to use a tool or what is expected in the output. Meta data for a tool is super imporatant, as it allows an agent to more easliy find the right tool for the job and how to use the tool and when to use the tool. Stuctured outputs are super important as well since this give the AI predictable outputs to use when responsing or passing the output to another tool to get more info. MCP has a lot more descritpion that RPC which is just a function that is not very descriptive to an AI agent.

**Note** also inclue the question so I know what the fuck the question was instead of me having to scroll up and down to figure out what question we are talking about in your feeback.

Give feed back on answers and explain why your answer is correct even if I got it correct.
