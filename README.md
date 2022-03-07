## Run project

To check how to run and build or test the project, follow **project-build.md** file.

## How `connect()` from react-redux works
```bash
function connect() {
  return function () {
      return 'Hi to react-redux';
  }
}

connect()(); # it prints Hi to react-redux
```
*Here a function is returning a function*

So, when we write connect()(ComponentName), it passes the component inside the inner function, and works as a wrapper.


## ``mapStateToProps`` 
### To connect the `connect()` with `Provider` to get states
- it is a conventional name, it can be customized. We may call it `getMyStates`
```bash
/**
* @param state => Get all states in the argument
*/
function mapStateToProps(state) {
  return { propName: state.stateName  }; // propName is a user-defined name for prop element
}

connect(mapStateToProps)(ComponentName);
```
