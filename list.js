const body=document.querySelector("body")
const table=document.querySelector("table")

table.style.backgroundColor="white";
table.style.boxShadow="0 8px 22px rgba(0,0,0,0.5)"

function generateList(){
    const thead=document.querySelector("thead")
    const tbody=document.querySelector("tbody")
    
    
    
    var request=new XMLHttpRequest();
    request.onreadystatechange=function(){
    
        if(this.readyState==4&&this.status==200){
            const obj=JSON.parse(request.response);
            const json=obj.products;
           
            //table header
            const headings=Object.keys(json[0]);
    
            thead.innerHTML=""
            var row = document.createElement("tr");
           
            for(var i=0;i<headings.length;i++){
                var hcell=document.createElement("th")
                var hcellText=document.createTextNode(headings[i]);
                hcell.appendChild(hcellText);
                row.appendChild(hcell)

            };

            thead.appendChild(row)


            //table body
            tbody.innerHTML="";
            //convert each key-value pairs in every objects as an array
            for(var i=0;i<json.length;i++){
                const entries=Object.entries(json[i]);
                var row = document.createElement("tr");
                for(var j=0;j<entries.length;j++){
                    var cell = document.createElement("td");
                    var cellText = document.createTextNode(entries[j][1]);
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                }
                var inCell=document.createElement("input")
                inCell.setAttribute("type","checkbox")
                inCell.style.marginRight="50px"
                cell.appendChild(inCell);
                row.appendChild(cell);
                tbody.appendChild(row);
            }

            

            


    


          
            
        }
    }
    request.open("GET","products.json","true");
    request.send();
    
}
