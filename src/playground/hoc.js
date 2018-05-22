//High ordwer Component
//calles HOC-- a component (HOC) that renders another component
//reuse code
//rendeer highjacking
//prop manipulation
//abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1> INFO</h1>
        <p>This info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
//reutrn new component the HOC***********
    return (props) => (
        <div>
        {props.isAdmin && <p>This is private Info & and Admin mesage</p>}
        <WrappedComponent {...props} />
        </div>
    );

};

const requireAuthentification = (WrappedComponent) => {
    //returnf HOC
    return (props) => (
        <div>
            {props.isAuthentificated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>Please login to view the info</p>
            )}
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentification(Info);

//ReactDOM.render(<AdminInfo isAdmin={false} info="these be dem details"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthentificated={true} info="these be dem details"/>, document.getElementById('app'));