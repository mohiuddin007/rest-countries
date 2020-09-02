import React from 'react';

const NoMatch = () => {
    const styles = {
        color: 'red',
        textAlign: 'center'
    }
    return (
        <div style={styles}>
            <h4>Page not found</h4>
            <h1>404 ERROR</h1>
        </div>
    );
};

export default NoMatch;