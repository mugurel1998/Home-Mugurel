describe("Auth test suite", ()=>{
    beforeEach(() => {
        console.log('autentificare');
    })

    before(() =>{
        console.log('this is a before ')
    })

    afterEach(() => {
        console.log('this is an after each')
    })

    after(() => {
        console.log('this is an after')
    })

    it("test1", ()=>{
        console.log('test 1')
    })

    it("test 2", () => {
        console.log('test 2')
    })

    it("test 3", () => {
        console.log('test 3')
    })
})