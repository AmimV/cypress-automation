import home from "../pages/home";
import AbTesting from "../pages/abTesting"

describe("AB Testing", () => {

    it("validar A/B Testing", () => {
        home.acessarAbTest();
        AbTesting.validarTela();
    })
})