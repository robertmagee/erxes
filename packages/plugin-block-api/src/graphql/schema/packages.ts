export const types = `
  type Package {
    _id: String!
    name: String
    description: String
    wpId: String
    level: String
    projectWpId: String
    projectId: String
    price: String
    duration: Float
    createdAt: Date
    modifiedAt: Date
  }
`;
export const queries = `
  packages: [Package]
  packageDetail(_id: String!): Package
`;

const packageParams = `
  name: String
  description: String
  wpId: String
  level: String
  projectWpId: String
  projectId: String
  price: String
  duration: Float
`;

export const mutations = `
  packagesAdd(${packageParams}): Package
  packagesEdit(_id: String!, ${packageParams}): Package
  packagesDelete(packageIds: [String!]): JSON
`;