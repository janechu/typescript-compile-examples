/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require("path");
const ResolveTypeScriptPlugin = require("resolve-typescript-plugin");

const appDir = path.resolve(__dirname, "./src");
const outDir = path.resolve(__dirname, "./www");

module.exports = {
    mode: "production",
    name: "root",
    entry: {
        "enum": path.resolve(appDir, "enum.ts"),
        "as-const": path.resolve(appDir, "as-const.ts"),
        "as-const-frozen": path.resolve(appDir, "as-const-frozen.ts"),
    },
    resolve: {
        extensions: [".ts", ".js"],
        plugins: [
            new ResolveTypeScriptPlugin()
        ]
    },
    output: {
        path: outDir,
        publicPath: "/",
    },
    module: {
        rules: [
            {
                test: /.ts$/,
                use: [
                    {
                        loader: "ts-loader",
                    },
                ],
            },
        ],
    },
};
