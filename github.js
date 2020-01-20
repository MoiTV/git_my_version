class Github {
    constructor() {
        this.client_id = 'e6f28b2256651f83b998';
        this.client_secret = '3974461a124ee06d9e2763f89b2c0e88eb18781a';
        this.repo_count = 5;
        this.repo_sort = 'create: asc'
    }

    async getProfile(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?pre_page=${this.repo_count}&sort=${this.repo_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }

}