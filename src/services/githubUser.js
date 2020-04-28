export const fetchUser = (username) => {
  return fetch(`https://api.github.com/users/${username}`)
    .then(res => res.json());
};
