describe("Authorizare test suite", ()=> {

beforeEach(()=>{
    console.log("autentificare, inainte de ficare test");
})

beforeEach(()=>{
    console.log("this is a before");
})

afterEach(()=>{
    console.log('this is an after each')
})

after(()=>{
    console.log('this is an after')
})
    it("test 1", ()=>{
        console.log("test1")
    })

    it("test 2", ()=>{
        console.log("test2")
    })

    it("test 3", ()=>{
        console.log("test3")
    })
})