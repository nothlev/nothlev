/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
/** @type {import("next").NextConfig} */
const config = {
    images: {
        domains: ['placehold.co'],
        dangerouslyAllowSVG: true,
    }
};

export default config;
