import PowerBiService from './powerbi';

describe('Unit | Services | PowerBiService: ', function () {
  let returnValue = {};
  let getReturnValue = {};
  let findReturnValue = {};
  let embedSpy = jasmine.createSpy("PowerBiService.embed").and.returnValue(returnValue);
  let getSpy = jasmine.createSpy("PowerBiService.get").and.returnValue(getReturnValue);
  let findSpy = jasmine.createSpy("PowerBiService.find").and.returnValue(findReturnValue);
  let resetSpy = jasmine.createSpy("PowerBiService.reset");
  let powerBiService: PowerBiService;

  beforeEach(function () {
    angular.mock.module("powerbi.service");
    angular.mock.module(function ($provide: ng.auto.IProvideService) {
      $provide.value('PowerBiGlobal', {
        embed: embedSpy,
        get: getSpy,
        find: findSpy,
        reset: resetSpy
      });
    });
  });
  beforeEach(inject(function (PowerBiService: PowerBiService) {
    powerBiService = PowerBiService;
  }));

  it('service is defined', function () {
    expect(powerBiService).toBeDefined();
  });

  it('calls to .embed call the core service .embed and return the result', function () {
    // Arrange
    const testData = {
      element: <HTMLElement>{},
      config: {}
    };

    // Act
    const actualReturn = powerBiService.embed(testData.element, testData.config);

    // Assert
    expect(embedSpy).toHaveBeenCalledWith(testData.element, testData.config);
    expect(actualReturn).toBe(returnValue);
  });

  it('calls to .get call the core service .get', function () {
    // Arrange
    const testData = {
      element: <HTMLElement>{}
    };

    // Act
    const actualReturn = powerBiService.get(testData.element);

    // Assert
    expect(getSpy).toHaveBeenCalledWith(testData.element);
    expect(actualReturn).toBe(getReturnValue);
  });

  it('calls to .find call the core service .find', function () {
    // Arrange
    const testData = {
      embedName: 'fakeName'
    };

    // Act
    const actualReturn = powerBiService.find(testData.embedName);

    // Assert
    expect(findSpy).toHaveBeenCalledWith(testData.embedName);
    expect(actualReturn).toBe(findReturnValue);
  });

  it('calls to .reset call the core service .reset', function () {
    // Arrange
    const testData = {
      element: <HTMLElement>{}
    };

    // Act
    powerBiService.reset(testData.element);

    // Assert
    expect(resetSpy).toHaveBeenCalledWith(testData.element);
  });
});
