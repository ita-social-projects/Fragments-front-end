import "@testing-library/jest-dom";
import axios from "axios";
import getDataFromApi from "../../components/getmethod/getmethod";
jest.mock("axios");
jest.mock("../../components/getmethod/getmethod");


describe("Get methdod gets info from api:", () => {
  afterEach(() => {
    jest.resetModules();
  });
  it("should return correct response when getGitHubUser is called and no error occur", async () => {

    const response = { id: 2, fullName: "Andrew Joe" };
    const personid = 2;
    const getNotes = jest.fn();
    axios.get.mockResolvedValueOnce(response);
    const result = await getDataFromApi({getNotes,personid});
    expect(result).toEqual(response);
    jest.unmock("../../components/getmethod/getmethod");
  });

    it("Should return from getData method correct data", async () => {
      jest.doMock("../.././components/getmethod/getmethod", () => {
        return {
          id: 2,
          fullName: "Vitaliy Testing",
        };
      });
      const response = { id: 2, fullName: "Vitaliy Testing" };
      return import("../.././components/getmethod/getmethod").then((moduleName) => {
        expect(moduleName.default).toEqual(response);
      });
    });
});


