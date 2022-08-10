export function getAllDogs() {
    // Your code here
    const url = "/dogs"
    const dogsData = await fetch(url)
    return dogsData
}

export function getDogNumberTwo() {
    // Your code here
    const url = "/dogs/2"
    const singleDogData = fetch(url)
    return singleDogData
}

export async function postNewDog() {
    // Your code here
    const url = "/dogs"
    const paramsBody = new URLSearchParams({
        name: "dogName",
        age: 2
    })
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/x-wwww-form-urlencoded"
        },
        body: paramsBody
    }

    const postDataResponse = await fetch(url, options)
    return postDataResponse
}

export async function postNewDogV2(name, age) {
     // Your code here
     const url = "/dogs"
     const paramsBody = new URLSearchParams({
        name: name,
        age: age,
     })
     const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/x-wwww-form-urlencoded"
        },
        body: paramsBody
     }

        const postDataResponse = await fetch(url, options)
        return postDataResponse
}

export function deleteDog(id) {
      // Your code here
      const url = `/dogs/${id}/delete`;
      const options = {
        method: "POST",
        headers: {
            AUTH: "ckyut5wau0000jyv5bsrud90y"
        }
    }

        const dataFromServer = await fetch(url, options)
        return dataFromServer;
}
