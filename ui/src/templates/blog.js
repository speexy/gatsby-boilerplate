import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../layouts/Layout';

import styles from './blog.module.css';

export default ({ data }) => {

    const { title, meta, image } = data.thisPage.frontmatter;

    return (
        <Layout meta={meta}>
            <div>
                <img src={image.src} alt={image.alt}/>
                <h1>{title}</h1>
                {
                    data.posts.edges.map(( post, index ) => {
                        return (
                            <Link to={post.node.fields.slug} key={index}>
                                <article >
                                    <h1>{post.node.frontmatter.title}</h1>
                                    <p>{post.node.frontmatter.excerpt}</p>
                                </article>
                            </Link>
                        );
                    })
                }
            </div>
        </Layout>
    );

};


export const blogQuery = graphql`
  query ($path: String!) {
    thisPage: markdownRemark(fields: { slug: { eq: $path } }) {
      frontmatter {
        title
        meta {
          title
          description
        }
        image {
          src
          alt
        }
      }
    }
    posts: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/content/blog\//"}}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            excerpt
          }
        }
      }
    }
  }
`;
