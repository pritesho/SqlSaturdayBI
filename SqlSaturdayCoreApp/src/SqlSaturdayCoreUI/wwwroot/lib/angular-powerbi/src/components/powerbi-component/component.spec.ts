import PowerBiService from '../../services/powerbi';

describe('Unit | Component | powerbi-component: ', function () {
  let fakeEmbedInstance = { fakeComponent: true };

  beforeEach(function () {
    angular.mock.module("powerbi.components.powerbiComponent");
    angular.mock.module(function ($provide: ng.auto.IProvideService) {
      // TODO: Look at using $provide.factory to allow creation of spy objects instead.
      $provide.service('PowerBiService', function () {
        this.embed = jasmine.createSpy("PowerBiService.embed").and.returnValue(fakeEmbedInstance);
        this.reset = jasmine.createSpy("PowerBiService.reset");
      });
    });
  });

  let $compile: ng.ICompileService;
  let $rootScope: ng.IRootScopeService;
  let $timeout: ng.ITimeoutService;
  let $scope: any;
  let angularElement: ng.IAugmentedJQuery;
  let powerBiServiceMock: PowerBiService;

  /* tslint:disable-next-line:variable-name */
  beforeEach(inject(function (_$compile_: ng.ICompileService, _$rootScope_: ng.IRootScopeService, _$timeout_: ng.ITimeoutService, PowerBiService: PowerBiService) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $timeout = _$timeout_;
    powerBiServiceMock = PowerBiService;

    $scope = $rootScope.$new();
    $scope.testData = {
      type: "report",
      accessToken: "fakeToken",
      embedUrl: "fakeEmbedUrl"
    };
    $scope.onEmbedded = jasmine.createSpy('embeddedSpy');
  }));

  it('renders', function () {
    // Arrange

    // Act 
    angularElement = $compile('<powerbi-component options="testData"></powerbi-component>')($scope);
    $scope.$digest();

    // Assert
    expect($(angularElement).length).toEqual(1);
  });

  describe('embed', function () {
    it('calls the internal powerBiService.embed when component is constructed', function () {
      // Arrange
      const expectedConfig = {
        type: 'report',
        embedUrl: $scope.testData.embedUrl,
        accessToken: $scope.testData.accessToken
      };

      // Act 
      angularElement = $compile('<powerbi-component options="testData"></powerbi-component>')($scope);
      $scope.$digest();

      // Assert
      expect(powerBiServiceMock.embed).toHaveBeenCalledWith(angularElement[0], expectedConfig);
    });

    it('defers calling internal powerBiService.embed until other required attributes are set such as embed-url and access-token', function () {
      // Arrange
      $scope.testData.type = null;

      // Act (render component but set attributes to invalid state)
      angularElement = $compile('<powerbi-component options="testData"></powerbi-component>')($scope);
      $scope.$digest();

      // Assert
      expect(powerBiServiceMock.embed).not.toHaveBeenCalled();

      // Act (Set attributes to valid state)
      $scope.testData.type = "report";
      $scope.$digest();

      // Assert
      expect(powerBiServiceMock.embed).toHaveBeenCalled();
    });

    it('invokes the onEmbedded callback after embed is called', function () {
      // Arrange
      const expectedConfig = {
        type: 'report',
        embedUrl: $scope.testData.embedUrl,
        accessToken: $scope.testData.accessToken
      };

      // Act 
      angularElement = $compile('<powerbi-component options="testData" on-embedded="onEmbedded($embed)"></powerbi-component>')($scope);
      $scope.$digest();

      // Assert
      expect(powerBiServiceMock.embed).toHaveBeenCalledWith(angularElement[0], expectedConfig);
      expect($scope.onEmbedded).toHaveBeenCalledWith(fakeEmbedInstance);
    });
  });

  describe('reset', function () {
    it('calls the internal powerBiService.reset before component is removed from DOM ($scope is destroyed)', function () {
      // Arrange
      $scope.isReportVisible = true;

      // Act 
      angularElement = $compile('<div ng-if="isReportVisible"><powerbi-component options="testData"></powerbi-component></div>')($scope);
      $scope.$digest();

      $scope.isReportVisible = false;
      $scope.$digest();

      // Assert
      expect(powerBiServiceMock.reset).toHaveBeenCalled();
    });

    it('calls the internal powerBiService.reset when the attributes are set to an invalid state after the component has already been initialized', function () {
      // Arrange

      // Act
      angularElement = $compile('<powerbi-component options="testData"></powerbi-component>')($scope);
      $scope.$digest();

      expect(powerBiServiceMock.embed).toHaveBeenCalled();
      const backupData = $scope.testData;
      $scope.testData = null;
      $scope.$digest();

      // Assert
      expect(powerBiServiceMock.reset).toHaveBeenCalled();

      // Test that component re-embeds after parameters are valid again.
      $scope.testData = backupData;
      $scope.$digest();
      expect(powerBiServiceMock.embed).toHaveBeenCalled();
    });

    it('does not call internal powerBiService.reset unless the compnent has already been embed', function () {
      // Arrange
      $scope.testData.embedUrl = null;

      // Act
      angularElement = $compile('<powerbi-component options="testData"></powerbi-component>')($scope);
      $scope.$digest();

      // Assert
      expect(powerBiServiceMock.reset).not.toHaveBeenCalled();
    });
  });
});
