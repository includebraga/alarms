const autoprefixer = require("autoprefixer");

module.exports = {
  pathPrefix: "/alarms",
  siteMetadata: {
    title: "Alarmes Ocorrências Quartel Bombeiros",
    author: "Luís Torres",
    description: "Alertas para ocorrências no Quartel",
    keywords: "BVE, Bombeiros, alarmes, icêndios, emergência",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "trackingIDhere",
        head: true,
        anonymize: true,
      },
    },
  ],
};
