const autoprefixer = require("autoprefixer");

module.exports = {
  pathPrefix: "/alarms",
  siteMetadata: {
    title: "Alarmes Ocorrencias Quartel Bombeiros",
    author: "Luís Torres",
    description: "Alertas para ocorrencias no Quartel",
    keywords: "BVE, Bombeiros, alarmes, icendios, emergencia",
    url: "https://bve-alarms.netlify.com/",
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
