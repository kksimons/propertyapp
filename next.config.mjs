/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.course-api.com',
                port: '',
                pathname: '/images/**',
            },
            {
                protocol: 'https',
                hostname: 'img.clerk.com',
            },
        ]
    }
};

export default nextConfig;
