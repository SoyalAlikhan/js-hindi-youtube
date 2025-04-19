const requestUrl = 'https://api.github.com/users/SoyalALiKhan'

const xhr = new XMLHttpRequest();
xhr.open('GET',requestUrl)
//console.log(xhr.readyState);
xhr.onreadystatechange = function () {
    //console.log(xhr.readyState);
    const data = JSON.parse(this.response)
    console.log(data);
    console.log(data.followers)
    const card = document.querySelector('#card')
    card.innerHTML =`
        <div>
            <img src="${data.avatar_url}" alt="Avatar" style="width:30%"
        </div>
        <div>
            <p>${data.followers}</p>
            <p>${data.following}</p>
        <div/>
    `
}
xhr.send()













/*const xhr = new XMLHttpRequest()
console.log(xhr.readyState);
xhr.open('GET',requestUrl)
console.log(xhr.readyState);
xhr.onreadystatechange = function(){
      console.log(xhr.readyState);
       if(xhr.readyState === 4){
            console.log(this.responseText);
            const data = JSON.parse(this.responseText)
            console.log(typeof data);
            const card = document.getElementById('card')
            card.innerHTML = `
                  <div>
                        <img src="${data.avatar_url}" alt="Avatar" style="width:30%">
                  </div>
                  <div class="container">
                        <h4><b>${data.login}</b></h4>
                        <p>${data.followers}</p>
                        <p>${data.followers}</p>
                     </div>
            `
       }
}
xhr.send()*/