import React from 'react';
import AdminHome from '../../components/admin/AdminHome';
import AdminLayout from '../../components/AdminLayout';
import fetch from "isomorphic-unfetch";

class Home extends React.Component {
    render() {
        return (
            <div>
                <AdminLayout>
                    <AdminHome posts={this.props.posts} />
                </AdminLayout>
            </div>
        )
    }
}

Home.getInitialProps = async ({ req, query }) => {
    // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
    const resPosts = await fetch(`${process.env.url}api/posts`);
    const jsonPosts = await resPosts.json();
    return { posts: jsonPosts.posts };
};
  

export default Home;