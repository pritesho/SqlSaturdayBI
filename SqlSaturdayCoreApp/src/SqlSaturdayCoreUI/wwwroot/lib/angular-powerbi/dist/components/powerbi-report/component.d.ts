/*! angular-powerbi v1.0.0 | (c) 2016 Microsoft Corporation MIT */
import * as pbi from 'powerbi-client';
import * as models from 'powerbi-models';
import PowerBiService from '../../services/powerbi';
export declare class Controller {
    accessToken: string;
    component: pbi.Embed;
    embedUrl: string;
    reportId: string;
    name: string;
    onEmbedded: Function;
    options: models.ISettings;
    private powerBiService;
    private $scope;
    private $timeout;
    static $inject: string[];
    constructor($scope: ng.IScope, $timeout: ng.ITimeoutService, powerBiService: PowerBiService);
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
    private embed(element);
    private debounce(func, wait);
    /**
     * Ensure required attributes (embedUrl and accessToken are valid before attempting to embed)
     */
    private validateRequiredAttributes();
}
export default class Directive {
    restrict: string;
    replace: boolean;
    template: string;
    scope: {
        accessToken: string;
        embedUrl: string;
        reportId: string;
        name: string;
        options: string;
        onEmbedded: string;
    };
    controller: typeof Controller;
    bindToController: boolean;
    controllerAs: string;
    link($scope: ng.IScope, element: ng.IAugmentedJQuery, attributes: any, controller: Controller, transcludeFn: any): void;
}
