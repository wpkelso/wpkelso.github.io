import pluginWebc from "@11ty/eleventy-plugin-webc";
import path from "node:path";
import * as sass from "sass";

export default function(eleventyConfig) {
    eleventyConfig.setInputDirectory("_src");
    eleventyConfig.setOutputDirectory("_site");
    eleventyConfig.setIncludesDirectory(".");

    eleventyConfig.addPassthroughCopy("_src/img");
    eleventyConfig.addPassthroughCopy("_src/fonts");
    eleventyConfig.addPassthroughCopy("_src/css");

	eleventyConfig.addPlugin(pluginWebc, {
        // Glob to find no-import global components
		// This path is relative to the project-root!
		// The default value is shown:
		components: "_src/components/**/*.webc",
        layouts: "_src/layouts/**/*.webc",
    });

    // Watch CSS files for changes
    eleventyConfig.setBrowserSyncConfig({
        files: './_site/css/**/*.css'
    });
};

