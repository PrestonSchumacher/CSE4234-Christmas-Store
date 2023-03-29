import Grid from "./grid.js";
import Card from "./card.js";

const cards = [
  new Card(
    "https://cdn.thewirecutter.com/wp-content/media/2022/11/decoratechristmastree-2048px-iStock-1281771707-2x1-1.jpg?auto=webp&quality=75&crop=2:1&width=980&dpr=1.5",
    "Christmas Tree",
    "A Staple of the Holiday Season.",
    "15%",
    "$100",
    "$85"
  ),

  new Card(
    "https://media.istockphoto.com/id/1358361966/photo/jingle-bells.jpg?b=1&s=170667a&w=0&k=20&c=zNbdVxzOatolAqfAoAZ6_p3Af7vfNyi_WpxM8hX3q6M=",
    "Christmas Bells",
    "A Staple of the Holiday Season.",
    "25%",
    "$100",
    "$75"
  ),

  new Card(
    "https://i0.wp.com/www.onceuponachef.com/images/2020/12/gingerbread-men.jpg?resize=768%2C512&ssl=1",
    "Toys",
    "A Staple of the Holiday Season.",
    "15%",
    "$200",
    "$170"
  ),
];

const grid1 = new Grid(3, 1, cards, 'gridStyle', 'cardStyle');

const grid = document.querySelector(".gridStyle");

cards.forEach(card => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("cardStyle");
    cardDiv.innerHTML = `
      <img class="cardImage" src="${card.imageSource}">
      <h3>${card.cardTitle}</h3>
      <p>${card.cardDescription}</p>
      <p>Discount: ${card.cardDiscount}</p>
      <p>Original Price: ${card.cardOriginal}</p>
      <p>Discounted Price: ${card.cardDiscounted}</p>
    `;
  

    cardDiv.addEventListener('mouseover', () => {

      cardDiv.classList.add('cardHover');
    });
  

    cardDiv.addEventListener('mouseout', () => {

      cardDiv.classList.remove('cardHover');
    });
  
    grid.appendChild(cardDiv);
  });


const tableBody = document.getElementById("table-body");

cards.forEach(card => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${card.cardTitle}</td>
    <td>${card.cardOriginal}</td>
    <td>${card.cardDiscounted}</td>
  `;
  tableBody.appendChild(row);
});
