import { Octokit } from 'octokit'

const octokit = new Octokit({})

/**
 * * With pagination parameter
 * @param {userName} github user account login
 * @returns Promise function to get follower list of given userName.
 */

export const getFollowersUrlOf = async (userName) => {
  return await octokit.paginate(`GET https://api.github.com/users/${userName}/followers`, {
    per_page: 100,
  })
}

/**
 * * Without pagination parameter
 */
// export const getFollowerUrlOf = (userName) => {
//   return `https://api.github.com/users/${userName}/followers`
// }