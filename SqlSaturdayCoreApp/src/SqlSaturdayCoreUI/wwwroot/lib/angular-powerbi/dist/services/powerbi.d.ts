/*! angular-powerbi v1.0.0 | (c) 2016 Microsoft Corporation MIT */
import * as pbi from 'powerbi-client';
export default class PowerBiService {
    private powerBiCoreService;
    static $inject: string[];
    constructor(powerbi: pbi.service.Service);
    embed(element: HTMLElement, config: pbi.IEmbedConfiguration): pbi.Embed;
    get(element: HTMLElement): pbi.Embed;
    find(uniqueId: string): pbi.Report | pbi.Tile;
    reset(element: HTMLElement): void;
}
