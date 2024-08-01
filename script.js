
const people = [
    { id: 1, name: 'Bibek Shah', age: 16, social: 'https://www.facebook.com/profile.php?id=100060402664701', image: 'https://via.placeholder.com/300' },
    { id: 2, name: 'Aadesh Dhakal', age: 16, social: 'https://www.facebook.com/aadesh.dhakal.12', image: 'https://via.placeholder.com/300' },
    { id: 3, name: 'Sushant Poudel', age: 15, social: 'https://www.facebook.com/sushant.poudel.73345', image: 'https://via.placeholder.com/300' },
    { id: 4, name: 'Ashrit Poudel', age: 15, social: 'https://www.facebook.com/ashrit.ashrit.75', image: 'https://via.placeholder.com/300' },
    { id: 5, name: 'Prayash Adhikari', age: 15, social: 'https://www.facebook.com/profile.php?id=100087356141285', image: 'https://via.placeholder.com/300' },
    { id: 6, name: 'Dron Shah', age: 16, social: 'https://www.facebook.com/profile.php?id=100082491544253', image: 'https://via.placeholder.com/300' },
    { id: 7, name: 'Kartik Mahato', age: 16, social: 'https://www.facebook.com/profile.php?id=100051431350468', image: 'https://via.placeholder.com/300' },
    { id: 8, name: 'Durgesh Mallik', age: 15, social: 'https://www.facebook.com/durgesh.mallik.9', image: 'https://via.placeholder.com/300' },
    { id: 9, name: 'Bishnu Dev Shah', age: 15, social: 'https://www.facebook.com/profile.php?id=61561624620567', image: 'https://via.placeholder.com/300' },
    { id: 10, name: 'Bishal Yadav', age: 16, social: 'https://www.facebook.com/profile.php?id=100084997878085', image: 'https://via.placeholder.com/300' },
    { id: 11, name: 'Saujal Shakya', age: 16, social: 'https://www.facebook.com/profile.php?id=100090249995685', image: 'https://via.placeholder.com/300' },
    { id: 12, name: 'Biom Shah', age: 16, social: 'https://www.facebook.com/biom.shah', image: 'https://via.placeholder.com/300' },
    { id: 13, name: 'Altaf Alam', age: 15, social: 'https://www.facebook.com/profile.php?id=61550059469528', image: 'https://via.placeholder.com/300' },
    { id: 14, name: 'Nitish Gami', age: 16, social: 'https://www.facebook.com/profile.php?id=61551605421223', image: 'https://via.placeholder.com/300' },
    { id: 15, name: 'Aaditya Kafle', age: 16, social: 'https://www.facebook.com/profile.php?id=100093873321684', image: 'https://via.placeholder.com/300' },
    { id: 16, name: 'Aayush Dev', age: 15, social: 'https://www.facebook.com/https.aayush', image: 'https://via.placeholder.com/300' },
    { id: 17, name: 'Bibek Roy', age: 16, social: 'https://www.facebook.com/profile.php?id=61560336325043', image: 'https://via.placeholder.com/300' },
    { id: 18, name: 'Tim Berners Lee', age: 169, social: 'https://www.facebook.com/profile.php?id=100080999832431', image: 'https://via.placeholder.com/300' },
    { id: 19, name: 'Ashish Khadka', age: 16, social: 'https://www.facebook.com/profile.php?id=100080999832431', image: 'https://via.placeholder.com/300' },
    { id: 20, name: 'keti-1', age: 0, social: 'https://www.facebook.com/profile.php?id=100080999832431', image: 'https://via.placeholder.com/300' },
    { id: 21, name: 'keti-2', age: 0, social: 'https://www.facebook.com/profile.php?id=100080999832431', image: 'https://via.placeholder.com/300' },
    { id: 23, name: 'keti-4', age: 0, social: 'https://www.facebook.com/profile.php?id=100080999832431', image: 'https://via.placeholder.com/300' },
    { id: 24, name: 'keti-5', age: 0, social: 'https://www.facebook.com/profile.php?id=100080999832431', image: 'https://via.placeholder.com/300' },
    { id: 25, name: 'Pookie ji', age: 14, social: 'https://www.instagram.com/_riifeevres/', image: 'https://via.placeholder.com/300' }
];

let currentIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    const personImage = document.getElementById('person-image');
    const counter = document.getElementById('counter');
    const smashButton = document.getElementById('smash-button');
    const passButton = document.getElementById('pass-button');

    function updatePerson() {
        if (currentIndex < people.length) {
            const person = people[currentIndex];
            personImage.src = person.image;
            counter.textContent = people.length - currentIndex - 1;
        } else {
            document.body.innerHTML = '<h1>bkl, talai yesbata pani koi man parena vane talai kei manpardaiana</h1>';
        }
    }

    smashButton.addEventListener('click', () => {
        const person = people[currentIndex];
        localStorage.setItem('person', JSON.stringify(person));
        window.location.href = 'info.html';
    });

    passButton.addEventListener('click', () => {
        currentIndex++;
        updatePerson();
    });

    updatePerson();
});

