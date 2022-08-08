import "@testing-library/jest-dom";
import axios from "axios";
import getDataFromApi from "../../components/profile page/getmethod/getDataFromApi";
jest.mock("axios");
jest.mock("../../components/profile page/getmethod/getDataFromApi");

describe("Get methdod gets info from api:", () => {
  afterEach(() => {
    jest.resetModules();
  });
  it("should return correct response when user gets data", async () => {
    const response = { id: 2, fullName: "Andrew Joe" };
    const personid = 2;
    const getNotes = jest.fn();
    axios.get.mockResolvedValueOnce(response);
    const result = getDataFromApi({ getNotes, personid });
    expect(result).resolves.toEqual(response);
    jest.unmock("../../components/profile page/getmethod/getDataFromApi");
  });

  it("Should return from getData method correct data", async () => {
    jest.doMock(
      "../../components/profile page/getmethod/getDataFromApi",
      () => {
        return {
          id: 2,
          fullName: "Vitaliy Testing",
        };
      }
    );
    const response = { id: 2, fullName: "Vitaliy Testing" };
    return import(
      "../../components/profile page/getmethod/getDataFromApi"
    ).then((moduleName) => {
      expect(moduleName.default).toEqual(response);
    });
  });
});
