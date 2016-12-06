/*! angular-powerbi v1.0.0 | (c) 2016 Microsoft Corporation MIT */
import * as pbi from 'powerbi-client';
import PowerBiService from '../../services/powerbi';
export declare class Controller {
    component: pbi.Embed;
    options: pbi.IEmbedConfiguration;
    onEmbedded: Function;
    validationMap: any;
    private powerBiService;
    private $scope;
    static $inject: string[];
    constructor($scope: ng.IScope, powerBiService: PowerBiService);
    /**
     * Handler after component is inserted in the DOM. If required attributes are valid embed immediately
     * otherwise, watch attributes and embed when they are valid.
     */
    init(element: HTMLElement): void;
    /**
     * Handler when component is removed from DOM. Forwards call to service to perform cleanup of references before DOM is modified.
     */
    reset(element: HTMLElement): void;
    /**
     * Given an HTMLElement, construct an embed configuration based on attributes and pass to service.
     */
    private embed(element, options);
    /**
     * Ensure required options (embedUrl and accessToken are valid before attempting to embed)
     */
    private validateOptions(options);
    private validateReportOptions(options);
}
export default class Directive {
    restrict: string;
    replace: boolean;
    template: string;
    scope: {
        accessToken: string;
        embedUrl: string;
        options: string;
        onEmbedded: string;
    };
    controller: typeof Controller;
    bindToController: boolean;
    controllerAs: string;
    link($scope: ng.IScope, element: ng.IAugmentedJQuery, attributes: any, controller: Controller, transcludeFn: any): void;
}
