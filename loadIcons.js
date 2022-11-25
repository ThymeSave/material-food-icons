#!/usr/bin/env node
const apiResponse = require("./api-response.json");
const axios = require("axios");
const fs = require("fs");
const potrace = require("potrace");

(async () => {
    for (let icon of apiResponse['icons']) {
        const name = icon.term.trim().toLowerCase().replaceAll(" ", "_").replaceAll("-", "_");
        const pngPath = `icons/png/${name}.png`;
        if (!fs.existsSync(pngPath)) {
            const result = await axios.request({
                responseType: 'arraybuffer',
                url: icon.preview_url,
                method: 'get',
            });
            fs.writeFileSync(pngPath, result.data);
        } else {
            console.log(`Already downloaded icon: ${pngPath}`);
        }
        const svgPath = `icons/svg/${name}.svg`;
        if (!fs.existsSync(svgPath)) {
            potrace.trace(pngPath, function (err, svg) {
                if (err) throw err;
                fs.writeFileSync(svgPath, svg);
            });
        } else {
            console.log(`Already converted icon: ${svgPath}`);
        }
    }
})()
