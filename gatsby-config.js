const autoprefixer = require("autoprefixer");

module.exports = {
  pathPrefix: "/alarms",
  siteMetadata: {
    title: "Alarmes Ocorrências Quartel Bombeiros",
    author: "Luís Torres",
    description: "Página com sons de alerta para ocorrências no Quartel",
    keywords:
      "BVE, Bombeiros, ocorrências, alarmes, icêndios, emergência médica",
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
