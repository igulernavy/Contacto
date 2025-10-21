function getdata(){
    const url = "https://randomuser.me/api/";
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const section = document.querySelector("#personinfo");
        section.innerHTML = "";
        const user = data.results[0];
        const title = document.createElement("h2");
        title.textContent = `${user.name.first} ${user.name.last}`;
        section.appendChild(title);
        const img = document.createElement("img");
        img.src = user.picture.large;
        section.appendChild(img);
        const email = document.createElement("p");
        email.className = "email";
        email.innerHTML = `<span>Email:</span> ${user.email}`;
        section.appendChild(email);
        const phone = document.createElement("p");
        phone.className = "phone";
        phone.innerHTML = `<span>Phone:</span> ${user.phone}`;
        section.appendChild(phone);
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });
}