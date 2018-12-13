// #1 Bring in the connect function
import { connect } from 'react-redux';

// #2 Bring in your action creators, if necessary
import { deleteNote } from './store';

// #3 Bring in your Dumb Component that you want to enhance
import NotesComponent from './NotesComponent';

// #4 Write a function that describes how to translate Redux state into React props

// "translate state into props"
const mapStateToProps = (state) => { // receives store.getState()
    return {
        // name-of-prop : redux-thing
        notes: state.notes
    };
}

// #4b Write a function that describes how to translate React callbacks into Redux dispatch
const mapDispatchToProps = (dispatch) => {
    return {
        // name-of-prop : redux-thing
        handleDelete: (id) => {
            dispatch(deleteNote(id));
        }
    };
}

// #5 Enhance the Dumb Component using the `connect` function
const componentEnhancer = connect(mapStateToProps, mapDispatchToProps);
const SuperNotesComponent = componentEnhancer(NotesComponent);

// #6 Export your new enhanced component
export default SuperNotesComponent;