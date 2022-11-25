#!/usr/bin/env node
const svgToFont = require('svgtofont');
const path = require('path');

(async () => {
    await svgToFont({
        src: path.resolve(process.cwd(), 'icons/svg'),
        dist: path.resolve(process.cwd(), 'font'), // output path
        fontName: 'material-food-icons', // font name
        useNameAsUnicode: true,
        centerHorizontally: true,
        normalize: true,
        svgicons2svgfont: {
            fontHeight: 1000,
        },
        css: {
            fontSize: "50px",
        },
        metadata: "Icons by Creative Stall<https://thenounproject.com/creativestall/>",
        website: {
            template: path.join(process.cwd(), "demo-template.ejs"),
            title: 'Material Food Icons',
            logo: null,
            corners: {
                url: 'https://github.com/thymesave/material-food-icons',
                width: 62, // default: 60
                height: 62, // default: 60
                bgColor: '#177e60' // default: '#151513'
            },
            links: [
                {
                    title: 'Icons by Creative Stall from Noun Project',
                    url: 'https://thenounproject.com/creativestall/'
                }
            ],
            footerInfo: `Licensed under GNU GPL v3. (Yes it's free and <a href="https://github.com/thymesave/material-food-icons">open-sourced</a>. Many thanks to Creative Stall from Noun Project for the icons.`
        },
    });
})();
