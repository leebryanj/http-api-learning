# JavaScript Error Handling

### try...catch statement
`try...catch` statement will first try a block of statements, then specifies response(s) if an exception is thrown. The `try...catch` statement will catch the thrown exception.

The `catch` block specifies what to do if an exception is thrown by the `try` block. `error` parameter (parameter can be given any name) for the catch block will be whatever was thrown.

This is especially useful if the code in the `try` block is from a third-party library that is not within our control. `catch` the exception and specify how to handle it.

### Bugs vs Errors
| **Bugs** | **Errors** |
|---|---|
| Bad | Not necessarily bad |
| Unexpected (logical) errors | Expected (something you can handle in code) |
| Fixable (in code) | Not definitively fixable (e.g., server outage, invalid input) |

The code should be bug free. Errors should be handled in order to resolve them.

Debugging is a process to find bugs in the code by going through the code and finding where there is unexpected bahaviour.
Error handling in the code allows (predictable) errors to be resolved (`try...catch`).

Promises use `.then()` to "try" and `.catch()` to "catch". Use `try..catch` when using `async/await`.