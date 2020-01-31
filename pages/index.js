import React from "react";
import fetch from "isomorphic-unfetch";
import Layout from '../components/Layout';
import { Row, Col } from 'react-bootstrap';
import About from '../components/pages/About';
import Blog from '../components/pages/Blog';
import '../styles/seperator.scss';

const Home = ({ posts, comments }) => {
  return (
    <Layout>
      <About />
      <div className="separator">
        <svg className="separator__svg" width="100%" height="200" viewBox="0 0 100 100" preserveAspectRatio="none" fill="#bdbdbd" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path d="M 100 100 V 40 L 0 100" fill="#eaeaea" stroke-width="0" />
        </svg>
      </div>
      <Blog posts={posts} comments={comments} />
    </Layout>
  )
}

Home.getInitialProps = async ({ req, query }) => {
  // TODO: aşağıdaki satırda bulunan adresi kendi sunucu adresinle değiştirmelisin
  const resPosts = await fetch(`${process.env.url}api/posts`);
  const jsonPosts = await resPosts.json();
  const resComments = await fetch(`${process.env.url}api/comments`);
  const jsonComments = await resComments.json();
  return { posts: jsonPosts.posts, comments: jsonComments.comments };
};

export default Home;