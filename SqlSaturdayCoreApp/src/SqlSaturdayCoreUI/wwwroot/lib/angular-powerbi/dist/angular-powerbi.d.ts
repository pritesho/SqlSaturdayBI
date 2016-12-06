/*! angular-powerbi v1.0.0 | (c) 2016 Microsoft Corporation MIT */
import reportDirective from './components/powerbi-report/component';
import componentDirective from './components/powerbi-component/component';
import service from './services/powerbi';
export declare const components: {
    report: typeof reportDirective;
    component: typeof componentDirective;
};
export { service };
