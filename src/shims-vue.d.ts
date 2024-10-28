declare module '*.vue' {
    import type { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

declare module 'vue-toastification' {
    import { Plugin } from 'vue';
    const VueToastificationPlugin: Plugin;
    export default VueToastificationPlugin;
}

declare module '@/router' {
    import { Router } from 'vue-router';
    const router: Router;
    export default router;
}