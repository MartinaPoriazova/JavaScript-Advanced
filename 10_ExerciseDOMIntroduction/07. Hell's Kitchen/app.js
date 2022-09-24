function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   let result = [];

   function onClick () {
      let input = Array.from(JSON.parse(document.getElementById(inputs).children[1].value));
      let bestRestInfo = document.getElementById("bestRestaurant").children[2];
      for (let data of input) {
         let [name, workerList] = data.split(" - ");
         if (!result.find(e=> e.name === name)) {
            result.push({
               name,
               avgSalary : 0,
               bestSalary : 0,
               sumSalary : 0,
               workerList : []
            });
            let currentRest = result.find(e=> e.name === name);
            workerList = workerList && workerList.split(", ")
            for (let currentWorker of workerList) {
               updateRest(currentRest, currentWorker)
            }
         }
      }
      
      let bestRest = result.sort((a,b) => a.avgSalary - b.avgSalary)[0];
      
      // bestRestInfo.textContent = `Name: ${bestRest.name} Average Salary: ${restaurant avgSalary} Best Salary: {restaurant bestSalary}`
   }

   function updateRest(obj, worker) {
      let [name, salary] = worker.split(" ");
      obj.sumSalary += Number(salary);
      if (obj.bestSalary < salary) {
         obj.bestSalary = salary;
      }
      obj.workerList.push({
         name,
         salary
      });
      obj.avgSalary = obj.sumSalary / obj.workerList.length;
   }
}