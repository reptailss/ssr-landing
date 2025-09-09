import { ReactSsrCompilerConfig } from 'os-react-ssr-compiler'

export default function buildReactSsrCompilerConfig(): ReactSsrCompilerConfig {
    return {
        appDirectory: 'src/client',
        assetsBuildDirectory: 'public/ssr-client-build',
        publicPath: '/ssr-client-build',
        serverBuildDirectory: 'ssr-server-build',
        alias: {},
    }
}
