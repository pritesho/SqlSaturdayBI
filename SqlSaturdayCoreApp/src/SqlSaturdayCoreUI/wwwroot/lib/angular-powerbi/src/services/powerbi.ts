import * as pbi from 'powerbi-client';

export default class PowerBiService {
  // static name = "PowerBiService";
  private powerBiCoreService: pbi.service.Service;

  /* tslint:disable:member-ordering */
  static $inject = [
    'PowerBiGlobal'
  ];
  /* tslint:enable:member-ordering */

  constructor(powerbi: pbi.service.Service) {
    this.powerBiCoreService = powerbi;
  }

  embed(element: HTMLElement, config: pbi.IEmbedConfiguration): pbi.Embed {
    return this.powerBiCoreService.embed(element, config);
  }

  get(element: HTMLElement): pbi.Embed {
    return this.powerBiCoreService.get(element);
  }

  find(uniqueId: string): pbi.Report | pbi.Tile {
    return this.powerBiCoreService.find(uniqueId);
  }

  reset(element: HTMLElement): void {
    this.powerBiCoreService.reset(element);
  }
}
