const userName = document.getElementById('user-name')
const userModal = document.getElementById('user-modal')

const getUsers = () => {
    const response = fetch('https://jsonplaceholder.typicode.com/users')
    return response
};

getUsers()
.then(response => response.json())
.then(data => {
    data.map(( user ) =>{
        const liName = document.createElement('li');
        const button = document.createElement('button');
        button.textContent = user.name;
        userName.appendChild(liName);
        liName.appendChild(button);
        button.addEventListener('click', () =>{
            const sectionModal = document.createElement('section');
            const sectionModalContent = document.createElement('section');
            const titleH1 = document.createElement('h1');
            const sectionContainer = document.createElement('section');
            const pEmail = document.createElement('p');
            const pName = document.createElement('p');
            const pUsername = document.createElement('p');
            const pAddress = document.createElement('p');
            const pGeo = document.createElement('p');

            titleH1.innerHTML = 'User information';
            pEmail.innerHTML = 'Mail: ' + user.email;
            pName.innerHTML = 'Name: ' + user.name;
            pUsername.innerHTML = 'Username: ' + user.username;
            pAddress.innerHTML = 'Address: ' + user.address.street + ', ' + user.address.suite + 
            ', ' + user.address.city + ', zipcode: ' + user.address.zipcode;
            pGeo.innerHTML = 'Lat: ' + user.address.geo.lat + '. Lng: ' + user.address.geo.lng ;

            titleH1.setAttribute('class', 'modal-title')
            sectionModal.setAttribute('class', 'modal-container')
            sectionContainer.setAttribute('class', 'container')

            userModal.appendChild(sectionModal);
            sectionModal.appendChild(sectionModalContent);
            sectionModalContent.appendChild(titleH1);
            sectionModal.appendChild(sectionContainer);
            sectionContainer.appendChild(pEmail);
            sectionContainer.appendChild(pName);
            sectionContainer.appendChild(pUsername);
            sectionContainer.appendChild(pAddress);
            sectionContainer.appendChild(pGeo);
        })
    });
})
.catch(error => console.log(error))



const section = document.createElement('section')

section.setAttribute('class', 'title-user')