/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = ({ actions: { createPage } }) => {
  const projects = require("./src/data/projects.json")
  projects.forEach(project => {
    createPage({
      path: `/project/${project.slug}`,
      component: require.resolve("./src/templates/project.js"),
      context: {
        title: project.title,
        url: project.url,
        description: project.description,
        slug: project.slug,
        images: project.images,
      },
    })
  })
}
