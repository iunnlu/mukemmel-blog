import React from 'react';
import router from 'next/router';
import { auth } from '../database';

const withAuth = (Component) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                status: 'LOADING',
            }
        }
        componentDidMount() {
            auth.onAuthStateChanged(authUser => {
                if (authUser) {
                    this.setState({
                        status: 'SIGNED_IN'
                    });
                } else {
                    this.setState({
                        status: 'NO_AUTH'
                    });
                }
            });
        }
        renderContent() {
            const { status } = this.state;
            if (status == 'LOADING') {
                return <h1 style={{position:"absolute", left:"45%", right:"50%"}}>Loading...</h1>;
            } else if (status == 'SIGNED_IN') {
                return <Component {...this.props} />
            } else if (status == 'NO_AUTH') {
                router.push("/admin/login")
            }
        }
        render() {
            return (
                <React.Fragment>
                    {this.renderContent()}
                </React.Fragment>
            );
        }
    };
}
export default withAuth;