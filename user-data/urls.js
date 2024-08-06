const githubUsername = "vinaysomawat";
const mediumUsername = "healixloo";

const createMediumURL = (username) => `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`;
const createGitConnectedURL = (username) => `https://gitconnected.com/v1/portfolio/${username}`;

export const URLs = {
    get medium() {
        return createMediumURL(mediumUsername);
    },
    get gitConnected() {
        return createGitConnectedURL(githubUsername);
    }
};
