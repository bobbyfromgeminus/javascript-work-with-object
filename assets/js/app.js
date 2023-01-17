'use strict';

const persons = [
    {
        firstName: 'Kazimir',
        lastName: 'Szentalmási',
        age: 32,
        gender: 'férfi',
        height: 187,
        weight: 95,
        eyeColor: 'kék',
        hairColor: 'brown',
        footSize: 45
    },
    {
        firstName: 'Laura',
        lastName: 'Szentalmási',
        age: 28,
        gender: 'Nő',
        height: 173,
        weight: 52,
        eyeColor: 'barna',
        hairColor: 'fekete',
        footSize: 38
    },
    {
        firstName: 'Anasztázia',
        lastName: 'Kövesdy',
        age: 23,
        gender: 'Nő',
        height: 167,
        weight: 45,
        eyeColor: 'zöld',
        hairColor: 'vörös',
        footSize: 37
    },
    {
        firstName: 'Eduárd',
        lastName: 'Morvai',
        age: 45,
        gender: 'Férfi',
        height: 179,
        weight: 71,
        eyeColor: 'barna',
        hairColor: 'fekete',
        footSize: 42
    },
];

const header = document.querySelector('h1');
const nav = document.querySelector('nav');
const container = document.querySelector('div');
let navContent = `<table>`;

persons.forEach( (item, index) => {
    navContent += ` <tr>
                        <td style="width: 70%">${item.lastName} ${item.firstName}</td>
                        <td style="width: 30%"><button onclick="showDates(${index})">Mutasd!</button></td>
                    </tr>`;
    //const button = document.createElement('button')
    //nav.appendChild(button);
    //button.textContent = `${item.lastName} ${item.firstName} adatai`;
    //button.addEventListener('click', () => showDates(item));
})

navContent += `</table>`;
nav.innerHTML = navContent;

const showDates = (index) => {
    const person = persons[index];
    container.classList.add('container');
    container.innerHTML = ` <h2>${person.lastName} ${person.firstName}</h2>
                            életkor: <span>${person.age} év</span><br>
                            nem: <span>${person.gender}</span><br>
                            magasság: <span>${person.height} cm</span><br>
                            testsúly: <span>${person.weight} kg</span><br>
                            szeme színe: <span>${person.eyeColor}</span><br>
                            hajszíne: <span>${person.hairColor}</span><br>
                            lábméret: <span>${person.footSize}</span>`;
}
