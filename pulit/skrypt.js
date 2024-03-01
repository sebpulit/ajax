const getUsers = function(e) {
    e.preventDefault();

    const genderValue = document.querySelector('[name="plec]').value;
    const numberValue = document.querySelector('[name="liczba_osob"]').value;

    const url = `https://randomuser.me/api/?results=10&gender=male`;

};

const showUsers = function() {};

document.querySelector('form').addEventListener('submit', getUsers);