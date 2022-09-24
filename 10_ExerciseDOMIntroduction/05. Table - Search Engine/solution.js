function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let rows = Array.from(document.querySelectorAll("tbody tr"));
      let searchText = document.getElementById("searchField").value;

      for (let row of rows) {
         row.classList.remove("select");
         if (row.innerHTML.includes(searchText)) {
            row.className = "select";
         }
      }
      searchText = "";
   }
}