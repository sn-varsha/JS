let i,j,row;
let n=5;
for(i=0;i<n;i++){
    row="";
    for(j=0;j<n;j++){
        if(i==0 || i==n-1 || j==0 || j==n-1){
            row=row+"*";
        }
        else{
            row=row+" ";
        }
    }
    console.log(row);
}