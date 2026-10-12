require("dotenv").config()
const API_KEY = process.env.API_KEY
const { Client } = require("@lix-url/sdk")
const client = new Client()

const shorten = async (req, res) => {
    try {
        const isValidUrl = new URL(req.body.longUrl)
    } catch (err) {
        console.log("invalid URL")
        return console.log(err)
    }
    // const result = await client.links().create(req.body.longUrl)
    // const url = result.link.shortUrl

    const fakeRes = {
        link: {
            id: 304536,
            alias: 'ctUav',
            url: 'https://github.com/davidolojede',
            shortUrl: 'https://lix.li/ctUav',
            title: null,
            group: null,
            tags: [],
            meta: [],
            isPublic: true,
            createdDatetime: '2026-10-11T15:39:40+01:00',
            activeBeforeDatetime: null,
            deletedDatetime: null
        }
    }
    res.json(fakeRes)
}

module.exports = { shorten }