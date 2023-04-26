
const echoFetch = async () => {
    console.debug("echoFetch function called")
    const url = "https://tcpbin.com:4242"
    const message = "Hello world!"
    let res = await fetch(
        url,
        {
            method: 'POST',
            body: message
        }
    )
    console.debug(res)
      let responseJson = await res.json();
      //if (responseJson.status == 1) {  
        console.debug(responseJson)
      //}
}

export default echoFetch