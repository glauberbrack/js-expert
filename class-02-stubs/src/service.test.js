const Service = require("./service");
const sinon = require("sinon");
const { deepStrictEqual } = require("assert");

const BASE_URL_1 = "https://swapi.dev/api/planets/1";
const BASE_URL_2 = "https://swapi.dev/api/planets/2";

const mocks = {
  tatooine: require("./mocks/tatooine.json"),
  alderaan: require("./mocks/alderaan.json"),
};

(async () => {
  // {
  // the lines bellow call the API
  // const service = new Service();
  // const withoutStub = await service.makeRequest(BASE_URL_1);
  // console.log(JSON.stringify(withoutStub));
  //
  // running on terminal
  // node src/service.js > src/mocks/tatooine.json
  // will get the result and store it on the named file
  // }
  {
    const service = new Service();
    const stub = sinon.stub(service, service.makeRequest.name);

    stub.withArgs(BASE_URL_1).resolves(mocks.tatooine);
    stub.withArgs(BASE_URL_2).resolves(mocks.alderaan);

    {
      const expected = {
        name: "Tatooine",
        surfaceWater: "1",
        appearedIn: 5,
      };
      const results = await service.getPlanets(BASE_URL_1);
      console.log("tatooine results", results);
      deepStrictEqual(results, expected);
    }

    {
      const expected = {
        name: "Alderaan",
        surfaceWater: "40",
        appearedIn: 2,
      };

      const results = await service.getPlanets(BASE_URL_2);
      console.log("alderaan results", results);
      deepStrictEqual(results, expected);
    }
  }
})();
