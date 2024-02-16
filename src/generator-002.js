async function get(n) {
    console.log(`get ${n}`)
    return new Promise(r => setTimeout(() => r(n), n * 1000))
}
async function* asyncGenerator(arr) {

    let anyResolve

    arr.map(get).forEach(async request => {
        const anyResult = await request
        console.log(`forEach ${anyResult}`)
        anyResolve(anyResult)
    })

    while(true) {
        console.log('while')
        yield await new Promise((resolve) => {
            console.log('while Promise')
            anyResolve = resolve
        })
    }
}

/*
(async function() {
    for await (let num of asyncGenerator([4, 3, 2, 1, 0])) {
        console.log(num)
    }
})()
 */



(async () => {
    const g = asyncGenerator([4, 3, 2, 1, 0])
    console.log(await g.next());
    console.log(await g.next());
    console.log(await g.next());
    console.log('3', await g.next());
    console.log('4', await g.next());
    console.log('last')
    console.log('5', await g.next());
    console.log('6', await g.next());
    console.log('end')
})();
