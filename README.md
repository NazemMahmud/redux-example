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
- Whenever a state is updated, it re-runs and updates the state in a component
```bash
/**
* @param state => Get all states in the argument
*/
function mapStateToProps(state) {
  return { propName: state.stateName  }; // propName is a user-defined name for prop element
}

connect(mapStateToProps)(ComponentName);
```
**For more:** [mapstatetoprops link](https://react-redux.js.org/api/connect#mapstatetoprops-state-ownprops--object)

## ``mapDispatchToProps ``
### Get action call from props, then dispatch that using action creators to update states
- it is also a conventional name, it can be customized.
```bash
/**
* @key selectSong => this is props coming from any call action from component
*/
const mapDispatchToProps = (dispatch, ownProps) => ({
  selectSong: () => dispatch(selectSong(ownProps.title)),
});
```
**Simplest form is**
```
const mapDispatchToProps = {
  selectSong
};
connect(mapStateToProps, mapDispatchToProps )(ComponentName);
```
**For more:** [mapDispatchToProps link](https://react-redux.js.org/api/connect#mapdispatchtoprops-object--dispatch-ownprops--object)
