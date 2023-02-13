import { Octokit } from 'octokit'

const octokit = new Octokit({})

export const getFollowerUrlOf = async (userName) => {
  return await octokit.paginate(`GET https://api.github.com/users/${userName}/followers`, {
    per_page: 100,
  })
}

// export const getFollowerUrlOf = (userName) => {
//   return `https://api.github.com/users/${userName}/followers`
// }