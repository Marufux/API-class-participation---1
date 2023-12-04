function connect() {
  var searchTerm = document.getElementById("searchBox").value;
  var url = `https://www.themealdb.com/api/json/v1/1/categories.php`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => display(data.categories.slice(0, 5)))
    .catch((error) => console.error("Error:", error));
}

function display(data) {
  var oldContent = document.getElementById("container");
  oldContent.textContent = "";

  for (var i = 0; i < data.length; i++) {
    var newDiv = document.createElement("div");
    newDiv.innerHTML = `
            <div class="mealStyle">
                <h4>${data[i].strCategory}</h4>
                <p>${data[i].strCategoryDescription}</p>
            </div>
        `;

    oldContent.appendChild(newDiv);
  }
}
