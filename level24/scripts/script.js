//landenlijst


const setlandenlijst = function () {
    const landenlijst = document.getElementById("landenlijst")
    const data = randomPersonData;
    data.forEach(person => {
        const li = document.createElement("li");
        const liContent = document.createTextNode(
            `${person.region}`
        );
        li.appendChild(liContent);
        landenlijst.append(li);
    });
};



document.getElementById("landenlijst__btn").addEventListener("click", setlandenlijst);






//vrouwen van 30

const getWomen30 = () => randomPersonData.filter(
    (person) => person.gender === "female" && person.age === 30
)
console.log(getWomen30())



const setWomen30 = () => {
    const vrouwenThirtyList = document.getElementById("vrouwenThirtyList")
    const data = getWomen30()
    data.forEach(person => {
        const newLi = document.createElement('li');
        const newLink = document.createElement('a');
        const poster = document.createElement('img');

        newLink.target = '_blank';
        newLink.href = person.photo;
        poster.src = person.photo;

        newLi.appendChild(newLink).appendChild(poster);
        vrouwenThirtyList.appendChild(newLi);
    });
};



document.getElementById("vrouwenThirty__btn").addEventListener("click", setWomen30);


