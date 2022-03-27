import React from 'react';
import { useNavigate } from 'react-router';
import Card from './PageCard';

export default function RedirectPage(props) {
    const navigate = useNavigate();

    React.useEffect(() => {
        setTimeout(() => {
            navigate(props.to);
        }, 200);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Card>
            <p>Redirecting to "{props.to}".</p>
        </Card>
    );
}