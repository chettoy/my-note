import React from 'react';
import Card from '../PageCard';

class NoteListPage extends React.Component {
    constructor(props) {
        super(props);
        this.notes = [];
    }

    render() {
        return (
            <Card>
                <span>note list</span>
                <hr />

                <span>todo..</span>
            </Card>
        );
    }
}

export default NoteListPage;