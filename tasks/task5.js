let mountains = [
    {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
    {name: "Everest", height: 8848, country: "Nepal"}

];

function buildData (data){
    let table = document.createElement('table'); 
    table.innerHTML = '<tr><th>Name</th><th>Height</th><th>places</th></tr>';
    let divine = document.getElementById('mountains');
    divine.appendChild(table)

    for(let key of mountains){
        const row2 = document.createElement('tr');
        const data1 = document.createElement('td');
        const data2 = document.createElement('td');
        const data3 = document.createElement('td')

        data1.innerText = key.name
        data2.innerText = key.height
        data3.innerText = key.country

        data2.style.textAlign = 'right'
        data2.style.backgroundColor = 'red'
        
        row2.appendChild(data1)
        row2.appendChild(data2)
        row2.appendChild(data3)

        table.appendChild(row2)

        
    }
    
   
    
}
buildData()