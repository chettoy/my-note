import React from 'react';
import { withTheme } from 'styled-components/macro';
import Card from '../PageCard';
import Loading from '../../components/Loading';

const MarkdownEditor = React.lazy(() => import('rich-markdown-editor'));

class EditorComponent extends React.Component {
    render() {
        return (
            <Card>
                <React.Suspense fallback={<Loading />}>
                    <MarkdownEditor
                        dark={this.props.theme.isDark}
                        defaultValue="Hello world!"
                    />
                </React.Suspense>
            </Card>
        );
    }
}

export default withTheme(EditorComponent);