export default class CommunityProfile {
    url;
    constructor(url = `${process.env.BACKEND_URL}/profiles/community`) {
        this.url = url;
    }

    async get(communityID) {
        try {
            const response = await fetch(`${process.env.BACKEND_URL}/profiles/community?id=${communityID}`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json",
                    "User-Agent": `sibyl-discord/${process.env.npm_package_version} node.js/${process.version}`,
                    "Authorization": `Token ${process.env.BACKEND_API_KEY}`
                }
            });
            if (!response.ok) return response.status
            return response.json();
        } catch (error) {
            console.error(error);
        }
    }

    async create(communityID) {
        try {
            const response = await fetch(`${process.env.BACKEND_URL}/profiles/community`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json",
                    "User-Agent": `sibyl-discord/${process.env.npm_package_version} node.js/${process.version}`,
                    "Authorization": `Token ${process.env.BACKEND_API_KEY}`
                },
                body: JSON.stringify({ communityID })
            });
            if (!response.ok) return response.status
        } catch (error) {
            console.error(error);
        }
    }

    async delete(communityID) {
        try {
            const response = await fetch(`${process.env.BACKEND_URL}/profiles/community?id=${communityID}`, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json",
                    "User-Agent": `sibyl-discord/${process.env.npm_package_version} node.js/${process.version}`,
                    "Authorization": `Token ${process.env.BACKEND_API_KEY}`
                }
            });
            if (!response.ok) return response.status
        } catch (error) {
            console.error(error);
        }
    }

}