import "@testing-library/jest-dom";
jest.mock("axios");

describe("Get methdod gets info from api:", () => {
  beforeEach(() => {
    jest.resetModules();
  });

  it("Should return from profile page correct data", async () => {
    jest.doMock("../../components/profile page/profile/Profile", () => {
      return {
        id: 2,
        fullName: "Vitaliy Testing",
        email: "vitaliy2@gmail.com",
        birthday: "22-02-2002",
        photo: "ewqetoiretw-treiw849-23",
        representativeHEI: true,
        representativeAuthority: false,
        benefits: "I'm good",
        interests: "I'm interesting",
        channelsOfRefferences: [
          { optionSelected: "Viber", details: "+999999999" },
        ],
      };
    });
    return import("../../components/profile page/profile/Profile").then(
      (moduleName) => {
        expect(moduleName.birthday).toEqual("22-02-2002");
        expect(moduleName.representativeAuthority).toEqual(false);
      }
    );
  });
});
