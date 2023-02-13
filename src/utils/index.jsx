export const getFollowerUrlOf = (userName) => {
  return `https://api.github.com/users/${userName}/followers`
}