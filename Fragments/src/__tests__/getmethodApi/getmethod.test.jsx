import "@testing-library/jest-dom";
import axios from "axios";
import getDataFromApi from "../../components/profile page/getmethod/getDataFromApi";
import variables from "../../components/important variables/variables";

jest.mock("axios");
describe("Get methdod gets info from api:", () => {
  it("should pass test if the axios.get works", async () => {
    // given
    jest.unmock("../../components/profile page/getmethod/getDataFromApi");
    const BASE_URL = variables.API_URL;
    const users = { id: 2, fullName: "Andrew Joe" };
    const personid = 2;
    const getNotes = jest.fn();
    axios.get.mockResolvedValueOnce(users);
    getDataFromApi({ getNotes, personid });

    // then
    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}Users/${personid}`);
  });
});
