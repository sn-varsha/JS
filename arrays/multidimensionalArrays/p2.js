let ar = [
    [
        [34,55],
        [56,32]
    ],
    [
        [12,34],
        [56,78]
    ]
];

for(let i=0;i<ar.length;i++){
    for(let j=0;j<ar[i].length;j++){
        for(let k=0;k<ar[i][j].length;k++){
            console.log(ar[i][j][k]);
        }
    }
}