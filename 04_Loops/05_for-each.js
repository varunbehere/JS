//for each loop is also a function for array we can directly use this as function therefore
//for each loop doesnt return any value
//for each loop takes callback funtion as argument
const myArr= [
    {
        'firstName':'Varun',
        'lastName':'Behere'
    },
    {
        'firstName':'Palash',
        'lastName':'Dhurve'
    },
    {
        'firstName':'Om',
        'lastName':'Kolkar'
    },
    {
        'firstName':'Sahil',
        'lastName':'Deshpande'
    },{
        'firstName':'Shivranjan',
        'lastName':'Pathak'
    },
    {
        'firstName':'Sahil',
        'lastName':'baviskar'
    },
    {
        'firstName':'ANiket',
        'lastName':'Mogal'
    },
    {
        'firstName':'CAB',
        'lastName':'ABC'
    },
    {
        'firstName':'XYZ',
        'lastName':'ZYX'
    },
    {
        'firstName':'NML',
        'lastName':'LMN'
    },
    {
        'firstName':'RQP',
        'lastName':'PQR'
    },
    {
        'firstName':'CAB',
        'lastName':'BAC'
    },
]

myArr.forEach((items)=>{
    console.log(items.firstName)
})