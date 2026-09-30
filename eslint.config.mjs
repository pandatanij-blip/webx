import vitals from "eslint-config-next/core-web-vitals";
export default [...vitals, { ignores: [".next/**", "node_modules/**"] }];
