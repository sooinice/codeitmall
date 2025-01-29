/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/products/:id",
        destination: "/items/:id",
        permanent: true, //웹 브라우저에게 주소가 바뀌었다는 사실을 저장하게 하려면 ture
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com",
        port: "",
        pathname: "/codeitmall/**",
      },
    ],
  }, //외부 이미지를 쓸떄는 미리 작성해주어야함.
};

export default nextConfig;

//next.js 서버를 설정하는 파일
