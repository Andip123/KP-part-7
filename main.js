const token = ~~ [Math.random () * 12345678]

const pictures = ["1.jpg", "2.jpg", "3.jpg"]

function login(username ) {
    console.log('processing token user now..')
    return new Promise((success, failde)=> {
        setTimeout(() => {
            if (username != "Andi_prabandaru") failde("Sorry wrong data")
            success({token})
        }, 200)
    })
}
function getUSer(token) {
    console.log('processing apikey now..')
    return new Promise((success, failde) => {
        if (!token) failde("sorry, no token, cannot acces")
        setTimeout(() => {
            success({ apikey : "xkey123"})
        }, 500)
    })
}
function getPictures(apikey) {
    console.log('processing pictures now..')
    return new Promise((success, failde) => {
        if (!apikey) failde ("no apikey, cannot access!")
        setTimeout(() => {
            success({ pic : pictures})
    }, 1500)
    })
}


async function UserDisplay() {
    try {
        const { token } = await login ("Andi_prabandaru")
        const {apikey} =await getUSer (token) 
        const { pic } = await getPictures (apikey)

        console.log(`
        token anda adalah : ${token}
        apikey anda adalah : ${apikey}
        hasil request gambar anda berikut : ${pic}
        `)
    } catch (err) {
        console.log(err)
    }
}
UserDisplay()