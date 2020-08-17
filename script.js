let doc= '<table border=1px>';
let i= +2;
let j= +1;
while(i<10){
    doc+= '<tr>';
    while(j<10){
        doc+= '<td>' + i + 'x' + j + '=' + i*j + '</td>';
        j++;
    }
    doc+= '</tr>';
    j= +1;
    i++;
}
doc+='</table>';
document.getElementById('bangCuuChuong').innerHTML= doc;