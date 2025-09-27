/*JSON*/
const data = {
  agricultureTypes: [
   { type: "Protected Agricultural", percentage: 6 },   
  { type: "Irrigation Agricultural", percentage: 32.5 }, 
  { type: "Rainfed Agricultural", percentage: 62.5 },    
  { type: "Organic Agricultural", percentage: 1 }  
  ],
  diseases: [
    { name: "Fungal", percentage: 45 },
    { name: "Bacterial", percentage: 30 },
    { name: "Viral", percentage: 25 }
  ]
};


if (document.getElementById("agricultureChart")) {
  const ctx = document.getElementById("agricultureChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: data.agricultureTypes.map(item => item.type),
      datasets: [{
        label: "Percentage",
        data: data.agricultureTypes.map(item => item.percentage),
        backgroundColor: ["#6278c0ff", "#f0b80fff",  "#1d9b237e"]
      }]
    }
  });
}




if (document.getElementById("diseasesChart")) {
  const ctx = document.getElementById("diseasesChart").getContext("2d");
  new Chart(ctx, {
    type: "pie",
    data: {
      labels: data.diseases.map(item => item.name),
      datasets: [{
        data: data.diseases.map(item => item.percentage),
        backgroundColor: ["#88e2eeff", "#65dfa6ff", "#FF9800"]
      }]
    }
  });
}





