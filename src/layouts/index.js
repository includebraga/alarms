import React, { Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import Header from "../components/Header";

import "./reset.css";

export const pageQuery = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`;

export default class TemplateWrapper extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    data: PropTypes.shape({
      site: PropTypes.shape({
        siteMetadata: PropTypes.shape({
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          keywords: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  };

  render() {
    const {
      title: siteTitle,
      description: siteDescription,
      keywords: siteKeywords,
      url: siteUrl,
    } = this.props.data.site.siteMetadata;

    return (
      <div>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
          <meta name="keywords" content={siteKeywords} />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={siteTitle} />
          <meta name="twitter:description" content={siteDescription} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={siteTitle} />
          <meta property="og:url" content={siteUrl} />
          <meta property="og:description" content={siteDescription} />
          <meta property="og:site_name" content={siteTitle} />
          <meta
            property="fb:admins"
            content="100000633932565,1448175923,707387762,11876227"
          />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff" />
          <meta itemProp="name" content={siteTitle} />
          <meta itemProp="description" content={siteDescription} />
        </Helmet>
        <Header />
        <div
          style={{
            margin: "0 auto",
            maxWidth: 960,
            padding: "0px 1.0875rem 1.45rem",
            paddingTop: 0,
          }}
        >
          {this.props.children()}
        </div>
      </div>
    );
  }
}
