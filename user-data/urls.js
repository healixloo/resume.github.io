const githubUsername = "vinaysomawat";
const mediumUsername = "healixloo";

const createMediumURL = (username) => `https://${username}.github.io`;
const createGitConnectedURL = (username) => `https://gitconnected.com/v1/portfolio/${username}`;

export const URLs = {
    medium: createMediumURL(mediumUsername),
    gitConnected: createGitConnectedURL(githubUsername)
};
