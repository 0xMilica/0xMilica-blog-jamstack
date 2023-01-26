require("dotenv").config({
  path: `.env`,
})

module.exports = {
  plugins: [
    {
      resolve: `@draftbox-co/gatsby-ghost-novela-theme`,
      options: {
        siteConfig: {
          siteUrl: "https://0xmilica.com",
          postsPerPage: 12,
          siteTitleMeta: "0xMilica's Web3 Blog",
          siteDescriptionMeta: "Web3 from Developer Relations Engineer point of view",
          shareImageWidth: 1000,
          shareImageHeight: 523,
          shortTitle: "0xMilica",
          siteIcon: "favicon.png",
          backgroundColor: "#c49f9f",
          themeColor: "#15171A",
          apiUrl: "https://0xmilica.com",
          header: {
            navigation: [
              {
                label: "Home",
                url: "https://0xmilica.com",
              },
              {
                label: "About",
                url: "https://0xmilica.com/author/milica",
              }
            ],
          },
          footer: {
            copyright: "0xMilica",
            navigation: [
              {
                label: "Home",
                url: "https://0xmilica.com/",
              },
              {
                label: "About",
                url: "https://0xmilica.com/author/milica",
              }
            ],
          },
          subscribeWidget: {
            visible: false,
            title: "Subscribe ",
            helpText: "Get the latest posts delivered right to your inbox.",
            successMessage: "Thanks for subscribing",
          },
          socialLinks: {
            twitter: "https://twitter.com/0xMilica",
            linkedin: "https://www.linkedin.com/in/milica-vulic-007/",
            github: "https://github.com/MilicaVulic",
            instagram: "",
            facebook: "",
            pinterest: "",
            youtube: "",
            dribbble: "",
            behance: "",
            externalLink: "",
            whatsapp: "",
          },
          contactWidget: {
            title: "0xMilica",
            successMessage: "We’ll get in touch with you soon.",
          },
          metadata: {
            title: "0xMilica's Web3 Blog",
            description: "Web3 from Developer Relations Engineer point of view",
          },
          twitterCard: {
            title: "0xMilica's Web3 Blog",
            description: "Web3 from Developer Relations Engineer point of view",
            imageUrl: "twitterImage.png",
            username: "@lady_web3",
          },
          facebookCard: {
            title: "0xMilica's Web3 Blog",
            description: "Web3 from Developer Relations Engineer point of view",
            imageUrl: "facebookImage.png",
            appId: "",
            width: 1000,
            height: 523,
          },
          siteTitle: "0xMilica",
          siteDescription: "Web3 from Dev Relations Engineer point of view",
          hero: {
            heading: `Web3 from Dev Relations Engineer point of view`,
            maxWidth: 652,
          },
          language: "en",
          logoUrl: "/images/logo.svg",
          iconUrl: "",
          coverUrl: "cover.jpg",
          alternateLogoUrl: "alternateLogo.svg",
          themeConfig: {
            variables: [
              { varName: "--accent-color", value: "#6166DC" },
              { varName: "--accent-color-dark", value: "#E9DAAC" },
              { varName: "--success-color", value: "#46B17B" },
              { varName: "--success-color-dark", value: "#46B17B" },
              {
                varName: "--merriweather-font",
                value: `Merriweather`,
              },
              {
                varName: "--merriweather-font-bold",
                value: `700`,
              },
              {
                varName: "--system-font",
                value: `system-ui`,
              },
              {
                varName: "--system-font-normal",
                value: `400`,
              },
              {
                varName: "--system-font-semibold",
                value: `600`,
              },
              {
                varName: "--system-font-bold",
                value: `700`,
              },
              {
                varName: "--monospace-font",
                value: `Source Code Pro`,
              },
              {
                varName: "--monospace-font-normal",
                value: `400`,
              },
            ],
            fonts: [
              {
                family: "Merriweather",
                variants: ["700"],
                //subsets: ['latin']
                //text: 'Hello'
                fontDisplay: "swap",
                strategy: "selfHosted", // 'base64' || 'cdn'
              },
              {
                family: "Source Code Pro",
                variants: ["400"],
                //subsets: ['latin']
                //text: 'Hello'
                fontDisplay: "swap",
                strategy: "selfHosted", // 'base64' || 'cdn'
              },
            ],
          },
        },
        ghostConfig: {
          development: {
            apiUrl: process.env.GHOST_API_URL,
            contentApiKey: process.env.GHOST_API_KEY,
            version: "v3",
          },
          production: {
            apiUrl: process.env.GHOST_API_URL,
            contentApiKey: process.env.GHOST_API_KEY,
            version: "v3",
          },
        },
      },
    },
  ],
};
