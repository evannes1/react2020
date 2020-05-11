import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App=() => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                Are you sure?
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Sam" timePosted="Today at 1400" blogText="Whatevs"
                    avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex" timePosted="Today at 1800" blogText="Yup"
                    avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane" timePosted="Yesterday at 1200" blogText="Nope"
                    avatar={faker.image.avatar()} />
            </ApprovalCard>

        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));